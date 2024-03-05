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
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string(),
  message: z.string().max(500)
})

function Forms(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values) console.log(values)
    // Do something with the form values.
    // This will be type-safe and validated.
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="José Luiz" {...field}/>
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
                <Input placeholder="Jose123@gmail.com" {...field}/>
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
                  placeholder="Type something"
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