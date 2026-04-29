'use client'

import { motion } from 'framer-motion'
import { Check, Mail, Sparkles, Clock, Send, EyeOff } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

const oldWay = [
  { icon: Clock, text: 'Hours spent manually building decks' },
  { icon: EyeOff, text: 'Zero visibility into buyer engagement' },
  { icon: Send, text: 'Attachments buried in inbox threads' },
  { icon: Mail, text: "Can't personalize at scale" },
  { icon: EyeOff, text: 'No idea if anyone even opened it' },
]

const newWay = [
  { text: 'One link, all content, fully trackable' },
  { text: 'Real-time intent scoring on every visit' },
  { text: 'Every room personalized per buyer' },
  { text: 'Alerts when buyers re-engage or go cold' },
  { text: 'AI coach drafts the first version from your call' },
]

export default function Problem() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-white border-y border-[#E7E7EE]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-[760px] mx-auto mb-12"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[#B84263] mb-3">
            The problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="display text-3xl sm:text-4xl md:text-[44px] text-[#0B0E1A]"
          >
            Deals don&apos;t die on calls — <span className="text-gradient">they die between meetings.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[17px] text-[#3D4256] leading-[1.55]">
            The PDF in the inbox. The deck buried three threads deep. The silence after the demo. That&apos;s where deals are won or lost.
          </motion.p>
        </motion.div>

        {/* Stat block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-[760px] mx-auto mb-14 text-center bg-[#FBFBFD] border border-[#E7E7EE] rounded-2xl py-10 px-8"
        >
          <div className="display text-[88px] sm:text-[120px] md:text-[140px] tracking-[-0.05em] leading-[0.9] text-gradient">
            73%
          </div>
          <p className="mt-4 text-[15px] text-[#3D4256] max-w-[480px] mx-auto leading-[1.55]">
            of deals are lost in the silence between meetings — no visibility, no signal, no way back in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Old Way */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-2xl border border-[#E7E7EE] bg-[#FBFBFD] p-7"
          >
            <p className="eyebrow text-[#A4A8BC] mb-3">The old way</p>
            <h3 className="display text-[20px] text-[#3D4256] mb-5">Manual decks + email</h3>
            <ul>
              {oldWay.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 py-2.5 text-[14px] text-[#71768B] border-b border-[#E7E7EE] last:border-b-0"
                >
                  <span className="text-[#A4A8BC] flex-shrink-0">—</span>
                  <span>{item.text}</span>
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
            className="relative rounded-2xl bg-[#0B0E1A] p-7 overflow-hidden"
          >
            <div
              className="absolute -top-20 -right-20 w-60 h-60 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(91,91,214,0.35) 0%, transparent 70%)',
              }}
            />
            <div className="absolute inset-0 dot-grid-dark opacity-40 pointer-events-none" />

            <div className="relative z-10">
              <p className="eyebrow text-[#7B7BE5] mb-3 flex items-center gap-1.5">
                <Sparkles size={10} />
                The Co-Lab way
              </p>
              <h3 className="display text-[20px] text-white mb-5">One space per deal</h3>
              <ul>
                {newWay.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 py-2.5 text-[14px] text-white/85 border-b border-white/8 last:border-b-0"
                  >
                    <Check size={13} className="text-[#7B7BE5] flex-shrink-0" />
                    <span>{item.text}</span>
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
