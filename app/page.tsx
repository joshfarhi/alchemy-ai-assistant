"use client";
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
      <div className="flex flex-col items-center">
        <Image
        src="/images/robot.png"
        alt="Robot"
        width={200}
        height={200}
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-center">Welcome to Alchemy AI</h1>
      <p className="text-base md:text-lg mt-4 text-center">
        Alchemy AI is a virtual assistant that can help you with anything you need.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => window.location.href = '/paperwork'}
      >
        Get Started Now
      </button>
      </div>
    </div>

  )
  }
