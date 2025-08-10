"use client"

import Link from "next/link"
import { useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm py-4 px-6 flex items-center justify-between border-b border-yellow-500/30 shadow-lg">
      <Link href="/" className="text-2xl font-cinzel-decorative text-yellow-400 glow-yellow">
        Aether Machina
      </Link>
      <div className="hidden md:flex space-x-8 font-cormorant text-lg">
        <Link href="/" className="hover:text-yellow-400 transition-colors">
          Home
        </Link>
        <Link href="/delta-t" className="hover:text-yellow-400 transition-colors">
          Lore
        </Link>
        <Link href="/join" className="hover:text-yellow-400 transition-colors">
          Join
        </Link>
        <Link href="/login" className="hover:text-yellow-400 transition-colors">
          Login
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-yellow-400 focus:outline-none">
          {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-4 border-b border-yellow-500/30">
          <Link
            href="/"
            className="text-lg font-cormorant hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/delta-t"
            className="text-lg font-cormorant hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            Lore
          </Link>
          <Link
            href="/join"
            className="text-lg font-cormorant hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            Join
          </Link>
          <Link
            href="/login"
            className="text-lg font-cormorant hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}
