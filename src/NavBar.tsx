import NavContent from "./NavContent";

function NavBar() {
  return(
    <div className="font-sans h-16 flex items-center justify-center sm:justify-end bg-black">
      <NavContent></NavContent>
    </div>
  );
}

export default NavBar