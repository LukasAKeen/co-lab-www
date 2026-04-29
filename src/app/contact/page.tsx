import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Co-Lab',
  description:
    "Get in touch with the Co-Lab team. We're a small team — every message reaches a person.",
  alternates: { canonical: 'https://colabapp.ai/contact' },
  openGraph: {
    title: 'Contact — Co-Lab',
    description: 'Send us a note. We read everything.',
    url: 'https://colabapp.ai/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[420px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(91,91,214,0.10) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader
            anchor="—"
            kicker="Contact"
            title={
              <>
                Tell us what
                <br />
                you&apos;re working on.
              </>
            }
            subhead="We're a small team — every message reaches a person, not a ticket queue. Whether you're evaluating Co-Lab, hiring an AE, or just have feedback, we want to hear it."
          />
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-24 md:pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#E7E7EE] rounded-2xl p-6 sm:p-8 md:p-10">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
