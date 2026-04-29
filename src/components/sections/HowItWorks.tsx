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
import { scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'
import SectionHeader from '@/components/SectionHeader'

const steps = [
  {
    number: '01',
    icon: FolderOpen,
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
    icon: FileSearch,
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
    icon: BarChart3,
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
    <section
      id="how"
      className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#F6F6FA] border-y border-[#E7E7EE]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          anchor="02"
          kicker="How it works"
          title={
            <>
              A room for every deal.
              <br />
              Built in minutes.
            </>
          }
          subhead="Three steps to turn every sales conversation into a living, buyer-facing space — with an AI coach riding shotgun."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-4"
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={scaleIn}
                className="bg-white border border-[#E7E7EE] rounded-2xl p-8 card-hover"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-7 h-7 rounded-md bg-[#F2F2FB] text-[#5B5BD6] flex items-center justify-center text-[12px] font-semibold tabular-nums">
                    {step.number}
                  </span>
                  <span className="eyebrow text-[#5B5BD6]">Step {step.number}</span>
                </div>

                <div className="w-10 h-10 rounded-lg bg-[#F2F2FB] border border-[#E6E6F7] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#5B5BD6]" />
                </div>

                <h3 className="display text-[22px] text-[#0B0E1A] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#3D4256] leading-[1.55] mb-5">
                  {step.description}
                </p>

                <ul className="border-t border-[#E7E7EE]">
                  {step.details.map((detail) => {
                    const DetailIcon = detail.icon
                    return (
                      <li
                        key={detail.text}
                        className="flex items-center gap-2.5 py-2.5 text-[13px] text-[#3D4256] border-b border-[#E7E7EE] last:border-b-0"
                      >
                        <DetailIcon size={13} className="text-[#5B5BD6] flex-shrink-0" />
                        {detail.text}
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
