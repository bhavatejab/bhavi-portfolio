"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Hero() {

  const [loading, setLoading] = useState(false)

  return (
    <section 
    id = "home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 md:px-12">

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >

          <p className="text-blue-400 font-medium tracking-widest">
            FULL STACK DEVELOPER
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Bhavateja
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl">
            I build modern, responsive and high-performance websites
            using Next.js, Tailwind CSS and modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button
              onClick={() => {
                setLoading(true)

                setTimeout(() => {
                  setLoading(false)
                }, 2000)
              }}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl text-white font-semibold transition duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              {loading ? "Loading..." : "View Projects"}
            </button>

            <button className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-2xl text-white font-semibold transition duration-300 hover:scale-105">
              Contact Me
            </button>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 justify-center md:justify-start pt-4">

            <a
              href="#"
              className="px-5 py-2 rounded-xl bg-gray-800 hover:bg-blue-600 text-white transition duration-300 hover:scale-105"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="px-5 py-2 rounded-xl bg-gray-800 hover:bg-red-500 text-white transition duration-300 hover:scale-105"
            >
              Email
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative w-[320px] h-[320px] rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-[2px]">

            <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">

              <div className="text-center space-y-4">

                <h2 className="text-3xl font-bold text-white">
                  Frontend Developer
                </h2>

                <p className="text-gray-400 px-6">
                  Building beautiful modern web experiences.
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>

              </div>

            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 -z-10"></div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}