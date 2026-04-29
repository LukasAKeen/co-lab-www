'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Settings2, HeartHandshake } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const personas = [
  {
    icon: TrendingUp,
    role: 'Account Executives',
    tagline: 'Turn every call into a buyer-ready room.',
    description:
      'Build a personalized deal room in minutes, not hours. See every buyer move with real-time intent, and let the AI coach flag when it’s time to follow up.',
    benefits: [
      'One buyer-facing link per deal',
      'Real-time alerts when deals heat up',
      'AI coach drafts your first pod from a call',
    ],
  },
  {
    icon: Users,
    role: 'Sales Leaders',
    tagline: 'See which deals are moving — and which aren’t.',
    description:
      'Pipeline-wide visibility into every buyer interaction. Coach from evidence, not gut feel, and standardize how your team runs every deal.',
    benefits: [
      'Pipeline-wide engagement & intent scoring',
      'Spot at-risk deals before they go cold',
      'Consistent rooms across the whole team',
    ],
  },
  {
    icon: Settings2,
    role: 'Revenue Operations',
    tagline: 'One template. Every deal. Fully branded.',
    description:
      'Define blocks, approvals, and brand rules once — deploy everywhere. Every pod stays on-message, on-brand, and in sync with your CRM.',
    benefits: [
      'Reusable templates across the org',
      'Engagement data syncs back to your CRM',
      'White-label rooms match your company brand',
    ],
  },
  {
    icon: HeartHandshake,
    role: 'Customer Success',
    tagline: 'Your sales room becomes their onboarding portal.',
    description:
      'When the deal closes, the pod doesn’t die. Swap deal content for onboarding resources — same link, same space, zero friction for the customer.',
    benefits: [
      'One link from sales through onboarding',
      'Swap blocks from deal content to CS resources',
      'Track customer engagement post-sale',
    ],
  },
]

export default function ForWho() {
  return (
    <section id="who" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F6F6FA] border-y border-[#E7E7EE]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-[760px] mx-auto mb-14"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[#5B5BD6] mb-3">
            Who it&apos;s for
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="display text-3xl sm:text-4xl md:text-[44px] text-[#0B0E1A]"
          >
            Built for teams that <span className="text-gradient">close deals.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[17px] text-[#3D4256] leading-[1.55]"
          >
            From first call to onboarding — one workspace for every team that touches the deal.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
        >
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.role}
                variants={scaleIn}
                className="bg-white rounded-2xl border border-[#E7E7EE] p-7 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F2F2FB] border border-[#E6E6F7] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#5B5BD6]" />
                </div>

                <p className="eyebrow text-[#5B5BD6] mb-2">{persona.role}</p>

                <h3 className="display text-[22px] text-[#0B0E1A] mb-2.5">
                  {persona.tagline}
                </h3>
                <p className="text-[14px] text-[#3D4256] leading-[1.55] mb-4">
                  {persona.description}
                </p>

                <ul className="border-t border-[#E7E7EE]">
                  {persona.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 py-2 text-[13.5px] text-[#3D4256] border-b border-[#E7E7EE] last:border-b-0"
                    >
                      <span className="text-[#5B5BD6] font-semibold flex-shrink-0">→</span>
                      <span>{benefit}</span>
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
