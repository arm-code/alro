import "tailwindcss";
import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [  
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" }
]

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-violetPalette-darker  text-violetPalette-textLight p-4 m-4 rounded-xl shadow-md">
  <Link href={"/"} className="flex items-center gap-2 hover:text-violetPalette-light transition-colors">
    <HomeIcon />
    <span className="font-semibold text-lg">Home</span>
  </Link>

  <div className="flex gap-4">
    {navItems.map((item) => (
      <ActiveLink
        key={item.path}
        {...item}       
        
      />
    ))}
  </div>
</nav>

  )
}

