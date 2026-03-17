'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Flame, Users, Clock } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]" />
    </span>
  )
}

function FloatingCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`glass rounded-[14px] px-4 py-3 shadow-lg border border-black/[0.07] ${className}`}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#6366F1] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
            <span className="glass border border-[#6366F1]/20 rounded-full px-4 py-1.5 text-xs font-medium text-[#6366F1] flex items-center gap-2 shadow-sm">
              <PulseDot />
              Now in early access
              <ArrowRight size={12} />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-[#0D1117]"
          >
            Stop sending decks.
            <br />
            <span className="text-gradient-indigo">Start closing deals.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#5A6480] leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Co-Lab gives every deal its own personalized sales room — interactive,
            trackable, and built to move buyers forward.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-[10px] transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-95"
            >
              Get early access
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#5A6480] hover:text-[#0D1117] border border-black/[0.1] hover:border-black/[0.2] bg-white rounded-[10px] transition-all shadow-sm"
            >
              See how it works
              <ChevronDown size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 max-w-4xl mx-auto"
        >
          {/* Browser frame */}
          <div className="rounded-[18px] border border-black/[0.1] shadow-[0_32px_80px_rgba(0,0,0,0.12)] overflow-hidden glow-indigo bg-white">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.07] bg-[#F2F4FA]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#F87171]/80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#22D3A0]/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-[6px] px-3 py-1 text-xs text-[#9BA3B8] max-w-xs mx-auto text-center border border-black/[0.07]">
                  pod.co-lab.com/meridian-q2-deal
                </div>
              </div>
            </div>

            {/* Pod preview */}
            <div className="bg-white p-8 min-h-[360px]">
              {/* Pod header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-[10px] bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center">
                    <span className="text-[#6366F1] font-bold text-sm">M</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#9BA3B8]">Prepared for</div>
                    <div className="text-sm font-semibold text-[#0D1117]">Meridian Corp</div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#0D1117] mb-1">
                  Your Q2 Partnership Proposal
                </h2>
                <p className="text-sm text-[#5A6480]">
                  Everything you need to evaluate Co-Lab for your sales team →
                </p>
              </div>

              {/* Content blocks */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Demo Recording', color: '#6366F1', icon: '🎥' },
                  { label: 'ROI Calculator', color: '#059669', icon: '📊' },
                  { label: 'Case Studies', color: '#D97706', icon: '📁' },
                  { label: 'Next Steps', color: '#4F46E5', icon: '➡️' },
                  { label: 'Ask AI', color: '#059669', icon: '🤖' },
                  { label: 'Book a Call', color: '#6366F1', icon: '📅' },
                ].map((block) => (
                  <div
                    key={block.label}
                    className="rounded-[10px] p-3 border flex items-center gap-2"
                    style={{
                      backgroundColor: `${block.color}08`,
                      borderColor: `${block.color}20`,
                    }}
                  >
                    <span className="text-base">{block.icon}</span>
                    <span className="text-xs font-medium text-[#5A6480]">{block.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-8 top-16 hidden lg:block"
          >
            <FloatingCard>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[8px] bg-[#059669]/10 flex items-center justify-center">
                  <Flame size={14} className="text-[#059669]" />
                </div>
                <div>
                  <div className="text-xs text-[#9BA3B8]">Intent Score</div>
                  <div className="text-sm font-bold text-[#059669]">87 / 100</div>
                </div>
                <span className="text-xs px-1.5 py-0.5 rounded-[6px] bg-[#059669]/10 text-[#059669] font-medium ml-1">
                  HIGH
                </span>
              </div>
            </FloatingCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-8 top-12 hidden lg:block"
          >
            <FloatingCard>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[8px] bg-[#6366F1]/10 flex items-center justify-center">
                  <Users size={14} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="text-xs text-[#9BA3B8]">This week</div>
                  <div className="text-sm font-bold text-[#0D1117]">3 visitors</div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 bottom-12 hidden lg:block"
          >
            <FloatingCard>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[8px] bg-[#D97706]/10 flex items-center justify-center">
                  <Clock size={14} className="text-[#D97706]" />
                </div>
                <div>
                  <div className="text-xs text-[#9BA3B8]">Avg. session</div>
                  <div className="text-sm font-bold text-[#0D1117]">4m 32s</div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center"
        >
          {[
            { value: '4.2×', label: 'more buyer engagement' },
            { value: '< 5 min', label: 'to build a pod' },
            { value: '100%', label: 'visibility into buyer intent' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-[#0D1117]">{stat.value}</div>
              <div className="text-xs text-[#9BA3B8] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
