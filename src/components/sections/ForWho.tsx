'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Settings2, Check, Sparkles } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const personas = [
  {
    icon: TrendingUp,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.15)',
    role: 'Account Executives',
    tagline: 'AI does the busywork. You do the selling.',
    description: 'Paste a call transcript and let AI build the pod. Track every buyer move with real-time intent. Follow up at exactly the right moment.',
    benefits: [
      'AI builds pods from call transcripts',
      'Real-time alerts when deals heat up',
      'Close 4.2× more deals with personalized rooms',
    ],
  },
  {
    icon: Users,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.15)',
    role: 'Sales Leaders',
    tagline: 'AI-powered visibility into every deal.',
    description: 'See which deals need attention before they stall. AI scores intent across your pipeline so you coach from data, not gut feel.',
    benefits: [
      'Pipeline-wide AI intent scoring',
      'Spot at-risk deals before they go cold',
      'Standardize AI-powered deal rooms across teams',
    ],
  },
  {
    icon: Settings2,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.15)',
    role: 'Revenue Operations',
    tagline: 'Scale AI-driven deal rooms across the org.',
    description: 'Create AI templates once, deploy them everywhere. Every pod is consistent, trackable, and integrated with your CRM stack.',
    benefits: [
      'One AI template, infinite personalized pods',
      'Engagement data syncs back to your CRM',
      'White-label rooms match your company brand',
    ],
  },
]

export default function ForWho() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            Who it&apos;s for
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117]"
          >
            Built for teams that{' '}
            <span className="text-gradient-ai">close deals.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#3D4663] max-w-xl mx-auto">
            Whether you&apos;re an AE closing $50k deals or a VP managing 30 reps, Co-Lab&apos;s AI fits how you work.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6"
        >
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.role}
                variants={scaleIn}
                className="bg-white rounded-2xl border border-black/[0.06] p-8 flex flex-col card-hover shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ backgroundColor: persona.bg, border: `1.5px solid ${persona.border}` }}
                >
                  <Icon size={22} style={{ color: persona.color }} />
                </div>

                <div
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: persona.color }}
                >
                  {persona.role}
                </div>

                <h3 className="text-base font-bold text-[#0D1117] mb-2 leading-snug">{persona.tagline}</h3>
                <p className="text-sm text-[#3D4663] leading-relaxed mb-6">{persona.description}</p>

                <ul className="mt-auto space-y-3">
                  {persona.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#3D4663]">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: persona.bg }}
                      >
                        <Check size={10} style={{ color: persona.color }} />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
