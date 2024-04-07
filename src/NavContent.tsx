import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import environment from "./env/environment";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

function NavContent() {
  const links: any[] = [
    { name: "Github", href: "https://github.com/Szaboltz" },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/henrique-szabo-741797256/",
    },
    { name: "CV", href: "?#" },
    { name: "Contact me", href: "?#" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name == "name") {
      if (value.length > 0 && value.length < 3) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    }

    if (name == "email") {
      if (!validateEmail(value) && value.length > 0) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }

    if (name == "message") {
      if (name == "message" && value.length > 0 && value.length < 3) {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const save = async (event: any) => {
    let toSafe: boolean = true;
    event.preventDefault();

    if (
      formData.email.length <= 0 ||
      formData.name.length <= 0 ||
      formData.message.length <= 0
    ) {
      console.log("Não salvar Branco");
      toSafe = false;
    }

    if (nameError || emailError || messageError) {
      console.log("Não salvar erro");
      toSafe = false;
    }

    if (toSafe) {
      setIsLoading(true)
      await fetch(`${environment.url}/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response: any) => {
          return response.json();
        })
        .then((data: any) => {
          setFormData({
            name: "",
            email: "",
            message: ""
          })
          console.log(data);
          setShowToast(true)
          setIsLoading(false)
        })
        .catch((error: any) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="text-white mr-8">
      <ul className="flex gap-2">
        <li>
          <Button variant="ghost" asChild>
            <a className="font-medium text-base" href={links[0].href}>
              {links[0].name}
            </a>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild>
            <a className="font-medium text-base" href={links[1].href}>
              {links[1].name}
            </a>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild>
            <a className="font-medium text-base" href={links[2].href}>
              {links[2].name}
            </a>
          </Button>
        </li>
        <Dialog>
          <li>
            <DialogTrigger>
              <Button variant="ghost" className="font-medium text-base">
                {links[3].name}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send me a message</DialogTitle>
                <DialogDescription>What's the big deal?</DialogDescription>
              </DialogHeader>
              <form onSubmit={save} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Bob"
                  />
                  {nameError && (
                    <span className="text-xs text-red-600">
                      Name must be at least 3 characters
                    </span>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="bob@gmail.com"
                  />
                  {emailError && (
                    <span className="text-xs text-red-600">
                      Email must be valid
                    </span>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type something"
                  />
                  {messageError && (
                    <span className="text-xs text-red-600">
                      Message must be at least 3 characters
                    </span>
                  )}
                </div>
                <DialogFooter>
                  <DialogClose>
                    <Button type="button" variant="outline">
                      Close
                    </Button>
                  </DialogClose>
                  {isLoading ? (
                    <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                  ) : (<Button type="submit" onClick={() => {  // Exibir toast somente quando menssagem enviada 
                    toast({
                      title: "Message send sucefully",
                      description: "Thank you so much!"
                    })
                  }}>Send</Button>)}
                </DialogFooter>
              </form>
            </DialogContent>
          </li>
        </Dialog>
      </ul>
      <Toaster />
    </div>
  );
}

export default NavContent;
