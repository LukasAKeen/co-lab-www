'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles, Zap, Crown } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const plans = [
  {
    name: 'Starter',
    description: 'Get started with the basics',
    price: 'Free',
    period: '',
    color: '#6B7394',
    bg: 'rgba(107,115,148,0.06)',
    border: 'rgba(107,115,148,0.12)',
    icon: null,
    badge: null,
    highlighted: false,
    cta: 'Get Started Free',
    ctaStyle: 'secondary' as const,
    href: 'https://app.co-lab.com/signup',
    features: [
      'Up to 3 pods',
      'Google & Outlook Calendar',
      'Live pod sharing',
      'Visitor analytics',
      'Team collaboration',
    ],
  },
  {
    name: 'Growth',
    description: 'Scale your deal rooms',
    price: '$49',
    period: '/seat/mo',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.06)',
    border: 'rgba(99,102,241,0.18)',
    icon: Zap,
    badge: 'Popular',
    highlighted: true,
    cta: 'Start Growth Plan',
    ctaStyle: 'primary' as const,
    href: 'https://app.co-lab.com/signup?plan=growth',
    features: [
      'Up to 20 pods',
      'All Starter features',
      'Slack notifications',
      'Gong integration',
      'Close CRM sync',
      'Priority support',
    ],
  },
  {
    name: 'Accelerate',
    description: 'Unlimited power with AI',
    price: '$99',
    period: '/seat/mo',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.18)',
    icon: Crown,
    badge: 'AI Power',
    highlighted: false,
    cta: 'Start Accelerate Plan',
    ctaStyle: 'primary' as const,
    href: 'https://app.co-lab.com/signup?plan=accelerate',
    features: [
      'Unlimited pods',
      'All Growth features',
      'AI Pod Builder',
      'AI content generation',
      'AI chat agent',
      'Salesforce & HubSpot',
      'Zapier automation',
      'Dedicated support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            Pricing
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117]"
          >
            Simple pricing.{' '}
            <span className="text-gradient-ai">No surprises.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#3D4663] max-w-xl mx-auto">
            Start free. Upgrade when you need more pods, integrations, or AI power.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto items-start"
        >
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col ${
                  plan.highlighted
                    ? 'bg-white border-2 border-[#6366F1]/25 shadow-[0_8px_40px_rgba(99,102,241,0.10),0_0_0_1px_rgba(99,102,241,0.08)] ring-1 ring-[#6366F1]/10'
                    : 'bg-white border border-black/[0.06] shadow-sm'
                } card-hover`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-sm flex items-center gap-1"
                      style={{
                        background: plan.highlighted
                          ? 'linear-gradient(135deg, #6366F1, #818CF8)'
                          : 'linear-gradient(135deg, #34D399, #059669)',
                      }}
                    >
                      {Icon && <Icon size={10} />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#0D1117]">{plan.name}</h3>
                  <p className="text-sm text-[#6B7394] mt-0.5">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#0D1117]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-[#9BA3B8] ml-1">{plan.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => {
                    const isAI = feature.startsWith('AI ')
                    return (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[#3D4663]">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5 ${
                          isAI ? 'bg-[#34D399]/12' : 'bg-[#34D399]/8'
                        }`}>
                          <Check size={10} className="text-[#34D399]" />
                        </span>
                        <span className={isAI ? 'font-semibold' : ''}>
                          {isAI && <Sparkles size={10} className="inline text-[#34D399] mr-1 -mt-0.5" />}
                          {feature}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                {/* CTA */}
                {plan.ctaStyle === 'primary' ? (
                  <a
                    href={plan.href}
                    className={`group relative w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl transition-all active:scale-[0.97] ${
                      plan.highlighted
                        ? 'bg-[#6366F1] hover:bg-[#5558E8] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]'
                        : 'bg-[#0D1117] hover:bg-[#1C2333] hover:shadow-[0_0_20px_rgba(13,17,23,0.2)]'
                    }`}
                  >
                    {plan.highlighted && <span className="absolute inset-0 rounded-xl shimmer pointer-events-none" />}
                    {plan.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <a
                    href={plan.href}
                    className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#3D4663] hover:text-[#0D1117] border border-black/[0.08] hover:border-black/[0.15] rounded-xl transition-all hover:shadow-md active:scale-[0.97]"
                  >
                    {plan.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center text-xs text-[#9BA3B8] mt-10"
        >
          All plans include a 14-day free trial · No credit card required · Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
