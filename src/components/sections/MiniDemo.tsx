'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  LayoutGrid,
  FileText,
  Video,
  BarChart3,
  ListChecks,
  Loader2,
} from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

const sampleTranscript = `"Our team has about 200 seats on the current tool. Security compliance is a hard requirement — we'll need SOC2 docs before legal signs off. Can you walk me through the ROI? Timeline is end of Q2 for us. We'd also love a quick intro video from your team..."`

const generatedBlocks = [
  { icon: LayoutGrid, label: 'Hero Section', detail: 'Personalized for Meridian Corp', color: '#6366F1', confidence: '98%' },
  { icon: Video, label: 'Welcome Video', detail: 'Intro from your AE — placeholder ready', color: '#34D399', confidence: '95%' },
  { icon: BarChart3, label: 'ROI Calculator', detail: 'Extracted: "walk me through the ROI"', color: '#F59E0B', confidence: '94%' },
  { icon: FileText, label: 'Security & Compliance', detail: 'Extracted: "SOC2 docs before legal"', color: '#F43F5E', confidence: '92%' },
  { icon: ListChecks, label: 'Mutual Action Plan', detail: 'Extracted: "Timeline is end of Q2"', color: '#6366F1', confidence: '90%' },
]

type Phase = 'input' | 'loading' | 'result'

export default function MiniDemo() {
  const [phase, setPhase] = useState<Phase>('input')
  const [transcript, setTranscript] = useState('')

  function handleGenerate() {
    setPhase('loading')
    setTimeout(() => setPhase('result'), 2500)
  }

  function handleReset() {
    setPhase('input')
    setTranscript('')
  }

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F2F4FA]" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      {/* Aurora blobs */}
      <div className="aurora-blob aurora-blob-1 w-[500px] h-[400px] top-[10%] left-[15%]" />
      <div className="aurora-blob aurora-blob-2 w-[400px] h-[350px] top-[20%] right-[10%]" />
      <div className="aurora-blob aurora-blob-3 w-[300px] h-[250px] bottom-[10%] left-[40%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
            <span className="bg-white border border-[#6366F1]/15 rounded-full px-4 py-1.5 text-xs font-semibold text-[#6366F1] shadow-sm flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#6366F1]" />
              Interactive Demo
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117] leading-tight"
          >
            See it for yourself.{' '}
            <span className="text-gradient-ai">Paste. Generate. Done.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-[#3D4663] max-w-2xl mx-auto">
            Drop in a snippet from your last Gong or Zoom call and watch AI build a deal room in seconds.
          </motion.p>
        </motion.div>

        {/* Demo Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl glass-card shadow-[0_24px_80px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.05] bg-[#FAFBFF]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#34D399] flex items-center justify-center">
                  <Sparkles size={13} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-[#0D1117]">AI Pod Generator</span>
              </div>
              {phase === 'result' && (
                <button
                  onClick={handleReset}
                  className="text-xs font-medium text-[#6366F1] hover:text-[#4F46E5] transition-colors"
                >
                  Try again
                </button>
              )}
            </div>

            {/* Body */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {/* ── INPUT PHASE ── */}
                {phase === 'input' && (
                  <motion.div
                    key="input"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <textarea
                      value={transcript}
                      onChange={(e) => setTranscript(e.target.value)}
                      placeholder={sampleTranscript}
                      rows={5}
                      className="w-full rounded-xl border border-black/[0.08] bg-[#F8F9FC] px-4 py-3.5 text-sm text-[#0D1117] placeholder:text-[#9BA3B8] focus:outline-none focus:border-[#6366F1]/30 focus:ring-2 focus:ring-[#6366F1]/10 transition-all resize-none"
                    />
                    <button
                      onClick={handleGenerate}
                      className="group mt-4 w-full relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#5558E8] hover:to-[#6366F1] rounded-xl transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] active:scale-[0.98]"
                    >
                      <span className="absolute inset-0 rounded-xl shimmer pointer-events-none" />
                      <Sparkles size={15} />
                      Generate Deal Room
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <p className="mt-3 text-center text-[11px] text-[#9BA3B8]">
                      Or just click Generate to use the sample transcript above
                    </p>
                  </motion.div>
                )}

                {/* ── LOADING PHASE ── */}
                {phase === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center py-12"
                  >
                    {/* Animated glow ring */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#34D399] flex items-center justify-center glow-ai">
                        <Sparkles size={24} className="text-white" />
                      </div>
                      <div className="absolute -inset-3 rounded-3xl border-2 border-[#6366F1]/20 animate-ping" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Loader2 size={14} className="text-[#6366F1] animate-spin" />
                      <span className="text-sm font-semibold text-[#0D1117]">AI is analyzing transcript...</span>
                    </div>
                    <div className="space-y-1 text-center">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xs text-[#9BA3B8]"
                      >
                        Extracting buyer signals and timeline cues
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-xs text-[#9BA3B8]"
                      >
                        Matching content blocks to buyer needs
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0 }}
                        className="text-xs text-[#9BA3B8]"
                      >
                        Building your pod layout...
                      </motion.p>
                    </div>
                  </motion.div>
                )}

                {/* ── RESULT PHASE ── */}
                {phase === 'result' && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Success header */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-6 h-6 rounded-lg bg-[#34D399]/12 flex items-center justify-center">
                        <Sparkles size={12} className="text-[#34D399]" />
                      </div>
                      <span className="text-sm font-semibold text-[#0D1117]">
                        Auto-Generated Pod — <span className="text-[#34D399]">Meridian Corp Q2 Deal</span>
                      </span>
                    </div>

                    {/* Generated blocks */}
                    <div className="space-y-2.5">
                      {generatedBlocks.map((block, i) => {
                        const Icon = block.icon
                        return (
                          <motion.div
                            key={block.label}
                            initial={{ opacity: 0, x: -16, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8F9FC] border border-black/[0.04] hover:border-black/[0.08] transition-colors"
                          >
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${block.color}10` }}
                            >
                              <Icon size={16} style={{ color: block.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-[#0D1117]">{block.label}</div>
                              <div className="text-[11px] text-[#9BA3B8] truncate">{block.detail}</div>
                            </div>
                            <span className="text-[10px] font-semibold text-[#34D399] bg-[#34D399]/10 px-2 py-0.5 rounded-lg flex-shrink-0">
                              {block.confidence}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Action bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-5 flex items-center gap-3"
                    >
                      <a
                        href="#cta"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] active:scale-[0.98]"
                      >
                        <Sparkles size={13} />
                        Try with your own transcript
                      </a>
                      <div className="text-[11px] text-[#9BA3B8] flex-shrink-0">
                        5 blocks · 2.4s
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
