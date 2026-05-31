import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contacts";
import Footer from "../components/Footer";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <ContactForm />
      <Footer />
    </main>
  );
}