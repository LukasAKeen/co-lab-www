import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Features from '@/components/sections/Features'
import AnalyticsSpotlight from '@/components/sections/AnalyticsSpotlight'
import BuilderShowcase from '@/components/sections/BuilderShowcase'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFBFF]">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <AnalyticsSpotlight />
      <BuilderShowcase />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
