import perfil from "./assets/perfil.jpg";
import './App.css'

function AboutMe() {
  return (
    <div className="bg-my-grey flex justify-center h-500 p-10">
      <div className="grid grid-cols-2 gap-5 h-full">
        <div className="flex flex-col justify-center itens-center">
          <h2>About me</h2>
          <p>
            "Olá, sou Henrique, um desenvolvedor Full Stack dedicado e apaixonado por tecnologia. Minha experiência abrange tanto o desenvolvimento do lado do servidor quanto a criação de interfaces interativas do lado do cliente. Com habilidades sólidas em linguagens como JavaScript e expertise em frameworks modernos, estou comprometido em entregar soluções eficientes e de alta qualidade. Tenho um histórico de sucesso na criação de aplicativos web inovadores e estou constantemente buscando desafios para aprimorar minhas habilidades. Se você procura um profissional comprometido com a excelência técnica e resultados excepcionais, estou pronto para contribuir ao seu projeto" 
          </p>
        </div>
          <div className="flex justify-end items-center">
            <img src={ perfil } alt="" className="fit-img"/>
          </div>
      </div>
    </div>
  );
}

export default AboutMe;
