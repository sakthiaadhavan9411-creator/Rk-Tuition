import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { CurriculumSection } from './components/CurriculumSection'
import { TestimonialSection } from './components/TestimonialSection'
import { PricingSection } from './components/PricingSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { CopyrightBar } from './components/CopyrightBar'
import { BottomNav } from './components/BottomNav'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#051A24]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CurriculumSection />
        <TestimonialSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <div className="pb-24">
        <CopyrightBar />
      </div>
      <BottomNav />
    </div>
  )
}
