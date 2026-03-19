'use client'

import { motion } from 'framer-motion'
import { X, Check, Mail, Handshake } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

const oldWay = [
  'No tracking — zero visibility',
  'Gets buried in inbox',
  "Can't personalize per deal",
  'Forwarded to the wrong person',
  "No idea if anyone opened it",
]

const newWay = [
  'Real-time visitor tracking',
  'Personalized per buyer',
  'Interactive content blocks',
  'Intent scoring on every visit',
  "Know exactly who's engaged",
]

export default function Problem() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            The problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117] max-w-2xl mx-auto leading-tight"
          >
            Your buyers are drowning in forgotten attachments.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#5A6480] max-w-xl mx-auto">
            Sales decks get forwarded to the wrong person, links expire, and you have no idea if anyone even opened it.
          </motion.p>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="rounded-[14px] bg-[#FEF2F2] border border-[#DC2626]/12 px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <span className="text-2xl font-extrabold text-[#DC2626]">73%</span>
            <span className="text-sm text-[#5A6480]">of deals are lost because buyers go silent — no follow-up trigger, no visibility into intent.</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Old Way */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-[18px] border border-[#DC2626]/15 bg-[#DC2626]/[0.03] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[10px] bg-[#DC2626]/10 flex items-center justify-center">
                <Mail size={18} className="text-[#DC2626]" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#DC2626] uppercase tracking-wider">The old way</div>
                <div className="text-sm font-semibold text-[#0D1117]">Email + Attachment</div>
              </div>
            </div>
            <ul className="space-y-3">
              {oldWay.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#5A6480]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#DC2626]/10 flex items-center justify-center">
                    <X size={11} className="text-[#DC2626]" />
                  </span>
                  <span className="line-through opacity-60">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-[18px] border border-[#059669]/20 bg-[#059669]/[0.03] p-8 shadow-[0_0_40px_rgba(5,150,105,0.06)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[10px] bg-[#059669]/10 flex items-center justify-center">
                <Handshake size={18} className="text-[#059669]" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#059669] uppercase tracking-wider">The Co-Lab way</div>
                <div className="text-sm font-semibold text-[#0D1117]">Personal Sales Room</div>
              </div>
            </div>
            <ul className="space-y-3">
              {newWay.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#0D1117]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#059669]/15 flex items-center justify-center">
                    <Check size={11} className="text-[#059669]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
