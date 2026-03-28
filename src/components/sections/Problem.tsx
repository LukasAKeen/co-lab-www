'use client'

import { motion } from 'framer-motion'
import { X, Check, Mail, Sparkles, Clock, Send, EyeOff, Bot } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

const oldWay = [
  { icon: Clock, text: 'Hours spent manually building decks' },
  { icon: EyeOff, text: 'Zero visibility into buyer engagement' },
  { icon: Send, text: 'Attachments buried in inbox threads' },
  { icon: Mail, text: "Can't personalize at scale" },
  { icon: EyeOff, text: 'No idea if anyone even opened it' },
]

const newWay = [
  { icon: Bot, text: 'AI builds the pod from your call transcript' },
  { icon: Sparkles, text: 'Real-time intent scoring on every visit' },
  { icon: Check, text: 'One link, all content, fully trackable' },
  { icon: Sparkles, text: 'Every room auto-personalized per buyer' },
  { icon: Bot, text: 'AI assistant handles objections 24/7' },
]

export default function Problem() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
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
            className="text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117] max-w-3xl mx-auto leading-tight"
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
          {/* Old Way */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-2xl border border-[#F43F5E]/12 bg-[#F43F5E]/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-[#F43F5E]/10 flex items-center justify-center">
                <Mail size={18} className="text-[#F43F5E]" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#F43F5E] uppercase tracking-wider">The old way</div>
                <div className="text-sm font-semibold text-[#0D1117]">Manual Decks + Email</div>
              </div>
            </div>
            <ul className="space-y-3.5">
              {oldWay.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-[#6B7394]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#F43F5E]/8 flex items-center justify-center">
                      <X size={11} className="text-[#F43F5E]" />
                    </span>
                    <span className="line-through opacity-70">{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-2xl border border-[#34D399]/20 bg-[#34D399]/[0.02] p-8 shadow-[0_0_60px_rgba(52,211,153,0.06)]"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-[#34D399]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#34D399]" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#059669] uppercase tracking-wider">The Co-Lab way</div>
                <div className="text-sm font-semibold text-[#0D1117]">AI-Built Sales Rooms</div>
              </div>
            </div>
            <ul className="space-y-3.5">
              {newWay.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-[#0D1117]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#34D399]/12 flex items-center justify-center">
                      <Check size={11} className="text-[#059669]" />
                    </span>
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
