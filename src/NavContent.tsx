import { Button } from "@/components/ui/button"


function NavContent() {
  const links: any[] = [
    {name: "Github", href: "https://github.com/Szaboltz"},
    {name: "Linkedin", href: "https://www.linkedin.com/in/henrique-szabo-741797256/"},
    {name: "Forms", href: "?#"}
  ]
  return (
    <ul className="flex gap-2">
      {links.map((link, index) => (
        <li key={index}>
          <Button variant="ghost" asChild>
            <a href={link.href}>{link.name}</a>
          </Button>
        </li>
      ))}
  </ul>
  
  )
}

export default NavContent