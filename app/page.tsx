import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedIn } from "@/components/featured-in"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Press } from "@/components/press"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedIn />
      <Portfolio />
      <About />
      <Press />
      <Contact />
      <Footer />
    </main>
  )
}
