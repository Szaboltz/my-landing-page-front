function Banner() {
  const content: any[] = [
    {
      text: `Hello, I'm Henrique Szabo, a full stack developer who will change the world with you`,
    },
  ];

  return (
    <div className="bg-black h-screen text-white">
      <div className="flex justify-center text-center items-center h-4/5 text-5xl">
        <p>
          <span className="text-my-green">"</span>
          {content[0].text}
          <span className="text-my-green">"</span>👋
        </p>
      </div>
      <div className="h-1/5 flex justify-end text-xl font-medium">
        <p className="mr-8">
          <span className="text-my-green">szabo@szabo-computer</span>:
          <span className="text-my-blue">~</span>$ touch coffe.txt
        </p>
      </div>
    </div>
  );
}

export default Banner;
