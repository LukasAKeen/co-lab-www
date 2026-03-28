import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MiniDemo from '@/components/sections/MiniDemo'
import HowItWorks from '@/components/sections/HowItWorks'
import Problem from '@/components/sections/Problem'
import Features from '@/components/sections/Features'
import AnalyticsSpotlight from '@/components/sections/AnalyticsSpotlight'
import ForWho from '@/components/sections/ForWho'
import BuilderShowcase from '@/components/sections/BuilderShowcase'
import WhiteLabel from '@/components/sections/WhiteLabel'
import Security from '@/components/sections/Security'
import Integrations from '@/components/sections/Integrations'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFBFF]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MiniDemo />
      <Problem />
      <Features />
      <AnalyticsSpotlight />
      <ForWho />
      <BuilderShowcase />
      <WhiteLabel />
      <Security />
      <Integrations />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
