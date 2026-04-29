'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'
import SectionHeader from '@/components/SectionHeader'

const plans = [
  {
    name: 'Starter',
    description: 'Get started with the basics',
    price: 'Free',
    period: '',
    badge: null,
    highlighted: false,
    cta: 'Get Started Free',
    href: 'https://app.colabapp.ai/register',
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
    price: '$35',
    period: '/seat/mo',
    badge: 'Popular',
    highlighted: true,
    cta: 'Start Growth Plan',
    href: 'https://app.colabapp.ai/register',
    features: [
      'Up to 20 pods',
      'All Starter features',
      'Slack notifications',
      'Close CRM sync',
      'Priority support',
    ],
  },
  {
    name: 'Accelerate',
    description: 'Unlimited power with AI',
    price: '$55',
    period: '/seat/mo',
    badge: 'AI Power',
    highlighted: false,
    cta: 'Start Accelerate Plan',
    href: 'https://app.colabapp.ai/register',
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
    <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          anchor="08"
          kicker="Pricing"
          title={
            <>
              Simple pricing.
              <br />
              No surprises.
            </>
          }
          subhead="Start free. Upgrade when you need more pods, integrations, or AI power."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={`relative rounded-2xl p-7 flex flex-col bg-white ${
                plan.highlighted
                  ? 'border-2 border-[#5B5BD6] shadow-[0_24px_60px_-30px_rgba(91,91,214,0.4)]'
                  : 'border border-[#E7E7EE]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span
                    className={`eyebrow text-[10px] px-3 py-1 rounded-full text-white ${
                      plan.highlighted ? 'bg-[#5B5BD6]' : 'bg-[#0B0E1A]'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="display text-[20px] text-[#0B0E1A]">{plan.name}</h3>
                <p className="text-[13.5px] text-[#71768B] mt-1">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="display text-[44px] sm:text-[48px] text-[#0B0E1A] tabular-nums">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[13px] text-[#71768B]">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13.5px] text-[#1F2333]"
                  >
                    <span className="flex-shrink-0 w-4 h-4 rounded bg-[#F2F2FB] flex items-center justify-center mt-0.5">
                      <Check size={9} className="text-[#5B5BD6]" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={plan.href}
                className={`group w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[13.5px] font-semibold rounded-xl transition-colors active:scale-[0.99] ${
                  plan.highlighted
                    ? 'bg-[#5B5BD6] hover:bg-[#4040C0] text-white'
                    : 'border border-[#E7E7EE] hover:border-[#C9C9EE] text-[#0B0E1A] bg-white'
                }`}
              >
                {plan.cta}
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center text-[12px] text-[#71768B] mt-10"
        >
          All plans include a 14-day free trial · Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
