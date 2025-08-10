import type React from "react"
import type { Metadata } from "next"
import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
})

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Aether Machina",
  description: "Enter the ultimate time-bending arena of Renaissance innovation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel_decorative.variable} ${cormorant_garamond.variable}`}>
      <body className="bg-black text-white font-cormorant-garamond overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
