import JsonLd from '@/components/JsonLd'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LogoStrip from '@/components/sections/LogoStrip'
import MiniDemo from '@/components/sections/MiniDemo'
import HowItWorks from '@/components/sections/HowItWorks'
import Problem from '@/components/sections/Problem'
import Features from '@/components/sections/Features'
import ForWho from '@/components/sections/ForWho'
import WhiteLabel from '@/components/sections/WhiteLabel'
import Integrations from '@/components/sections/Integrations'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFBFF]">
      <JsonLd />
      <Navbar />
      <Hero />
      <LogoStrip />
      <Problem />
      <HowItWorks />
      <MiniDemo />
      <Features />
      <ForWho />
      <WhiteLabel />
      <Integrations />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
