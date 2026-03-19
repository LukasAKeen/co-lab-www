'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Settings2, Check } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const personas = [
  {
    icon: TrendingUp,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    borderCard: 'rgba(99,102,241,0.15)',
    role: 'Account Executives',
    tagline: 'Spend less time on admin. More time selling.',
    description: 'Build a pod in 5 minutes, track every buyer move, and follow up at exactly the right moment.',
    benefits: [
      'Know which deals are heating up',
      'Build a personalized room in minutes',
      'Get notified the instant buyers engage',
    ],
  },
  {
    icon: Users,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
    borderCard: 'rgba(5,150,105,0.15)',
    role: 'Sales Leaders',
    tagline: 'Full visibility into deal health across your pipeline.',
    description: 'See which deals need attention before they stall. Coach your team with real engagement data.',
    benefits: [
      'Pipeline-wide intent scoring at a glance',
      'Spot at-risk deals before they go cold',
      'Standardize how your team runs deals',
    ],
  },
  {
    icon: Settings2,
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.2)',
    borderCard: 'rgba(217,119,6,0.15)',
    role: 'Revenue Operations',
    tagline: 'Standardize your process. Scale what works.',
    description: 'Create templates once and roll them out across the entire team. Consistent, trackable, replicable.',
    benefits: [
      'One template, infinite personalized deals',
      'Tie room engagement back to revenue',
      'Integrate with your existing CRM stack',
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
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117]"
          >
            Built for the people who own the deal.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#5A6480] max-w-xl mx-auto">
            Whether you&apos;re an AE closing $50k deals or a VP managing a team of 30, Co-Lab fits how you work.
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
                className="bg-white rounded-[18px] border p-8 flex flex-col hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5"
                style={{ borderColor: persona.borderCard }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ backgroundColor: persona.bg, border: `1px solid ${persona.border}` }}
                >
                  <Icon size={22} style={{ color: persona.color }} />
                </div>

                {/* Role */}
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: persona.color }}
                >
                  {persona.role}
                </div>

                <h3 className="text-base font-bold text-[#0D1117] mb-2 leading-snug">{persona.tagline}</h3>
                <p className="text-sm text-[#5A6480] leading-relaxed mb-6">{persona.description}</p>

                {/* Benefits */}
                <ul className="mt-auto space-y-2.5">
                  {persona.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#5A6480]">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: persona.bg }}
                      >
                        <Check size={9} style={{ color: persona.color }} />
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
