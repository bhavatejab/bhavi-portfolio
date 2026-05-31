"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          Bhavateja
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Auth Button */}
        <div>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}