'use client'

import { motion } from 'framer-motion'
import { X, Check, Mail, Sparkles, Clock, Send, EyeOff, ArrowRight } from 'lucide-react'
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

        {/* Stat strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="rounded-2xl bg-[#F43F5E]/[0.04] border border-[#F43F5E]/12 px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-3xl font-extrabold text-[#F43F5E]">73%</span>
            <span className="text-sm text-[#3D4663]">of deals are lost because buyers go silent — no AI follow-up trigger, no visibility into intent.</span>
          </div>
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

          {/* New Way — glowing gradient border, elevated, vibrant */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative rounded-2xl glow-border-mint bg-white p-5 sm:p-8 shadow-[0_20px_60px_rgba(52,211,153,0.10),0_0_80px_rgba(52,211,153,0.06)]"
          >
            {/* Aurora accent */}
            <div className="aurora-blob aurora-blob-2 w-[200px] h-[150px] -top-10 -right-10 opacity-40" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#34D399]/12 flex items-center justify-center">
                  <Sparkles size={18} className="text-[#34D399]" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#059669] uppercase tracking-wider">The Co-Lab way</div>
                  <div className="text-sm font-semibold text-[#0D1117]">AI-Built Sales Rooms</div>
                </div>
              </div>
              <ul className="space-y-3.5">
                {newWay.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-[#0D1117] font-medium">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#34D399]/15 flex items-center justify-center">
                      <Check size={11} className="text-[#059669]" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <a
            href="https://app.co-lab.com/signup"
            className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] active:scale-[0.97]"
          >
            <span className="absolute inset-0 rounded-xl shimmer pointer-events-none" />
            Get Started Free
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
