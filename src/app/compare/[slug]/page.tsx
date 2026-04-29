import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/SectionHeader'
import {
  getComparison,
  getComparisonSlugs,
} from '@/lib/comparisons'

const SITE_URL = 'https://colabapp.ai'

export async function generateStaticParams() {
  return getComparisonSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cmp = getComparison(slug)
  if (!cmp) return {}
  const url = `${SITE_URL}/compare/${cmp.slug}`
  return {
    title: cmp.metaTitle,
    description: cmp.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: cmp.metaTitle,
      description: cmp.metaDescription,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: cmp.metaTitle,
      description: cmp.metaDescription,
    },
  }
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cmp = getComparison(slug)
  if (!cmp) notFound()

  const competitor = cmp.competitor

  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <Navbar />

      {/* Hero */}
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
            kicker="Compare"
            title={
              <>
                Co-Lab
                <span className="text-[#A4A8BC]"> vs </span>
                {competitor.name}
              </>
            }
            subhead={cmp.intro}
          />
        </div>
      </section>

      {/* Choose if blocks */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border-2 border-[#5B5BD6] p-7">
            <p className="eyebrow text-[#5B5BD6] mb-3">Choose Co-Lab if</p>
            <ul className="space-y-3">
              {cmp.chooseCoLabIf.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[14px] text-[#1F2333] leading-[1.55]"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#F2F2FB] flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-[#5B5BD6]" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white border border-[#E7E7EE] p-7">
            <p className="eyebrow text-[#71768B] mb-3">
              Choose {competitor.name} if
            </p>
            <ul className="space-y-3">
              {cmp.chooseCompetitorIf.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[14px] text-[#1F2333] leading-[1.55]"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#F4F4F8] flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-[#71768B]" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <p className="eyebrow text-[#5B5BD6]">At a glance</p>
            <p className="text-[12px] text-[#71768B]">
              {competitor.geography} · {competitor.site}
            </p>
          </div>

          <div className="bg-white border border-[#E7E7EE] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#E7E7EE] bg-[#F4F4F8]">
              <div className="p-4 eyebrow text-[10px] text-[#71768B]">Feature</div>
              <div className="p-4 eyebrow text-[10px] text-[#5B5BD6]">Co-Lab</div>
              <div className="p-4 eyebrow text-[10px] text-[#71768B]">
                {competitor.name}
              </div>
            </div>
            {cmp.table.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_1fr_1fr] ${
                  i < cmp.table.length - 1 ? 'border-b border-[#E7E7EE]' : ''
                }`}
              >
                <div className="p-4 text-[13.5px] font-semibold text-[#0B0E1A]">
                  {row.label}
                </div>
                <div className="p-4 text-[13.5px] text-[#1F2333] leading-[1.55] bg-[#F2F2FB]/40">
                  {row.coLab}
                </div>
                <div className="p-4 text-[13.5px] text-[#1F2333] leading-[1.55]">
                  {row.competitor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow text-[#5B5BD6] mb-2">In detail</p>
          <h2 className="display text-2xl sm:text-3xl text-[#0B0E1A] tracking-[-0.025em] mb-10">
            How the two actually differ.
          </h2>

          <div className="space-y-10">
            {cmp.details.map((d) => (
              <div key={d.heading}>
                <h3 className="display text-[22px] text-[#0B0E1A] tracking-[-0.025em] mb-3">
                  {d.heading}
                </h3>
                <p className="text-[15.5px] text-[#1F2333] leading-[1.7]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="display text-3xl sm:text-4xl text-[#0B0E1A] leading-[1.05] tracking-[-0.03em] mb-5">
            Try Co-Lab free.
            <br />
            <span className="text-[#71768B]">Decide for yourself.</span>
          </h2>
          <p className="text-[16px] text-[#3D4256] leading-[1.55] mb-8 max-w-[520px] mx-auto">
            14 days, no credit card. Or get in touch and we&apos;ll walk you through
            a real deal room — including the parts that don&apos;t make the marketing
            site.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai/register"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.98]"
            >
              Start free
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-[#0B0E1A] bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-xl transition-colors"
            >
              Talk to us
            </Link>
          </div>
          <p className="mt-5 text-[11.5px] text-[#A4A8BC]">
            Comparison drawn from {competitor.name}&apos;s public materials. We
            try to be fair — if you spot something inaccurate, please {' '}
            <Link href="/contact" className="text-[#5B5BD6] hover:underline">
              let us know
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
