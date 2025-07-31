"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Calculator } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/30 dark:border-white/10">
        <Button
          asChild
          variant={pathname === "/" ? "default" : "ghost"}
          size="sm"
          className={
            pathname === "/"
              ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
              : "text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30"
          }
        >
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Introduction
          </Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/converter" ? "default" : "ghost"}
          size="sm"
          className={
            pathname === "/converter"
              ? "bg-gradient-to-r from-sky-500 to-pink-500 text-white"
              : "text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30"
          }
        >
          <Link href="/converter" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Converter
          </Link>
        </Button>
      </div>
    </nav>
  )
}
