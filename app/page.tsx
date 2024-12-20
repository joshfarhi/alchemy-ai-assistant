import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { NavigationMenuDemo } from "@/components/navbar"

export default function Home() {
  return (
    <><NavigationMenuDemo />
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </>

  )
  }
