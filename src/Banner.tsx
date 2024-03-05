import {
  Card,
  CardContent
} from "@/components/ui/card";

function Banner() {
  return (
    <Card className="rounded-none mt-6">
      <CardContent className="p-20 flex items-center justify-center">
        <h1>Bem vindo a minha Landing Page</h1>
      </CardContent>
    </Card>
  );
}

export default Banner