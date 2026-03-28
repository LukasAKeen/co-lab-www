'use client'

import { motion } from 'framer-motion'
import {
  FileSearch,
  Sparkles,
  MessageSquareText,
  ArrowRight,
  FileText,
  FolderOpen,
  BarChart3,
  Wand2,
  PenLine,
} from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const steps = [
  {
    number: '01',
    icon: FileSearch,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.20)',
    glowClass: 'glow-mint',
    title: 'AI Analyzes Your Calls',
    description:
      'Upload a call transcript or connect Gong — our AI parses every line, extracting buyer signals, objections, feature requests, and timeline cues automatically.',
    details: [
      { icon: FileText, text: 'Call transcripts parsed in seconds' },
      { icon: FolderOpen, text: 'Files auto-categorized by type' },
      { icon: BarChart3, text: 'Buyer signals extracted & scored' },
    ],
  },
  {
    number: '02',
    icon: Sparkles,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.20)',
    glowClass: 'glow-indigo',
    title: 'AI Builds Your Pod',
    description:
      'Based on the transcript, AI suggests the perfect blocks, assets, and decks — then assembles a complete Pod layout you can publish in one click.',
    details: [
      { icon: Sparkles, text: 'Blocks suggested by AI confidence' },
      { icon: Wand2, text: 'Assets matched from your library' },
      { icon: BarChart3, text: 'Layout optimized for conversion' },
    ],
  },
  {
    number: '03',
    icon: MessageSquareText,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.20)',
    glowClass: '',
    title: 'AI Rewrites in Real Time',
    description:
      'Need to tweak copy, swap a case study, or update pricing? The in-app AI assistant lets you rewrite, expand, or translate any block instantly — right in the workspace.',
    details: [
      { icon: PenLine, text: 'Rewrite any block with a prompt' },
      { icon: MessageSquareText, text: 'AI chat assistant in-workspace' },
      { icon: Wand2, text: 'Tone, length & language controls' },
    ],
  },
]

export default function HowItWorks() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F2F4FA]" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
            <span className="bg-white border border-[#6366F1]/15 rounded-full px-4 py-1.5 text-xs font-semibold text-[#6366F1] shadow-sm flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#6366F1]" />
              AI-Powered Workflow
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117] leading-tight"
          >
            From call to close —{' '}
            <span className="text-gradient-ai">AI handles the rest.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-[#3D4663] max-w-2xl mx-auto leading-relaxed">
            Three steps. Zero manual work. Co-Lab&apos;s AI turns every sales call
            into a buyer-ready deal room — automatically.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[calc(33.3%+12px)] right-[calc(33.3%+12px)] z-0">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#34D399]/40 via-[#6366F1]/40 to-[#F59E0B]/40 rounded-full" />
          </div>

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={scaleIn}
                className="relative bg-white rounded-2xl border border-black/[0.06] p-8 card-hover shadow-sm"
              >
                {/* Number + Icon */}
                <div className="relative mb-6 flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
                    style={{ backgroundColor: step.bg, border: `1.5px solid ${step.border}` }}
                  >
                    <Icon size={24} style={{ color: step.color }} />
                  </div>
                  <span
                    className="text-[11px] font-black px-2.5 py-1 rounded-xl border shadow-sm"
                    style={{
                      color: step.color,
                      borderColor: step.border,
                      backgroundColor: step.bg,
                    }}
                  >
                    Step {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0D1117] mb-3 leading-snug">{step.title}</h3>
                <p className="text-sm text-[#3D4663] leading-relaxed mb-6">{step.description}</p>

                {/* Detail list */}
                <ul className="space-y-2.5">
                  {step.details.map((detail) => {
                    const DetailIcon = detail.icon
                    return (
                      <li key={detail.text} className="flex items-center gap-2.5 text-sm text-[#6B7394]">
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: step.bg }}
                        >
                          <DetailIcon size={12} style={{ color: step.color }} />
                        </span>
                        {detail.text}
                      </li>
                    )
                  })}
                </ul>

                {/* Decorative gradient line at bottom */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-30"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${step.color} 50%, transparent 100%)`,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-16"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors"
          >
            See how it works in 2 minutes
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
