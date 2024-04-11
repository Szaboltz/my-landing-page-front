import NavBar from "./NavBar";
import "./App.css";

function Banner() {
  return (
    <div className="font-sans flex-col flex justify-between bg-black h-screen text-white">
      <NavBar></NavBar>
      <div className="flex h-1/2 flex-col justify-center items-center">
        <div className="p-4">
          <span className="sm:text-3xl text-2xl">Hello,</span>
          <h1 className="sm:text-5xl text-3xl mt-2 font-bold">I'm Henrique Szabo.</h1>
          <p className="my-4 leading-8 text-lg">
            I'm a full stack software engineer specializing in{" "}
            <span className="bg-my-highlight border-my-border code">Java</span>,{" "}
            <span className="bg-my-highlight border-my-border code">
              Javascript
            </span>{" "}
            &{" "}
            <span className="bg-my-highlight border-my-border code">
              Typescript
            </span>
          </p>
          <p className="my-4 leading-8 text-lg">
            My motivation is to provide solutions to world problems through
            programming.
          </p>
          <p className="my-4 leading-8  text-lg">
            I have some technology articles published and professional projects
            I'm working on that you can check out on my social media channels
            above.
          </p>
          <p className="my-4 leading-8 text-lg">
            Feel free to send me a message. Make it simple.👋
          </p>
        </div>
      </div>
      <div className="flex text-lg justify-center sm:justify-end sm:text-xl font-medium">
        <p className="sm:mr-8 sm:mb-5">
          <span className="text-my-green">szabo@szabo-computer</span>:<span className="text-my-blue">~</span>$ touch coffe.txt
        </p>
      </div>
    </div>
  );
}

export default Banner;
