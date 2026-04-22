'use client'

import { motion } from 'framer-motion'
import {
  FileSearch,
  Sparkles,
  MessageSquareText,
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
    title: 'Build Your Pod',
    description:
      'Drag in blocks, assets, pricing, and case studies — or start from a template. Prefer a head start? Drop in a call transcript and the AI coach drafts a first version you can refine.',
    details: [
      { icon: FolderOpen, text: 'Drag-and-drop block editor' },
      { icon: FileText, text: 'Reusable templates for every deal stage' },
      { icon: Sparkles, text: 'Optional AI draft from a call transcript' },
    ],
  },
  {
    number: '02',
    icon: Sparkles,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.20)',
    glowClass: 'glow-indigo',
    title: 'Share One Link',
    description:
      'A branded, buyer-facing micro-site. No login walls, no attachments, no version confusion — just one place every stakeholder returns to.',
    details: [
      { icon: Wand2, text: 'Fully branded, no Co-Lab watermark' },
      { icon: FileText, text: 'Decks, videos, pricing, MAPs in one place' },
      { icon: BarChart3, text: 'Works on every device, no sign-up needed' },
    ],
  },
  {
    number: '03',
    icon: MessageSquareText,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.20)',
    glowClass: '',
    title: 'Watch It Move',
    description:
      'See which blocks buyers re-read, who visits, and when. Your AI deal coach surfaces the signals and flags deals going cold — so you follow up at exactly the right moment.',
    details: [
      { icon: BarChart3, text: 'Block-level engagement analytics' },
      { icon: MessageSquareText, text: 'AI coach flags stalling deals' },
      { icon: PenLine, text: 'Iterate copy and blocks with AI assist' },
    ],
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Background — gradient top avoids hard line against page bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFF] via-[#F2F4FA] to-[#F2F4FA]" style={{ backgroundSize: '100% 100%', backgroundPosition: 'top' }} />
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
            <span className="bg-white border border-[#6366F1]/15 rounded-full px-4 py-1.5 text-xs font-semibold text-[#6366F1] shadow-sm">
              How it works
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117] leading-tight"
          >
            A room for every deal.{' '}
            <span className="text-gradient-ai">Built in minutes.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-[#3D4663] max-w-2xl mx-auto leading-relaxed">
            Three steps to turn every sales conversation into a living, buyer-facing space — with an AI coach riding shotgun.
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
                className="relative rounded-2xl glass-card-hover p-8"
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

      </div>
    </section>
  )
}
