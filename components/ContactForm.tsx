"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase
      .from("messages")
      .insert([
        {
          name,
          email,
          message,
        },
      ])

    if (error) {
      
      console.log(error)
      alert(error.message)
    } else {
      alert("Message sent successfully!")

      setName("")
      setEmail("")
      setMessage("")
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-3 rounded-lg h-32"
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}