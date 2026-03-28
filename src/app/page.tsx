import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Problem from '@/components/sections/Problem'
import ForWho from '@/components/sections/ForWho'
import Features from '@/components/sections/Features'
import AnalyticsSpotlight from '@/components/sections/AnalyticsSpotlight'
import BuilderShowcase from '@/components/sections/BuilderShowcase'
import WhiteLabel from '@/components/sections/WhiteLabel'
import Integrations from '@/components/sections/Integrations'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFBFF]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Problem />
      <Features />
      <AnalyticsSpotlight />
      <ForWho />
      <BuilderShowcase />
      <WhiteLabel />
      <Integrations />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
