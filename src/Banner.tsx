import NavBar from "./NavBar";

function Banner() {
  const content: any[] = [
    {
      text: `Hello, I'm Henrique Szabo, a Java full stack developer who will change the world with you`,
    },
  ];

  return (
    <div className="font-sans flex-col flex justify-between bg-black h-screen text-white">
      <NavBar></NavBar>
      <div className="flex h-1/2 justify-center text-center items-center text-5xl">
        <p>
          <span className="text-my-green">"</span>
          {content[0].text}
          <span className="text-my-green">"</span>👋
        </p>
      </div>
      <div className="flex justify-end text-xl font-medium">
        <p className="mr-8 mb-5">
          <span className="text-my-green">szabo@szabo-computer</span>:
          <span className="text-my-blue">~</span>$ touch coffe.txt
        </p>
      </div>
    </div>
  );
}

export default Banner;
