import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import Forms from "./Forms"

function Footer(){
  return (
    <Card className="rounded-none mt-6">
      <CardHeader className="text-center">
        <CardTitle>Send me a message</CardTitle>
        <CardDescription>I'll glad to make a deal with you!</CardDescription>
      </CardHeader>
      <CardContent>
          <Forms></Forms>
      </CardContent>
    </Card>
  )
}

export default Footer