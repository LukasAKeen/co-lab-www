import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'About — Co-Lab',
  description:
    'Co-Lab is built by sales operators who got tired of buyers going dark between meetings. We build the workspace where deals stay alive.',
  alternates: { canonical: 'https://colabapp.ai/about' },
  openGraph: {
    title: 'About — Co-Lab',
    description:
      'Why we built Co-Lab and what we’re building toward.',
    url: 'https://colabapp.ai/about',
    type: 'website',
  },
}

const principles = [
  {
    eyebrow: '01',
    title: 'Build for the gaps between meetings.',
    body:
      "Most sales tools optimize the call. The deal lives between the calls — in the inbox, in the silent week, in the procurement loop. That's where Co-Lab lives.",
  },
  {
    eyebrow: '02',
    title: 'AI as a coach, not the salesperson.',
    body:
      "AI doesn’t close deals. People do. Co-Lab’s AI handles the busywork — drafting first versions, watching for stalling signals, surfacing the next move — so AEs can spend time where it matters.",
  },
  {
    eyebrow: '03',
    title: 'No theater. Numbers and signals.',
    body:
      'Every claim we make ships with a number behind it. Every feature we build is judged by whether it moves the deal forward. If a feature looks great in a demo but doesn’t change a sales metric, we cut it.',
  },
  {
    eyebrow: '04',
    title: 'Buyer-first surfaces, not vendor-first dashboards.',
    body:
      'A deal room is a thing your buyer opens. Not a thing your team logs into. Everything we ship is judged by whether the buyer comes back to it.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
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
            kicker="About"
            title={
              <>
                We&apos;re building the workspace
                <br />
                where deals stay alive.
              </>
            }
            subhead="Co-Lab was built by sales operators who got tired of watching deals die in the silence between meetings. We don’t think the answer is more outreach. We think the answer is better surfaces — buyer-facing rooms where the deal lives, with an AI coach watching the signals."
          />
        </div>
      </section>

      {/* Origin */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-[#E7E7EE]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow text-[#5B5BD6] mb-4">Origin</p>
          <h2 className="display text-3xl sm:text-4xl md:text-[40px] text-[#0B0E1A] leading-[1.1] tracking-[-0.03em] mb-6">
            Sales hasn&apos;t actually changed in 15 years.
          </h2>
          <div className="space-y-5 text-[16px] sm:text-[17px] text-[#1F2333] leading-[1.7]">
            <p>
              The tools changed. The process didn&apos;t. AEs still build decks
              by hand, send them as attachments, and wait. Buyers still get
              forgotten in their own inbox. Champions still go silent and
              nobody finds out until the deal is already cold.
            </p>
            <p>
              We started Co-Lab because we&apos;d run that play hundreds of
              times and watched it fail in the same predictable way. The
              missing piece was never another sequence tool or another CRM
              dashboard. It was a place the buyer actually returned to —
              and a way to know when they did.
            </p>
            <p className="text-[#71768B]">
              [REPLACE: founding story, year, location, founder background.]
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            anchor="01"
            kicker="What we believe"
            title={
              <>
                Four principles
                <br />
                we ship by.
              </>
            }
            subhead="These aren’t values posters. They’re the calls we make every week — what makes the roadmap, what doesn’t, and what we kill when it stops working."
          />

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {principles.map((p) => (
              <div
                key={p.eyebrow}
                className="bg-white border border-[#E7E7EE] rounded-2xl p-7 card-hover"
              >
                <p className="eyebrow text-[#5B5BD6] mb-4">{p.eyebrow}</p>
                <h3 className="display text-[22px] text-[#0B0E1A] leading-[1.2] tracking-[-0.025em] mb-3">
                  {p.title}
                </h3>
                <p className="text-[14.5px] text-[#3D4256] leading-[1.6]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#F6F6FA] border-y border-[#E7E7EE]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow text-[#5B5BD6] mb-4">Team</p>
          <h2 className="display text-3xl sm:text-4xl text-[#0B0E1A] leading-[1.1] tracking-[-0.03em] mb-6">
            A small team of operators and engineers.
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#1F2333] leading-[1.7] mb-4">
            [REPLACE: short paragraph about the team — size, where you sit
            (SF / NYC / remote / wherever), backgrounds (sales / eng / both).]
          </p>
          <p className="text-[16px] text-[#71768B] leading-[1.7]">
            We&apos;re hiring across engineering and design.{' '}
            <Link
              href="/contact"
              className="text-[#5B5BD6] font-medium hover:underline"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="display text-3xl sm:text-4xl md:text-[44px] text-[#0B0E1A] leading-[1.05] tracking-[-0.03em] mb-5">
            Want to see how Co-Lab fits your team?
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#3D4256] leading-[1.55] mb-8 max-w-[560px] mx-auto">
            Try it free — or send us a note. We read everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai/register"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.98]"
            >
              Start free
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-[#0B0E1A] bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-xl transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
