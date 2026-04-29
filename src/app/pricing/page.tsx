import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Pricing from '@/components/sections/Pricing'

export const metadata: Metadata = {
  title: 'Pricing — Co-Lab',
  description:
    'Co-Lab pricing: Starter (free), Growth ($35/seat/mo), and Accelerate ($55/seat/mo). 14-day free trial on every plan. Cancel anytime.',
  alternates: { canonical: 'https://colabapp.ai/pricing' },
  openGraph: {
    title: 'Pricing — Co-Lab',
    description:
      'Three plans, no surprises. Start free. Upgrade when you need more pods, integrations, or AI power.',
    url: 'https://colabapp.ai/pricing',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
}
