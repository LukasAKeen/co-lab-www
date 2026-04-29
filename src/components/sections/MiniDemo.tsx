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
import { fadeUp, viewportConfig } from '@/lib/motion'
import SectionHeader from '@/components/SectionHeader'

const templateTranscript = `"Our team has about 200 seats on the current tool. Security compliance is a hard requirement — we'll need SOC2 docs before legal signs off. Can you walk me through the ROI? Timeline is end of Q2 for us. We'd also love a quick intro video from your team..."`

const generatedBlocks = [
  { icon: LayoutGrid, label: 'Hero Section', detail: 'Personalized welcome header', confidence: '98%' },
  { icon: Video, label: 'Welcome Video', detail: 'Intro from your AE — placeholder ready', confidence: '95%' },
  { icon: BarChart3, label: 'ROI Calculator', detail: 'Extracted: "walk me through the ROI"', confidence: '94%' },
  { icon: FileText, label: 'Security & Compliance', detail: 'Extracted: "SOC2 docs before legal"', confidence: '92%' },
  { icon: ListChecks, label: 'Mutual Action Plan', detail: 'Extracted: "Timeline is end of Q2"', confidence: '90%' },
]

type Phase = 'ready' | 'loading' | 'result'

export default function MiniDemo() {
  const [phase, setPhase] = useState<Phase>('ready')

  function handleGenerate() {
    setPhase('loading')
    setTimeout(() => setPhase('result'), 2500)
  }

  function handleReset() {
    setPhase('ready')
  }

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          anchor="03"
          kicker="Try it"
          title={
            <>
              Need a head start?
              <br />
              Let the AI coach draft it.
            </>
          }
          subhead="Drop in a call transcript and get a complete first draft of your deal room — blocks, pricing, MAP. Refine everything from there."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl bg-white border border-[#E7E7EE] shadow-[0_24px_60px_-20px_rgba(15,18,30,0.08)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#E7E7EE] bg-[#FBFBFD]">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#5B5BD6]" />
                <span className="text-[13.5px] font-semibold text-[#0B0E1A]">AI Pod Generator</span>
              </div>
              {phase === 'result' && (
                <button
                  onClick={handleReset}
                  className="text-[12px] font-medium text-[#5B5BD6] hover:text-[#4040C0] transition-colors"
                >
                  Reset demo
                </button>
              )}
            </div>

            {/* Body */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {phase === 'ready' && (
                  <motion.div
                    key="ready"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-3">
                      <span className="eyebrow text-[#71768B]">Sample Call Transcript</span>
                    </div>
                    <div className="w-full rounded-lg border border-[#E7E7EE] bg-[#FBFBFD] px-4 py-3.5 text-[14px] text-[#3D4256] leading-[1.55] font-mono">
                      {templateTranscript}
                    </div>
                    <button
                      onClick={handleGenerate}
                      className="group mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.99]"
                    >
                      <Sparkles size={14} />
                      Generate Deal Room
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <p className="mt-3 text-center text-[11px] text-[#A4A8BC]">
                      This is a sample transcript — click Generate to see the AI in action
                    </p>
                  </motion.div>
                )}

                {phase === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center py-12"
                  >
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#F2F2FB] border border-[#E6E6F7] flex items-center justify-center">
                        <Sparkles size={22} className="text-[#5B5BD6]" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Loader2 size={14} className="text-[#5B5BD6] animate-spin" />
                      <span className="text-[13.5px] font-semibold text-[#0B0E1A]">
                        AI is analyzing transcript…
                      </span>
                    </div>
                    <div className="space-y-1 text-center">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-[12px] text-[#71768B]"
                      >
                        Extracting buyer signals and timeline cues
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-[12px] text-[#71768B]"
                      >
                        Matching content blocks to buyer needs
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0 }}
                        className="text-[12px] text-[#71768B]"
                      >
                        Building your pod layout…
                      </motion.p>
                    </div>
                  </motion.div>
                )}

                {phase === 'result' && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <Sparkles size={14} className="text-[#5B5BD6]" />
                      <span className="text-[13.5px] font-semibold text-[#0B0E1A]">
                        Auto-Generated Pod — <span className="text-[#5B5BD6]">Sample Q2 Deal</span>
                      </span>
                    </div>

                    <div className="space-y-2">
                      {generatedBlocks.map((block, i) => {
                        const Icon = block.icon
                        return (
                          <motion.div
                            key={block.label}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 p-3.5 rounded-lg bg-[#FBFBFD] border border-[#E7E7EE]"
                          >
                            <div className="w-9 h-9 rounded-md bg-[#F2F2FB] border border-[#E6E6F7] flex items-center justify-center flex-shrink-0">
                              <Icon size={15} className="text-[#5B5BD6]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-[#0B0E1A]">
                                {block.label}
                              </div>
                              <div className="text-[11px] text-[#71768B] truncate">
                                {block.detail}
                              </div>
                            </div>
                            <span className="eyebrow text-[10px] text-[#5B5BD6] bg-[#F2F2FB] px-2 py-0.5 rounded flex-shrink-0">
                              {block.confidence}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-5 flex items-center gap-3"
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://app.colabapp.ai/register"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-[13.5px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.99]"
                      >
                        <Sparkles size={13} />
                        Start Free — Try With Your Data
                      </a>
                      <div className="text-[11px] text-[#71768B] flex-shrink-0 font-mono">
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
