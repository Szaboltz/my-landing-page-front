import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./components/ui/textarea"
import environment from "./env/environment.ts"
 
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string(),
  message: z.string().max(500)
})

function Forms(){

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  })

  function save(values: z.infer<typeof formSchema>) {
    if (values) {
      fetch(`http://localhost:8080/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 902bf55f-75ea-4f49-b259-f59f1db4a207'
        },
        body:   JSON.stringify(values)
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(save)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Alice or Bob" {...field}/>
              </FormControl>
              <FormDescription>
                Show me who you are.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}: any) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field}/>
              </FormControl>
              <FormDescription>
                I'll know who you are.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({field}: any) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
              <Textarea
                  placeholder="Write a message for me"
                  className="h-40 resize-none"
                  {...field}/>
              </FormControl>
              <FormDescription>
                Tell me what's the big deal?
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default Forms