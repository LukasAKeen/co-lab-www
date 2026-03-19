'use client'

import { motion } from 'framer-motion'
import { Zap, Sparkles, BarChart3 } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const steps = [
  {
    number: '01',
    icon: Zap,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.18)',
    title: 'Create your pod',
    description: 'Choose a battle-tested template or let AI build from your call transcript. Ready in minutes, not hours.',
  },
  {
    number: '02',
    icon: Sparkles,
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.18)',
    title: 'Personalize for your buyer',
    description: "Add your content, drop in the buyer's logo, and use dynamic tokens to make every room feel custom-built.",
  },
  {
    number: '03',
    icon: BarChart3,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.18)',
    title: 'Track intent in real time',
    description: "Share one link. Watch the intent score climb as they engage. Follow up at exactly the right moment.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-[#F2F4FA] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117]"
          >
            Up and running in under 5 minutes.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#5A6480] max-w-xl mx-auto">
            No setup, no IT ticket. Create a pod, drop in your content, share a link.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative"
        >
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(33%+24px)] right-[calc(33%+24px)] h-px border-t-2 border-dashed border-black/[0.1] pointer-events-none" />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={scaleIn}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number + Icon */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-[18px] flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: step.bg, border: `1.5px solid ${step.border}` }}
                  >
                    <Icon size={26} style={{ color: step.color }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 text-[10px] font-black px-1.5 py-0.5 rounded-[5px] bg-white border shadow-sm"
                    style={{ color: step.color, borderColor: step.border }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0D1117] mb-2">{step.title}</h3>
                <p className="text-sm text-[#5A6480] leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
