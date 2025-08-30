import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WhatsNew from "@/components/WhatsNew"
import Writing from "@/components/Writing"
import Acting from "@/components/Acting"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhatsNew />
      <Writing />
      <Acting />
      <Gallery />
      <Contact />
    </main>
  )
}