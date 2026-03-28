'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Play,
  Zap,
  FileText,
  LayoutGrid,
  MessageSquare,
  ImageIcon,
  BarChart3,
  Bot,
} from 'lucide-react'
import { fadeUp, staggerContainer, popIn } from '@/lib/motion'

function AIPulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
    </span>
  )
}

/* ── Mockup: AI building a Pod from a transcript ── */
function AppMockup() {
  const suggestedBlocks = [
    { icon: LayoutGrid, label: 'Hero Section', confidence: '98%', color: '#6366F1' },
    { icon: FileText, label: 'Executive Summary', confidence: '95%', color: '#34D399' },
    { icon: ImageIcon, label: 'Product Demo Video', confidence: '92%', color: '#F59E0B' },
    { icon: BarChart3, label: 'ROI Calculator', confidence: '89%', color: '#F43F5E' },
    { icon: MessageSquare, label: 'Customer Testimonial', confidence: '87%', color: '#6366F1' },
  ]

  const transcriptLines = [
    { text: '"We need to see the ROI breakdown..."', highlight: true, tag: 'Pricing Signal' },
    { text: '"Our team has 200 users on the current tool"', highlight: false, tag: '' },
    { text: '"Security compliance is a hard requirement"', highlight: true, tag: 'Objection' },
    { text: '"Can you show me the integration with Salesforce?"', highlight: true, tag: 'Feature Ask' },
    { text: '"Timeline is end of Q2 for us"', highlight: false, tag: '' },
  ]

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.06)]">
      {/* Browser bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1C1C28] border-b border-white/[0.06]">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/[0.07] rounded-lg px-3 py-1 text-[11px] text-white/40 max-w-[280px] w-full text-center">
            app.co-lab.com/pods/new
          </div>
        </div>
        <div className="w-16 flex-shrink-0" />
      </div>

      {/* App shell */}
      <div className="flex bg-[#07090F]" style={{ minHeight: '460px' }}>
        {/* Left: Transcript analysis */}
        <div className="w-[45%] border-r border-white/[0.05] flex flex-col">
          <div className="px-5 py-3.5 border-b border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#34D399]/15 flex items-center justify-center">
                <Bot size={12} className="text-[#34D399]" />
              </div>
              <span className="text-xs font-semibold text-[#EEF2FF]">AI Transcript Analysis</span>
            </div>
            <span className="text-[10px] bg-[#34D399]/12 text-[#34D399] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              Processing
            </span>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-hidden">
            {transcriptLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`px-3 py-2.5 rounded-xl text-[11px] leading-relaxed ${
                  line.highlight
                    ? 'bg-[#34D399]/8 border border-[#34D399]/15 text-[#D1FAE5]'
                    : 'bg-white/[0.03] text-[#6B7394]'
                }`}
              >
                <span>{line.text}</span>
                {line.tag && (
                  <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#34D399]/15 text-[#34D399]">
                    {line.tag}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: AI-suggested blocks */}
        <div className="w-[55%] flex flex-col">
          <div className="px-5 py-3.5 border-b border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#6366F1]/15 flex items-center justify-center">
                <Sparkles size={12} className="text-[#818CF8]" />
              </div>
              <span className="text-xs font-semibold text-[#EEF2FF]">AI-Suggested Pod Layout</span>
            </div>
            <span className="text-[10px] text-[#6B7394]">5 blocks recommended</span>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-hidden">
            {suggestedBlocks.map((block, i) => {
              const Icon = block.icon
              return (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, x: 12, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.1] transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${block.color}15` }}
                  >
                    <Icon size={14} style={{ color: block.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-[#EEF2FF]">{block.label}</div>
                    <div className="text-[10px] text-[#6B7394]">Auto-generated from transcript</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] font-semibold text-[#34D399]">{block.confidence}</span>
                    <div className="w-5 h-5 rounded-md bg-[#6366F1]/20 flex items-center justify-center">
                      <Zap size={10} className="text-[#818CF8]" />
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* AI action bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20"
            >
              <Sparkles size={12} className="text-[#818CF8]" />
              <span className="text-[11px] text-[#818CF8] font-medium">Generate Pod with these blocks</span>
              <ArrowRight size={11} className="text-[#818CF8] ml-auto" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="h-4 bg-gradient-to-b from-[#07090F] to-[#07090F]/80" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center pt-28 pb-0 overflow-hidden">
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
            className="text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.04] mb-6 text-[#0D1117]"
          >
            Your AI builds the deal room.
            <br />
            <span className="text-gradient-ai">You close the deal.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#3D4663] leading-relaxed mb-10 max-w-2xl mx-auto"
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

        {/* App mockup with glow */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[1100px]"
        >
          {/* Gradient glow behind mockup */}
          <div className="absolute -inset-8 rounded-[40px] glow-ai opacity-60 pointer-events-none" />
          <div
            className="absolute -inset-20 pointer-events-none opacity-40"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 70%)',
            }}
          />

          {/* Floating badge — AI Status */}
          <motion.div
            variants={popIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            className="absolute -left-4 top-24 z-20 hidden xl:block"
          >
            <div className="bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#34D399]/12 flex items-center justify-center">
                  <Sparkles size={14} className="text-[#34D399]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#9BA3B8] font-medium">AI Confidence</div>
                  <div className="text-sm font-bold text-[#34D399]">95% match</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — Engagement */}
          <motion.div
            variants={popIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
            className="absolute -right-4 top-20 z-20 hidden xl:block"
          >
            <div className="bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#F59E0B]/12 flex items-center justify-center">
                  <Zap size={14} className="text-[#F59E0B]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#9BA3B8] font-medium">Pod built in</div>
                  <div className="text-sm font-bold text-[#0D1117]">47 seconds</div>
                </div>
              </div>
            </div>
          </motion.div>

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
