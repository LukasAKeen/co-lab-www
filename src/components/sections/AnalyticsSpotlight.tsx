'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Flame, Monitor, Smartphone, TrendingUp } from 'lucide-react'
import { fadeUp, slideInLeft, staggerContainer, viewportConfig } from '@/lib/motion'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = to / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const sessions = [
  { name: 'Sarah Chen', company: 'Meridian Corp', role: 'VP Sales', duration: '7m 14s', intent: 'HIGH', color: '#059669', device: 'desktop' },
  { name: 'James Liu', company: 'Nexus Capital', role: 'CRO', duration: '4m 32s', intent: 'HIGH', color: '#059669', device: 'mobile' },
  { name: 'Priya Nair', company: 'CloudOps Inc', role: 'AE', duration: '2m 05s', intent: 'MED', color: '#D97706', device: 'desktop' },
]

const stats = [
  { value: '4.2×', label: 'more buyer engagement vs. email' },
  { value: '100%', label: 'intent scored on every visit' },
  { value: 'Block-level', label: 'tracking shows what they re-read' },
]

export default function AnalyticsSpotlight() {
  return (
    <section id="analytics" className="py-28 px-6 bg-[#F2F4FA] border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Analytics mockup */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white rounded-[18px] border border-black/[0.08] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.08)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-[#9BA3B8] mb-0.5">Meridian Q2 Deal</div>
                <div className="text-sm font-semibold text-[#0D1117]">Visitor Activity</div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#059669] bg-[#059669]/10 border border-[#059669]/20 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                Live
              </div>
            </div>

            {/* Intent gauge */}
            <div className="bg-[#F2F4FA] rounded-[14px] p-4 mb-4 flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="8" />
                  <motion.circle
                    cx="32" cy="32" r="26"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="163.4"
                    initial={{ strokeDashoffset: 163.4 }}
                    whileInView={{ strokeDashoffset: 163.4 * 0.13 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center rotate-90">
                  <span className="text-sm font-bold text-[#059669]">
                    <Counter to={87} />
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Flame size={14} className="text-[#059669]" />
                  <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">Intent Score</span>
                </div>
                <div className="text-xs text-[#9BA3B8] mt-1">visits × session time × actions</div>
              </div>
            </div>

            {/* Session cards */}
            <div className="space-y-2">
              {sessions.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-[#F2F4FA] rounded-[10px] px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-[8px] bg-[#6366F1]/10 flex items-center justify-center text-xs font-bold text-[#6366F1] flex-shrink-0">
                    {s.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-[#0D1117] truncate">{s.name}</div>
                    <div className="text-[10px] text-[#9BA3B8]">{s.company} · {s.role}</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {s.device === 'mobile' ? (
                      <Smartphone size={11} className="text-[#9BA3B8]" />
                    ) : (
                      <Monitor size={11} className="text-[#9BA3B8]" />
                    )}
                    <span className="text-[10px] text-[#5A6480]">{s.duration}</span>
                    <span
                      className="text-[10px] font-semibold px-1.5 py-0.5 rounded-[4px]"
                      style={{ color: s.color, backgroundColor: `${s.color}12` }}
                    >
                      {s.intent}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="mt-4 pt-4 border-t border-black/[0.06]">
              <div className="flex items-end gap-1.5 h-12">
                {[3, 5, 4, 8, 6, 11, 9].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-[3px] bg-[#6366F1]/20"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: 0.6 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{ height: `${h * 4}px`, transformOrigin: 'bottom' }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="flex-1 text-center text-[9px] text-[#9BA3B8]">{d}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
              Buyer Intelligence
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117] leading-tight mb-4"
            >
              Know exactly when your deal is heating up.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#5A6480] leading-relaxed mb-10">
              Co-Lab scores every buyer&apos;s intent in real time — so you follow up at the
              perfect moment, not a week too late.
            </motion.p>

            <div className="space-y-5">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-[14px] bg-[#6366F1]/08 border border-[#6366F1]/15 flex items-center justify-center">
                    <TrendingUp size={20} className="text-[#6366F1]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#0D1117]">{stat.value}</div>
                    <div className="text-sm text-[#5A6480]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
