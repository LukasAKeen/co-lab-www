'use client'

import { motion } from 'framer-motion'
import { X, Check, Mail, Sparkles, Clock, Send, EyeOff } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

const oldWay = [
  { icon: Clock, text: 'Hours spent manually building decks' },
  { icon: EyeOff, text: 'Zero visibility into buyer engagement' },
  { icon: Send, text: 'Attachments buried in inbox threads' },
  { icon: Mail, text: "Can't personalize at scale" },
  { icon: EyeOff, text: 'No idea if anyone even opened it' },
]

const newWay = [
  { icon: Sparkles, text: 'AI builds the pod from your call transcript' },
  { icon: Sparkles, text: 'Real-time intent scoring on every visit' },
  { icon: Check, text: 'One link, all content, fully trackable' },
  { icon: Sparkles, text: 'Every room auto-personalized per buyer' },
  { icon: Check, text: 'AI alerts you when buyers re-engage' },
]

export default function Problem() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#F43F5E] uppercase tracking-[0.15em] mb-4">
            The problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117] max-w-3xl mx-auto leading-tight"
          >
            Manual deal rooms are killing your{' '}
            <span className="text-gradient">win rate.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-[#3D4663] max-w-xl mx-auto">
            While you spend hours on decks, your competitors are using AI. The gap is growing.
          </motion.p>
        </motion.div>

        {/* Stat block — design-style giant number */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center"
        >
          <div className="text-[88px] sm:text-[120px] md:text-[160px] font-extrabold tracking-[-0.05em] leading-[0.9] bg-gradient-to-br from-[#F43F5E] to-[#6366F1] bg-clip-text text-transparent">
            73%
          </div>
          <p className="mt-4 text-base sm:text-lg text-[#3D4663] max-w-xl mx-auto leading-relaxed">
            of deals are lost because buyers go silent — no AI follow-up trigger, no visibility into intent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Old Way — muted, grayed out, visually dull */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-2xl border border-black/[0.06] bg-[#F2F4FA]/60 p-5 sm:p-8 opacity-75 grayscale-[30%]"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-[#9BA3B8]/10 flex items-center justify-center">
                <Mail size={18} className="text-[#9BA3B8]" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider">The old way</div>
                <div className="text-sm font-semibold text-[#6B7394]">Manual Decks + Email</div>
              </div>
            </div>
            <ul className="space-y-3.5">
              {oldWay.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-[#9BA3B8]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#E3E6F0] flex items-center justify-center">
                    <X size={11} className="text-[#9BA3B8]" />
                  </span>
                  <span className="line-through">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Way — dark elevated card, design-inspired */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative rounded-2xl bg-[#0A0D14] p-5 sm:p-8 shadow-[0_24px_60px_rgba(99,102,241,0.25)] overflow-hidden"
          >
            {/* Subtle iris glow */}
            <div className="absolute inset-0 opacity-90 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 80% 60% at 80% 0%, rgba(99,102,241,0.18) 0%, transparent 60%)',
            }} />
            <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.10] flex items-center justify-center">
                  <Sparkles size={18} className="text-[#818CF8]" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider" style={{
                    background: 'linear-gradient(90deg, #818CF8, #34D399)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}>
                    The Co-Lab way
                  </div>
                  <div className="text-sm font-semibold text-white">AI-Built Sales Rooms</div>
                </div>
              </div>
              <ul className="space-y-3.5">
                {newWay.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-white font-medium">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#818CF8]/15 border border-[#818CF8]/25 flex items-center justify-center">
                      <Check size={11} className="text-[#818CF8]" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
