import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Temperature Converter - Professional Tool",
  description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin with precision",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <Navigation />
          <ThemeToggle />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
