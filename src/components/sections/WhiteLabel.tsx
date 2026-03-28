'use client'

import { motion } from 'framer-motion'
import { Palette, Globe, Type, ImageIcon, Check, Sparkles } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

const features = [
  { icon: Palette, label: 'Custom brand colors & themes' },
  { icon: ImageIcon, label: 'Your logo on every pod' },
  { icon: Globe, label: 'Custom domain (deals.yourco.com)' },
  { icon: Type, label: 'Font & typography matching' },
]

/* ── Mockup: Two branded pod previews side by side ── */
function BrandedPodPreview({
  brand,
  color,
  logo,
  domain,
  delay,
}: {
  brand: string
  color: string
  logo: string
  domain: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.08)] flex-1"
    >
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#F8F9FC] border-b border-black/[0.05]">
        <div className="flex gap-1 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-md px-2.5 py-0.5 text-[10px] text-[#9BA3B8] border border-black/[0.05]">
            {domain}
          </div>
        </div>
      </div>

      {/* Pod header with branding */}
      <div className="p-4">
        <div className="rounded-xl p-4" style={{ backgroundColor: `${color}08`, border: `1px solid ${color}15` }}>
          {/* Brand bar */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {logo}
            </div>
            <span className="text-xs font-semibold text-[#0D1117]">{brand}</span>
          </div>

          {/* Pod content preview */}
          <div className="space-y-2">
            <div className="h-2.5 rounded-full w-3/4" style={{ backgroundColor: `${color}20` }} />
            <div className="h-2 rounded-full w-1/2" style={{ backgroundColor: `${color}12` }} />
          </div>

          {/* Mini blocks */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {['Welcome', 'Proposal', 'Demo', 'Next Steps'].map((block) => (
              <div
                key={block}
                className="rounded-lg px-2.5 py-2 bg-white border border-black/[0.05]"
              >
                <div className="text-[10px] font-medium text-[#0D1117]">{block}</div>
                <div className="h-1.5 rounded-full mt-1.5 w-2/3" style={{ backgroundColor: `${color}18` }} />
              </div>
            ))}
          </div>

          {/* Branded CTA */}
          <div
            className="mt-3 rounded-xl py-2 text-center text-[10px] font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            Schedule a Call
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhiteLabel() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#F43F5E]/8 border border-[#F43F5E]/15 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F43F5E] shadow-sm flex items-center gap-1.5">
                <Palette size={11} className="text-[#F43F5E]" />
                White-Label
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight text-[#0D1117] leading-tight mb-5"
            >
              Your brand.{' '}
              <span className="text-gradient">Your deal room.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-[#3D4663] leading-relaxed mb-8">
              Make every pod look like it was built in-house. Custom colors, your logo,
              your domain — buyers see your brand, not ours. Full white-label means
              every touchpoint reinforces trust.
            </motion.p>

            {/* Feature list */}
            <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
              {features.map((feat) => {
                const Icon = feat.icon
                return (
                  <motion.li
                    key={feat.label}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#F43F5E]/8 border border-[#F43F5E]/15 flex items-center justify-center">
                      <Icon size={14} className="text-[#F43F5E]" />
                    </span>
                    <span className="text-sm font-medium text-[#3D4663]">{feat.label}</span>
                  </motion.li>
                )
              })}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F43F5E] hover:text-[#E11D48] transition-colors"
              >
                <Sparkles size={13} />
                See it in action
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Branded pod previews */}
          <div className="flex flex-col sm:flex-row gap-4">
            <BrandedPodPreview
              brand="Acme Corp"
              color="#2563EB"
              logo="A"
              domain="deals.acmecorp.com"
              delay={0.1}
            />
            <BrandedPodPreview
              brand="TechFlow"
              color="#059669"
              logo="T"
              domain="rooms.techflow.io"
              delay={0.25}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
