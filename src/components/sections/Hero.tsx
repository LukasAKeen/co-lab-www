'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  FileText,
  Phone,
  LayoutGrid,
  BarChart3,
  ListChecks,
} from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'
import BrandMark from '@/components/BrandMark'

const ease = [0.16, 1, 0.3, 1] as const

const sidebarItems = [
  { icon: LayoutGrid, label: 'Welcome', active: true },
  { icon: FileText, label: 'Solution Overview', active: false },
  { icon: BarChart3, label: 'ROI & Pricing', active: false },
  { icon: ListChecks, label: 'Mutual Action Plan', active: false },
  { icon: Phone, label: 'Book a Call', active: false },
]

const signalFeed = [
  { time: 'now', text: 'Sarah opened ROI tab', delta: '+8', tone: 'green' as const },
  { time: '2m', text: 'Pod forwarded → legal@meridian', delta: '+11', tone: 'green' as const },
  { time: '14m', text: 'VP Ops joined as stakeholder', delta: 'NEW', tone: 'iris' as const },
  { time: '1h', text: 'Demo video · 87% completion', delta: '+6', tone: 'green' as const },
]

const toneClasses = {
  green: 'text-[#22B574]',
  iris: 'text-[#5B5BD6]',
  amber: 'text-[#E8A02C]',
} as const

function AppMockup() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-[#E7E7EE] shadow-[0_50px_100px_-30px_rgba(11,14,26,0.18),0_0_0_1px_rgba(91,91,214,0.04)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#F4F4F8] border-b border-[#E7E7EE]">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E7E7EE]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E7E7EE]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E7E7EE]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-md px-3 py-1 text-[11px] font-mono text-[#71768B] border border-[#E7E7EE] max-w-[300px] w-full text-center">
            app.colabapp.ai/pods/meridian-q2
          </div>
        </div>
        <div className="w-16 flex-shrink-0" />
      </div>

      {/* App shell */}
      <div className="flex bg-[#FBFBFD] relative" style={{ minHeight: 380 }}>
        {/* Sidebar */}
        <div className="w-[180px] flex-shrink-0 bg-[#F4F4F8] border-r border-[#E7E7EE] flex flex-col py-3">
          <div className="flex items-center gap-2 px-3.5 mb-4">
            <BrandMark size={20} variant="iris" />
            <span className="text-[12.5px] font-semibold text-[#0B0E1A]">Co-Lab</span>
          </div>

          <div className="px-3.5 mb-2">
            <div className="eyebrow text-[9.5px] text-[#A4A8BC]">Meridian Corp</div>
          </div>

          <div className="flex flex-col gap-0.5 px-2 flex-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[12px] transition-colors ${
                    item.active
                      ? 'bg-white text-[#0B0E1A] font-medium border-l-2 border-[#5B5BD6] pl-[8px]'
                      : 'text-[#71768B]'
                  }`}
                >
                  <Icon size={13} className={item.active ? 'text-[#5B5BD6]' : 'text-[#A4A8BC]'} />
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease }}
            className="bg-white border-b border-[#E7E7EE] px-5 pt-4 pb-0"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="eyebrow text-[9.5px] text-[#A4A8BC] mb-1">Proposal</div>
                <div className="text-[14px] font-semibold tracking-tight text-[#0B0E1A]">
                  Meridian Corp — Q2 Partnership
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-[#22B574] bg-[#E5F2EB] px-2 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22B574] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22B574]" />
                  </span>
                  Published
                </span>
              </div>
            </div>
            <div className="flex gap-0">
              {['Overview', 'Files', 'Plan'].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-3.5 py-1.5 text-[11.5px] font-medium border-b-2 transition-colors ${
                    i === 0
                      ? 'text-[#0B0E1A] border-[#5B5BD6]'
                      : 'text-[#A4A8BC] border-transparent'
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex-1 bg-[#FBFBFD] p-4 space-y-2.5 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.45, ease }}
              className="bg-white rounded-lg border border-[#E7E7EE] p-4"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="eyebrow text-[9px] text-[#5B5BD6]">Welcome Block</span>
                <span className="ml-auto eyebrow text-[8.5px] text-[#5B5BD6] bg-[#F2F2FB] px-1.5 py-0.5 rounded">
                  AI Drafted
                </span>
              </div>
              <h3 className="display text-[14px] text-[#0B0E1A] mb-1">
                Everything Meridian needs to move forward
              </h3>
              <p className="text-[11.5px] text-[#3D4256] leading-relaxed mb-3">
                Built specifically for your team. Explore the solution, review pricing, and book your next call.
              </p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-[10.5px] font-semibold text-white bg-[#5B5BD6] rounded">
                  Explore Solution
                </button>
                <button className="px-3 py-1.5 text-[10.5px] font-medium text-[#3D4256] bg-white rounded border border-[#E7E7EE]">
                  Book a Call
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.45, ease }}
              className="bg-white rounded-lg border border-[#E7E7EE] p-4"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="eyebrow text-[9px] text-[#5B5BD6]">ROI & Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { label: 'Annual Savings', value: '$142k' },
                  { label: 'Time to ROI', value: '< 90d' },
                  { label: 'Efficiency', value: '4.2×' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 rounded-md bg-[#FBFBFD] border border-[#E7E7EE] p-2.5 text-center"
                  >
                    <div className="display text-[15px] text-[#5B5BD6] tabular-nums">{stat.value}</div>
                    <div className="text-[9.5px] text-[#71768B] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right rail — intent + live signal feed (hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease }}
          className="hidden lg:flex w-[240px] flex-shrink-0 bg-white border-l border-[#E7E7EE] flex-col p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="eyebrow text-[9.5px] text-[#A4A8BC]">Pod Activity</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22B574] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22B574]" />
              </span>
              <span className="eyebrow text-[8.5px] text-[#22B574]">Streaming</span>
            </div>
          </div>

          {/* Intent score */}
          <div className="rounded-md border border-[#E7E7EE] bg-[#FBFBFD] p-3 mb-4">
            <div className="eyebrow text-[9px] text-[#A4A8BC] mb-1.5">Intent Score</div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="display text-[28px] text-gradient tabular-nums leading-none">87</span>
              <span className="text-[10px] text-[#A4A8BC] font-mono">/100</span>
              <span className="ml-auto text-[10px] font-mono font-semibold text-[#22B574]">+12 7d</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#EFEFF4] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '87%' }}
                transition={{ duration: 1.0, delay: 1.4, ease }}
                className="h-full rounded-full bg-gradient-to-r from-[#5B5BD6] to-[#00B4D8]"
              />
            </div>
          </div>

          {/* Live signal feed */}
          <div>
            <div className="eyebrow text-[9px] text-[#A4A8BC] mb-2">Live Signal Feed</div>
            <div>
              {signalFeed.map((s, i) => (
                <motion.div
                  key={s.text}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + i * 0.12, duration: 0.35, ease }}
                  className="grid grid-cols-[28px_1fr_auto] gap-2 py-2 border-b border-[#E7E7EE] last:border-b-0 items-center"
                >
                  <span className="text-[9.5px] font-mono text-[#A4A8BC] uppercase tracking-wider">
                    {s.time}
                  </span>
                  <span className="text-[10.5px] text-[#1F2333] leading-snug">
                    {s.text}
                  </span>
                  <span
                    className={`text-[9.5px] font-mono font-bold tracking-wider ${toneClasses[s.tone]}`}
                  >
                    {s.delta}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Soft iris glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[480px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(91,91,214,0.10) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-10"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white border border-[#E7E7EE] rounded-full pl-1 pr-3 py-1 text-[12px] font-medium text-[#3D4256] shadow-[0_1px_2px_rgba(15,18,30,0.04)]">
              <span className="bg-[#F2F2FB] text-[#5B5BD6] rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                Digital Sales Rooms
              </span>
              <span className="flex items-center gap-1.5 text-[#71768B]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22B574] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22B574]" />
                </span>
                4.2× more buyer engagement
              </span>
            </span>
          </motion.div>

          {/* Headline — slightly tighter */}
          <motion.h1
            variants={fadeUp}
            className="display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-[#0B0E1A] leading-[1.0] tracking-[-0.04em] mb-4 sm:mb-5"
          >
            Every deal deserves its own space.
            <br />
            <span className="text-gradient">Close it there.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-[#3D4256] leading-[1.5] mb-7 max-w-[620px] mx-auto"
          >
            Co-Lab is the sales workspace where AEs build buyer-facing
            micro-sites for every deal — with live engagement tracking, mutual
            action plans, and an AI coach that drafts the first version and
            flags what&apos;s stalling.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai/register"
              className="group inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.98]"
            >
              Get Started Free
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-[#0B0E1A] bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-xl transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </motion.div>

        {/* App mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="relative max-w-[1080px] mx-auto"
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  )
}
