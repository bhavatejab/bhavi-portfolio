"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white">
          Bhavateja
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">

          <a
            href="#home"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-6 text-gray-300 font-medium">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>

        </div>
      )}

    </nav>
  )
}