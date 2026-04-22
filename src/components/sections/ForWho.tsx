'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Settings2, HeartHandshake, Check } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const personas = [
  {
    icon: TrendingUp,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.15)',
    role: 'Account Executives',
    tagline: 'Turn every call into a buyer-ready room.',
    description: 'Build a personalized deal room in minutes, not hours. See every buyer move with real-time intent, and let the AI coach flag when it\u2019s time to follow up.',
    benefits: [
      'One buyer-facing link per deal',
      'Real-time alerts when deals heat up',
      'AI coach drafts your first pod from a call',
    ],
  },
  {
    icon: Users,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.15)',
    role: 'Sales Leaders',
    tagline: 'See which deals are moving — and which aren\u2019t.',
    description: 'Pipeline-wide visibility into every buyer interaction. Coach from evidence, not gut feel, and standardize how your team runs every deal.',
    benefits: [
      'Pipeline-wide engagement & intent scoring',
      'Spot at-risk deals before they go cold',
      'Consistent rooms across the whole team',
    ],
  },
  {
    icon: Settings2,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.15)',
    role: 'Revenue Operations',
    tagline: 'One template. Every deal. Fully branded.',
    description: 'Define blocks, approvals, and brand rules once — deploy everywhere. Every pod stays on-message, on-brand, and in sync with your CRM.',
    benefits: [
      'Reusable templates across the org',
      'Engagement data syncs back to your CRM',
      'White-label rooms match your company brand',
    ],
  },
  {
    icon: HeartHandshake,
    color: '#F43F5E',
    bg: 'rgba(244,63,94,0.08)',
    border: 'rgba(244,63,94,0.15)',
    role: 'Customer Success',
    tagline: 'Your sales room becomes their onboarding portal.',
    description: 'When the deal closes, the pod doesn\u2019t die. Swap deal content for onboarding resources — same link, same space, zero friction for the customer.',
    benefits: [
      'One link from sales through onboarding',
      'Swap blocks from deal content to CS resources',
      'Track customer engagement post-sale',
    ],
  },
]

export default function ForWho() {
  return (
    <section id="who" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117]"
          >
            Built for teams that{' '}
            <span className="text-gradient-ai">close deals.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#3D4663] max-w-xl mx-auto">
            From first call to onboarding — one workspace for every team that touches the deal.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.role}
                variants={scaleIn}
                className="bg-white rounded-2xl border border-black/[0.06] p-7 flex flex-col card-hover shadow-sm"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ backgroundColor: persona.bg, border: `1.5px solid ${persona.border}` }}
                >
                  <Icon size={20} style={{ color: persona.color }} />
                </div>

                <div
                  className="text-[11px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: persona.color }}
                >
                  {persona.role}
                </div>

                <h3 className="text-[15px] font-bold text-[#0D1117] mb-2 leading-snug">{persona.tagline}</h3>
                <p className="text-[13px] text-[#3D4663] leading-relaxed mb-5">{persona.description}</p>

                <ul className="mt-auto space-y-2.5">
                  {persona.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-[13px] text-[#3D4663]">
                      <span
                        className="flex-shrink-0 w-[18px] h-[18px] rounded-md flex items-center justify-center mt-0.5"
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
