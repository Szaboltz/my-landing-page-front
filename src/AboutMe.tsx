import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import perfil from "./assets/perfil.jpg"


function AboutMe(){
  const text: string = "Olá, sou Henrique, um desenvolvedor Full Stack dedicado e apaixonado por tecnologia. Minha experiência abrange tanto o desenvolvimento do lado do servidor quanto a criação de interfaces interativas do lado do cliente. Com habilidades sólidas em linguagens como JavaScript e expertise em frameworks modernos, estou comprometido em entregar soluções eficientes e de alta qualidade. Tenho um histórico de sucesso na criação de aplicativos web inovadores e estou constantemente buscando desafios para aprimorar minhas habilidades. Se você procura um profissional comprometido com a excelência técnica e resultados excepcionais, estou pronto para contribuir ao seu projeto"


  return(
    <Card className="rounded-none mt-6">
      <CardContent className="p-4 grid gap-6 grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>About me</CardTitle>
          </CardHeader>
          <CardContent className="text-justify">
            <p className="w-full">
              {text}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>It's Me!</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={perfil} alt="Profile Photo" />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default AboutMe