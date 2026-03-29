'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Settings2, HeartHandshake, Check, ArrowRight } from 'lucide-react'
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
  {
    icon: HeartHandshake,
    color: '#F43F5E',
    bg: 'rgba(244,63,94,0.08)',
    border: 'rgba(244,63,94,0.15)',
    role: 'Customer Success',
    tagline: 'Sales room becomes an onboarding portal.',
    description: 'When the deal closes, the pod doesn\u2019t die. Co-Lab seamlessly transitions from a deal room into a customer onboarding portal \u2014 same link, same space, zero friction for the buyer.',
    benefits: [
      'One link from sales through onboarding',
      'Swap blocks from deal content to CS resources',
      'Track customer engagement post-sale',
    ],
  },
]

export default function ForWho() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
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
            From first call to onboarding — Co-Lab&apos;s AI fits every team that touches the deal.
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

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.co-lab.com/signup"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] active:scale-[0.97]"
            >
              <span className="absolute inset-0 rounded-xl shimmer pointer-events-none" />
              Get Started Free
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://app.co-lab.com/demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors"
            >
              Book a Demo
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
