import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-gray py-12 text-white border-t border-yellow-500/30">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-cinzel-decorative text-yellow-400 mb-4">Aether Machina</h3>
          <p className="text-md font-cormorant-garamond">
            Unravel the secrets of time and machinery. Master the Aether. Control the battlefield.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-cinzel-decorative text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 font-cormorant-garamond">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/delta-t" className="hover:text-yellow-400 transition-colors">
                Lore
              </Link>
            </li>
            <li>
              <Link href="/join" className="hover:text-yellow-400 transition-colors">
                Join
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-yellow-400 transition-colors">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-cinzel-decorative text-yellow-400 mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="text-yellow-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-yellow-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-yellow-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="Youtube" className="text-yellow-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
          </div>
          <p className="text-md font-cormorant-garamond mt-4">
            &copy; {new Date().getFullYear()} Aether Machina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
