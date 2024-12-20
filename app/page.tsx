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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold">Welcome to Alchemy AI</h1>
        <p className="text-lg mt-4 text-center">
          Alchemy AI is a virtual assistant that can help you with anything you need.
        </p>
        <div className="flex flex-col items-center mt-8">
          <Image
            src="/public/images/robot.png"
            alt="Alchemy AI Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>      

  )
  }
