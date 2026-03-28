'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  Sparkles,
  Play,
  Zap,
  CheckCircle2,
  Handshake,
  FileText,
  Phone,
  LayoutGrid,
  Video,
  BarChart3,
  ListChecks,
  ChevronRight,
} from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'

const ease = [0.16, 1, 0.3, 1] as const

function AIPulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
    </span>
  )
}

/* ── Sidebar nav items ── */
const sidebarItems = [
  { icon: LayoutGrid, label: 'Welcome', active: true },
  { icon: FileText, label: 'Solution Overview', active: false },
  { icon: BarChart3, label: 'ROI & Pricing', active: false },
  { icon: ListChecks, label: 'Mutual Action Plan', active: false },
  { icon: Phone, label: 'Book a Call', active: false },
]

/* ── The light-mode app mockup with build animation ── */
function AppMockup() {
  const [toastPhase, setToastPhase] = useState<'analyzing' | 'done'>('analyzing')

  useEffect(() => {
    const timer = setTimeout(() => setToastPhase('done'), 3200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]">
      {/* ── Browser chrome ── */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#F8F9FC] border-b border-[#E5E7EB]">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-lg px-3 py-1 text-[11px] text-[#9BA3B8] border border-[#E5E7EB] max-w-[300px] w-full text-center">
            app.co-lab.com/pods/meridian-q2
          </div>
        </div>
        <div className="w-16 flex-shrink-0" />
      </div>

      {/* ── App shell ── */}
      <div className="flex bg-[#F8F9FC] relative min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">

        {/* ── AI Toast overlay ── */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
          <AnimatePresence mode="wait">
            {toastPhase === 'analyzing' ? (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: -12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.4, ease }}
                className="glass-card rounded-xl px-4 py-2.5 shadow-[0_8px_32px_rgba(99,102,241,0.12)] flex items-center gap-2.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]" />
                </span>
                <Sparkles size={12} className="text-[#6366F1]" />
                <span className="text-[12px] font-medium text-[#3D4663]">
                  Analyzing Gong transcript: <span className="font-semibold text-[#0D1117]">Meridian Q2 Discovery</span>...
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: -12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease }}
                className="glass-card rounded-xl px-4 py-2.5 shadow-[0_8px_32px_rgba(52,211,153,0.12)] flex items-center gap-2.5"
              >
                <CheckCircle2 size={14} className="text-[#34D399]" />
                <span className="text-[12px] font-semibold text-[#059669]">
                  Pod generated in 4 seconds
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Sidebar (hidden on mobile) ── */}
        <div className="hidden md:flex w-[200px] flex-shrink-0 bg-white border-r border-[#E5E7EB] flex-col py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 mb-5">
            <div className="w-7 h-7 rounded-lg bg-[#6366F1] flex items-center justify-center shadow-sm">
              <Handshake size={13} className="text-white" />
            </div>
            <span className="text-[13px] font-semibold text-[#0D1117]">Co-Lab</span>
          </div>

          {/* Workspace label */}
          <div className="px-4 mb-2">
            <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider">Meridian Corp</div>
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-0.5 px-2 flex-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-colors ${
                    item.active
                      ? 'bg-[#6366F1]/8 text-[#6366F1] font-semibold'
                      : 'text-[#6B7394] hover:bg-[#F2F4FA]'
                  }`}
                >
                  <Icon size={14} className={item.active ? 'text-[#6366F1]' : 'text-[#9BA3B8]'} />
                  {item.label}
                </div>
              )
            })}
          </div>

          {/* User */}
          <div className="px-3 pt-3 border-t border-[#E5E7EB] mt-2">
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="w-6 h-6 rounded-full bg-[#6366F1]/12 flex items-center justify-center text-[10px] font-bold text-[#6366F1]">
                A
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-[#3D4663] truncate">Alex Rivera</div>
                <div className="text-[9px] text-[#9BA3B8]">Account Executive</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content area ── */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* ── Header with tabs ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease }}
            className="bg-white border-b border-[#E5E7EB] px-6 pt-5 pb-0"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10px] text-[#9BA3B8] font-medium uppercase tracking-wider mb-0.5">Proposal</div>
                <div className="text-[15px] font-bold text-[#0D1117]">Meridian Corp — Q2 Partnership</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-[#34D399] bg-[#34D399]/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#34D399]" />
                  </span>
                  Published
                </span>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex gap-0">
              {['Overview', 'Files', 'Plan'].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-4 py-2 text-[12px] font-medium border-b-2 transition-colors ${
                    i === 0
                      ? 'text-[#6366F1] border-[#6366F1]'
                      : 'text-[#9BA3B8] border-transparent hover:text-[#6B7394]'
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Content blocks (animated build sequence) ── */}
          <div className="flex-1 bg-[#F8F9FC] p-5 space-y-4 overflow-hidden">

            {/* Block 1: Welcome / Hero block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#6366F1]/10 flex items-center justify-center">
                  <LayoutGrid size={10} className="text-[#6366F1]" />
                </div>
                <span className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider">Welcome Block</span>
                <span className="ml-auto text-[9px] font-semibold text-[#6366F1] bg-[#6366F1]/8 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Sparkles size={7} /> AI
                </span>
              </div>
              <h3 className="text-[15px] font-bold text-[#0D1117] mb-1.5 leading-snug">
                Everything Meridian needs to move forward
              </h3>
              <p className="text-[12px] text-[#6B7394] leading-relaxed mb-4">
                This room was built specifically for your team. Explore the solution, review pricing, and book your next call — all in one place.
              </p>
              <div className="flex items-center gap-2">
                <button className="px-3.5 py-1.5 text-[11px] font-semibold text-white bg-[#6366F1] rounded-lg shadow-sm">
                  Explore Solution
                </button>
                <button className="px-3.5 py-1.5 text-[11px] font-medium text-[#6B7394] bg-[#F2F4FA] rounded-lg border border-[#E5E7EB]">
                  Book a Call
                </button>
              </div>
            </motion.div>

            {/* Block 2: Solution Overview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6, ease }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#34D399]/10 flex items-center justify-center">
                  <FileText size={10} className="text-[#34D399]" />
                </div>
                <span className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider">Solution Overview</span>
                <span className="ml-auto text-[9px] font-semibold text-[#34D399] bg-[#34D399]/8 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Sparkles size={7} /> AI
                </span>
              </div>
              {/* Placeholder content */}
              <div className="space-y-2.5">
                <div className="h-2.5 rounded-full bg-[#F2F4FA] w-full" />
                <div className="h-2.5 rounded-full bg-[#F2F4FA] w-[85%]" />
                <div className="h-2.5 rounded-full bg-[#F2F4FA] w-[70%]" />
              </div>
              <div className="mt-4 flex gap-3">
                <div className="flex-1 h-20 rounded-lg bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center">
                  <Video size={16} className="text-[#9BA3B8]" />
                </div>
                <div className="flex-1 h-20 rounded-lg bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center">
                  <BarChart3 size={16} className="text-[#9BA3B8]" />
                </div>
              </div>
            </motion.div>

            {/* Block 3: ROI & Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6, ease }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#F59E0B]/10 flex items-center justify-center">
                  <BarChart3 size={10} className="text-[#F59E0B]" />
                </div>
                <span className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider">ROI & Pricing</span>
                <span className="ml-auto text-[9px] font-semibold text-[#F59E0B] bg-[#F59E0B]/8 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Sparkles size={7} /> AI
                </span>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { label: 'Annual Savings', value: '$142k', color: '#34D399' },
                  { label: 'Time to ROI', value: '< 90 days', color: '#6366F1' },
                  { label: 'Efficiency Gain', value: '4.2×', color: '#F59E0B' },
                ].map((stat) => (
                  <div key={stat.label} className="flex-1 rounded-lg bg-[#F8F9FC] border border-[#E5E7EB] p-3 text-center">
                    <div className="text-[14px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-[10px] text-[#9BA3B8] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Block 4: Mutual Action Plan */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6, ease }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#F43F5E]/10 flex items-center justify-center">
                  <ListChecks size={10} className="text-[#F43F5E]" />
                </div>
                <span className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider">Mutual Action Plan</span>
                <span className="ml-auto text-[9px] font-semibold text-[#F43F5E] bg-[#F43F5E]/8 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Sparkles size={7} /> AI
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { text: 'Technical deep-dive', done: true },
                  { text: 'Security review', done: true },
                  { text: 'Proposal delivery', done: false },
                  { text: 'Legal review', done: false },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded border-[1.5px] flex items-center justify-center ${
                      item.done ? 'bg-[#34D399] border-[#34D399]' : 'border-[#D1D5DB] bg-white'
                    }`}>
                      {item.done && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.2 5.7L6.5 2.3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[12px] ${item.done ? 'text-[#9BA3B8] line-through' : 'text-[#3D4663] font-medium'}`}>
                      {item.text}
                    </span>
                    {!item.done && (
                      <ChevronRight size={10} className="text-[#C5CBDA] ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom clip */}
      <div className="h-2 bg-[#F8F9FC]" />
    </div>
  )
}

/* ── Hero section ── */
export default function Hero() {
  return (
    <section className="relative flex flex-col items-center pt-20 md:pt-28 pb-0 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 gradient-mesh-hero" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Badges */}
          <motion.div variants={fadeUp} className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-8">
            <span className="bg-white/80 backdrop-blur-sm border border-[#34D399]/25 rounded-full px-4 py-1.5 text-xs font-semibold text-[#059669] flex items-center gap-2 shadow-sm">
              <AIPulseDot />
              AI-Powered
              <Sparkles size={11} className="text-[#34D399]" />
            </span>
            <span className="bg-white/80 backdrop-blur-sm border border-[#6366F1]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#6366F1] flex items-center gap-1.5 shadow-sm">
              <Zap size={11} className="fill-[#6366F1] text-[#6366F1]" />
              4.2× more buyer engagement
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.08] sm:leading-[1.04] mb-5 sm:mb-6 text-[#0D1117]"
          >
            Your AI builds the deal room.
            <br />
            <span className="text-gradient-ai">You close the deal.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[#3D4663] leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
          >
            Co-Lab is the AI-native digital sales room that analyzes your calls,
            auto-builds personalized pods, and gives buyers an AI assistant — so
            every deal moves forward on autopilot.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-2xl transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] active:scale-[0.97]"
            >
              <span className="absolute inset-0 rounded-2xl shimmer pointer-events-none" />
              Get early access
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-medium text-[#3D4663] hover:text-[#0D1117] border border-black/[0.08] hover:border-black/[0.15] bg-white/80 backdrop-blur-sm rounded-2xl transition-all shadow-sm hover:shadow-md">
              <span className="w-7 h-7 rounded-xl bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                <Play size={10} className="text-[#6366F1] fill-[#6366F1] ml-0.5" />
              </span>
              Watch demo
            </button>
          </motion.div>
        </motion.div>

        {/* App mockup with aurora */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[1100px]"
        >
          {/* Aurora blobs */}
          <div className="aurora-blob aurora-blob-1 w-[400px] h-[300px] -top-20 left-[10%]" />
          <div className="aurora-blob aurora-blob-2 w-[350px] h-[280px] top-10 right-[5%]" />
          <div className="aurora-blob aurora-blob-3 w-[300px] h-[250px] bottom-0 left-[30%]" />
          <div className="aurora-blob aurora-blob-orange w-[250px] h-[200px] -top-10 right-[25%]" />

          {/* Outer glow */}
          <div className="absolute -inset-8 rounded-[40px] glow-ai opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <AppMockup />
          </div>

          {/* Bottom fade */}
          <div className="h-20 bg-gradient-to-b from-transparent to-[#FAFBFF] relative -mt-20 pointer-events-none z-20" />
        </motion.div>
      </div>
    </section>
  )
}
