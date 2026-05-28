"use client"

import { supabase } from "@/lib/supabase"

export default function Navbar() {

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    })
  }

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-6 backdrop-blur-md bg-black/30 text-white z-50">
      
      <h1 className="text-2xl font-bold">
        Bhavi
      </h1>

      <ul className="flex gap-6 items-center">
        
        <li>
          <a
            href="#home"
            className="hover:text-gray-400 transition"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-gray-400 transition"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-gray-400 transition"
          >
            Contact
          </a>
        </li>

        <li>
          <button
            onClick={loginWithGoogle}
            className="bg-white text-black px-4 py-2 rounded-lg hover:opacity-80 transition"
          >
            Login
          </button>
        </li>

      </ul>
    </nav>
  )
}