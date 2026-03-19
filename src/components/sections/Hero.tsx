'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  LayoutDashboard,
  BarChart3,
  FolderOpen,
  LayoutTemplate,
  Settings,
  Handshake,
  Flame,
  TrendingUp,
  Eye,
  MoreHorizontal,
  Plus,
  Search,
  Play,
  Zap,
} from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]" />
    </span>
  )
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: FolderOpen, label: 'Assets', active: false },
  { icon: LayoutTemplate, label: 'Templates', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

const pods = [
  {
    name: 'Meridian Corp',
    sub: 'Q2 Partnership Proposal',
    viewed: '2h ago',
    time: '14m 22s',
    intent: 'HIGH',
    intentColor: '#22D3A0',
    visitors: 3,
    stage: 'Evaluation',
    stageColor: '#818CF8',
    progress: 72,
  },
  {
    name: 'Nexus Capital',
    sub: 'Enterprise Deal — Series B',
    viewed: '38m ago',
    time: '7m 04s',
    intent: 'HIGH',
    intentColor: '#22D3A0',
    visitors: 1,
    stage: 'Negotiation',
    stageColor: '#F59E0B',
    progress: 88,
  },
  {
    name: 'CloudOps Inc',
    sub: 'SaaS Renewal 2025',
    viewed: '1d ago',
    time: '3m 11s',
    intent: 'MED',
    intentColor: '#F59E0B',
    visitors: 2,
    stage: 'Proposal',
    stageColor: '#6366F1',
    progress: 55,
  },
  {
    name: 'Vantage Health',
    sub: 'Initial Introduction',
    viewed: '3d ago',
    time: '—',
    intent: '—',
    intentColor: '#4A5368',
    visitors: 0,
    stage: 'Discovery',
    stageColor: '#4A5368',
    progress: 10,
  },
]

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center pt-24 pb-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#6366F1] opacity-[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div variants={fadeUp} className="inline-flex flex-wrap items-center justify-center gap-2 mb-7">
            <span className="bg-white border border-[#6366F1]/20 rounded-full px-4 py-1.5 text-xs font-medium text-[#6366F1] flex items-center gap-2 shadow-sm">
              <PulseDot />
              Now in early access
              <ArrowRight size={12} />
            </span>
            <span className="bg-[#059669]/08 border border-[#059669]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#059669] flex items-center gap-1.5 shadow-sm">
              <Zap size={11} className="fill-[#059669]" />
              4.2× more buyer engagement
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.04] mb-5 text-[#0D1117]"
          >
            Stop sending decks.
            <br />
            <span className="text-gradient-indigo">Start closing deals.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#5A6480] leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Co-Lab gives every deal its own personalized sales room — interactive,
            trackable, and built to move buyers forward.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-[10px] transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-95"
            >
              Get early access
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#5A6480] hover:text-[#0D1117] border border-black/[0.1] hover:border-black/[0.18] bg-white rounded-[10px] transition-all shadow-sm"
            >
              <span className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                <Play size={9} className="text-[#6366F1] fill-[#6366F1] ml-0.5" />
              </span>
              Watch demo
            </button>
          </motion.div>
        </motion.div>

        {/* App mockup — full width, clips at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto"
          style={{ maxWidth: '1100px' }}
        >
          {/* Floating badge — intent score */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 top-20 z-20 hidden xl:block"
          >
            <div className="bg-white rounded-[14px] px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/[0.07]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[8px] bg-[#22D3A0]/15 flex items-center justify-center">
                  <Flame size={14} className="text-[#22D3A0]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#9BA3B8] font-medium">Intent Score</div>
                  <div className="text-sm font-bold text-[#22D3A0]">87 / 100</div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-[5px] bg-[#22D3A0]/12 text-[#22D3A0] ml-0.5">HIGH</span>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — visitors */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 top-16 z-20 hidden xl:block"
          >
            <div className="bg-white rounded-[14px] px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/[0.07]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[8px] bg-[#6366F1]/10 flex items-center justify-center">
                  <TrendingUp size={14} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#9BA3B8] font-medium">This week</div>
                  <div className="text-sm font-bold text-[#0D1117]">+3 visitors</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Browser chrome + App */}
          <div className="rounded-t-[16px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.08)]">

            {/* Browser bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#1C1C28] border-b border-white/[0.06]">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.07] rounded-[6px] px-3 py-1 text-[11px] text-white/40 max-w-[280px] w-full text-center">
                  app.co-lab.com/dashboard
                </div>
              </div>
              <div className="w-16 flex-shrink-0" />
            </div>

            {/* App shell */}
            <div className="flex bg-[#07090F]" style={{ height: '520px' }}>

              {/* Sidebar */}
              <div className="w-[200px] flex-shrink-0 bg-[#0C1018] border-r border-white/[0.05] flex flex-col py-4">
                {/* Logo */}
                <div className="flex items-center gap-2 px-4 mb-6">
                  <div className="w-7 h-7 rounded-[8px] bg-[#6366F1] flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.5)]">
                    <Handshake size={14} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#EEF2FF]">Co-Lab</span>
                </div>

                {/* Nav */}
                <div className="flex flex-col gap-0.5 px-2 flex-1">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-[8px] cursor-default"
                        style={{
                          backgroundColor: item.active ? 'rgba(99,102,241,0.12)' : 'transparent',
                        }}
                      >
                        <Icon
                          size={15}
                          style={{ color: item.active ? '#818CF8' : '#4A5368' }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: item.active ? '#EEF2FF' : '#4A5368' }}
                        >
                          {item.label}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* User */}
                <div className="px-3 pt-3 border-t border-white/[0.05]">
                  <div className="flex items-center gap-2 px-2 py-2">
                    <div className="w-6 h-6 rounded-full bg-[#6366F1]/30 flex items-center justify-center text-[10px] font-bold text-[#818CF8]">
                      A
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium text-[#8892AA] truncate">Alex Rivera</div>
                      <div className="text-[9px] text-[#4A5368] truncate">Account Executive</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col overflow-hidden">

                {/* Topbar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
                  <div>
                    <div className="text-base font-bold text-[#EEF2FF]">Your Pods</div>
                    <div className="text-xs text-[#4A5368]">4 active deals</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-[8px] px-3 py-1.5">
                      <Search size={12} className="text-[#4A5368]" />
                      <span className="text-xs text-[#4A5368]">Search pods...</span>
                    </div>
                    <button className="flex items-center gap-1.5 bg-[#6366F1] hover:bg-[#5558E8] text-white text-xs font-medium px-3 py-1.5 rounded-[8px]">
                      <Plus size={13} />
                      New Pod
                    </button>
                  </div>
                </div>

                {/* Table header */}
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_32px] gap-3 px-6 py-2.5 border-b border-white/[0.04]">
                  {['Pod', 'Last Viewed', 'Time Spent', 'Intent', 'Stage'].map((h) => (
                    <div key={h} className="text-[10px] font-semibold text-[#4A5368] uppercase tracking-wider">
                      {h}
                    </div>
                  ))}
                  <div />
                </div>

                {/* Table rows */}
                <div className="flex-1 overflow-hidden">
                  {pods.map((pod, i) => (
                    <motion.div
                      key={pod.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_32px] gap-3 px-6 py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] cursor-default transition-colors"
                    >
                      {/* Pod name */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-7 h-7 rounded-[7px] flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                          style={{ backgroundColor: `${pod.intentColor}18`, color: pod.intentColor }}
                        >
                          {pod.name[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-[#EEF2FF] truncate">{pod.name}</div>
                          <div className="text-[10px] text-[#4A5368] truncate">{pod.sub}</div>
                        </div>
                      </div>

                      {/* Last viewed */}
                      <div className="flex items-center">
                        <span className="text-xs text-[#8892AA]">{pod.viewed}</span>
                      </div>

                      {/* Time spent */}
                      <div className="flex items-center gap-1">
                        <Eye size={11} className="text-[#4A5368]" />
                        <span className="text-xs text-[#8892AA]">{pod.time}</span>
                      </div>

                      {/* Intent */}
                      <div className="flex items-center">
                        {pod.intent !== '—' ? (
                          <span
                            className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-[5px]"
                            style={{
                              color: pod.intentColor,
                              backgroundColor: `${pod.intentColor}18`,
                            }}
                          >
                            {pod.intent === 'HIGH' && <Flame size={9} />}
                            {pod.intent}
                          </span>
                        ) : (
                          <span className="text-xs text-[#4A5368]">—</span>
                        )}
                      </div>

                      {/* Stage */}
                      <div className="flex items-center">
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-[5px]"
                          style={{
                            color: pod.stageColor,
                            backgroundColor: `${pod.stageColor}18`,
                          }}
                        >
                          {pod.stage}
                        </span>
                      </div>

                      {/* More */}
                      <div className="flex items-center justify-center">
                        <MoreHorizontal size={14} className="text-[#4A5368]" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom stat strip */}
                <div className="flex items-center gap-6 px-6 py-3 border-t border-white/[0.05] bg-[#0C1018]/50">
                  {[
                    { label: 'Total views', value: '47' },
                    { label: 'Unique visitors', value: '6' },
                    { label: 'Avg. session', value: '6m 14s' },
                    { label: 'High-intent leads', value: '2' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#EEF2FF]">{s.value}</span>
                      <span className="text-[10px] text-[#4A5368]">{s.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Bottom fade so app clips gracefully */}
          <div className="h-16 bg-gradient-to-b from-transparent to-[#FAFBFF] relative -mt-16 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
