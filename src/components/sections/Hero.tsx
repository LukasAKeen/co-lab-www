'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  FileText,
  Phone,
  LayoutGrid,
  Video,
  BarChart3,
  ListChecks,
  ChevronRight,
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

function AppMockup() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-[#E7E7EE] shadow-[0_40px_80px_-20px_rgba(15,18,30,0.18),0_20px_40px_-10px_rgba(91,91,214,0.12)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#F6F6FA] border-b border-[#E7E7EE]">
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
      <div className="flex bg-[#FBFBFD] relative" style={{ minHeight: 420 }}>
        {/* Sidebar */}
        <div className="w-[200px] flex-shrink-0 bg-[#F6F6FA] border-r border-[#E7E7EE] flex flex-col py-4">
          <div className="flex items-center gap-2 px-4 mb-5">
            <BrandMark size={22} variant="iris" />
            <span className="text-[13px] font-semibold text-[#0B0E1A]">Co-Lab</span>
          </div>

          <div className="px-4 mb-2">
            <div className="eyebrow text-[10px] text-[#A4A8BC]">Meridian Corp</div>
          </div>

          <div className="flex flex-col gap-0.5 px-2 flex-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] transition-colors ${
                    item.active
                      ? 'bg-white text-[#0B0E1A] font-medium border-l-2 border-[#5B5BD6] pl-[10px]'
                      : 'text-[#71768B] hover:bg-white/60'
                  }`}
                >
                  <Icon size={14} className={item.active ? 'text-[#5B5BD6]' : 'text-[#A4A8BC]'} />
                  {item.label}
                </div>
              )
            })}
          </div>

          <div className="px-3 pt-3 border-t border-[#E7E7EE] mt-2">
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="w-6 h-6 rounded-md bg-[#F2F2FB] flex items-center justify-center text-[10px] font-bold text-[#5B5BD6]">
                A
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-[#1F2333] truncate">Alex Rivera</div>
                <div className="text-[9.5px] text-[#A4A8BC]">Account Executive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease }}
            className="bg-white border-b border-[#E7E7EE] px-6 pt-5 pb-0"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="eyebrow text-[10px] text-[#A4A8BC] mb-1">Proposal</div>
                <div className="text-[15px] font-semibold tracking-tight text-[#0B0E1A]">
                  Meridian Corp — Q2 Partnership
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-[#3D9A6A] bg-[#E5F2EB] px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D9A6A] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3D9A6A]" />
                  </span>
                  Published
                </span>
              </div>
            </div>
            <div className="flex gap-0">
              {['Overview', 'Files', 'Plan'].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-4 py-2 text-[12px] font-medium border-b-2 transition-colors ${
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

          <div className="flex-1 bg-[#FBFBFD] p-5 space-y-3 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5, ease }}
              className="bg-white rounded-lg border border-[#E7E7EE] p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="eyebrow text-[9.5px] text-[#5B5BD6]">Welcome Block</span>
                <span className="ml-auto eyebrow text-[9px] text-[#5B5BD6] bg-[#F2F2FB] px-1.5 py-0.5 rounded">
                  AI Drafted
                </span>
              </div>
              <h3 className="display text-[15px] text-[#0B0E1A] mb-1.5">
                Everything Meridian needs to move forward
              </h3>
              <p className="text-[12px] text-[#3D4256] leading-relaxed mb-4">
                This room was built specifically for your team. Explore the solution, review pricing, and book your next call — all in one place.
              </p>
              <div className="flex items-center gap-2">
                <button className="px-3.5 py-1.5 text-[11px] font-semibold text-white bg-[#5B5BD6] rounded-md">
                  Explore Solution
                </button>
                <button className="px-3.5 py-1.5 text-[11px] font-medium text-[#3D4256] bg-white rounded-md border border-[#E7E7EE]">
                  Book a Call
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5, ease }}
              className="bg-white rounded-lg border border-[#E7E7EE] p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="eyebrow text-[9.5px] text-[#5B5BD6]">Solution Overview</span>
              </div>
              <div className="space-y-2.5">
                <div className="h-2 rounded bg-[#EFEFF4] w-full" />
                <div className="h-2 rounded bg-[#EFEFF4] w-[85%]" />
                <div className="h-2 rounded bg-[#EFEFF4] w-[70%]" />
              </div>
              <div className="mt-4 flex gap-3">
                <div className="flex-1 h-20 rounded-md bg-[#FBFBFD] border border-[#E7E7EE] flex items-center justify-center">
                  <Video size={16} className="text-[#A4A8BC]" />
                </div>
                <div className="flex-1 h-20 rounded-md bg-[#FBFBFD] border border-[#E7E7EE] flex items-center justify-center">
                  <BarChart3 size={16} className="text-[#A4A8BC]" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5, ease }}
              className="bg-white rounded-lg border border-[#E7E7EE] p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="eyebrow text-[9.5px] text-[#5B5BD6]">ROI & Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { label: 'Annual Savings', value: '$142k' },
                  { label: 'Time to ROI', value: '< 90 days' },
                  { label: 'Efficiency Gain', value: '4.2×' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 rounded-md bg-[#FBFBFD] border border-[#E7E7EE] p-3 text-center"
                  >
                    <div className="display text-[16px] text-[#5B5BD6] tabular-nums">{stat.value}</div>
                    <div className="text-[10px] text-[#71768B] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5, ease }}
              className="bg-white rounded-lg border border-[#E7E7EE] p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="eyebrow text-[9.5px] text-[#5B5BD6]">Mutual Action Plan</span>
              </div>
              <div className="space-y-2">
                {[
                  { text: 'Technical deep-dive', done: true },
                  { text: 'Security review', done: true },
                  { text: 'Proposal delivery', done: false },
                  { text: 'Legal review', done: false },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center ${
                        item.done
                          ? 'bg-[#3D9A6A] border-[#3D9A6A]'
                          : 'border-[#D9D9E2] bg-white'
                      }`}
                    >
                      {item.done && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4L3.2 5.7L6.5 2.3"
                            stroke="white"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-[12px] ${
                        item.done ? 'text-[#A4A8BC] line-through' : 'text-[#1F2333] font-medium'
                      }`}
                    >
                      {item.text}
                    </span>
                    {!item.done && <ChevronRight size={10} className="text-[#A4A8BC] ml-auto" />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Soft iris glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[560px] pointer-events-none"
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
          className="text-center max-w-4xl mx-auto mb-12"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center mb-7">
            <span className="inline-flex items-center gap-2 bg-white border border-[#E7E7EE] rounded-full pl-1 pr-3 py-1 text-[12px] font-medium text-[#3D4256] shadow-[0_1px_2px_rgba(15,18,30,0.04)]">
              <span className="bg-[#F2F2FB] text-[#5B5BD6] rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                Digital Sales Rooms
              </span>
              <span className="flex items-center gap-1.5 text-[#71768B]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D9A6A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3D9A6A]" />
                </span>
                4.2× more buyer engagement
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#0B0E1A] leading-[0.98] tracking-[-0.045em] mb-5 sm:mb-6"
          >
            Every deal deserves its own space.
            <br />
            <span className="text-gradient">Close it there.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-[19px] text-[#3D4256] leading-[1.5] mb-8 max-w-[620px] mx-auto"
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
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.98]"
            >
              Get Started Free
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-[#0B0E1A] bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-xl transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </motion.div>

        {/* App mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="relative max-w-[1080px] mx-auto"
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  )
}
