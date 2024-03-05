import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Frontend from "./Frontend";
import Backend from "./Backend";

function Skills() {
  const textFront: string = "Sou apaixonado por construir interfaces intuitivas e visualmente atraentes com HTML, CSS e JavaScript. Adoro ver minhas criações ganharem vida no frontend, proporcionando experiências interativas e cativantes para os usuários. Frameworks como React, Vue.js e Angular me ajudam a levar essas experiências para o próximo nível."

  const textBack: string = "Mas minha curiosidade não para na superfície. Quero entender o que acontece por trás da cortina, como os dados são armazenados, processados e manipulados. No backend, uso linguagens como Python, Java e PHP para construir sistemas robustos e escaláveis que dão vida às aplicações. Frameworks como Django, Spring Boot e Laravel me permitem resolver problemas complexos e criar soluções eficientes."

  return (
    <Card className="rounded-none mt-6">
      <CardContent className="p-4 grid gap-6 grid-cols-4">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {textFront}
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <Frontend></Frontend>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <p>Delize para o lado</p>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {textBack}
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <Backend></Backend>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <p>Delize para o lado</p>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  )
}

export default Skills