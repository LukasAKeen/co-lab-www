'use client'

import { motion } from 'framer-motion'
import { Zap, BarChart3, Sparkles, Handshake } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const features = [
  {
    icon: Zap,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.15)',
    title: 'Build in minutes',
    description:
      'Drag-and-drop blocks, 6+ battle-tested templates, or let AI build from your call transcript.',
    tags: ['AI Pod Builder', 'Templates', 'Blocks'],
  },
  {
    icon: BarChart3,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.15)',
    title: 'Know your buyers',
    description:
      "See who's viewing, how long they stay, which sections they re-read — and score their intent automatically.",
    tags: ['Intent Score', 'Session Analytics', 'Visitor ID'],
  },
  {
    icon: Sparkles,
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.15)',
    title: 'Personalize at scale',
    description:
      'Dynamic tokens like {{buyer.company}} auto-fill your content. One template, infinite deals.',
    tags: ['Dynamic Tokens', 'Custom Branding', 'Per-deal Rooms'],
  },
  {
    icon: Handshake,
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.15)',
    title: 'Built to close',
    description:
      'Track deal stage, add a CTA, embed an AI Q&A agent — give buyers everything they need to say yes.',
    tags: ['AI Agent', 'Deal Stage', 'CTA Blocks'],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117]"
          >
            Everything your deal needs.
            <br />
            <span className="text-[#9BA3B8]">Nothing it doesn&apos;t.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                className="group rounded-[18px] border bg-white p-8 transition-all hover:shadow-[0_8px_40px_rgba(99,102,241,0.1)] hover:-translate-y-0.5"
                style={{ borderColor: 'rgba(0,0,0,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 transition-all group-hover:scale-105"
                  style={{ backgroundColor: feature.bg, border: `1px solid ${feature.border}` }}
                >
                  <Icon size={22} style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#0D1117] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#5A6480] leading-relaxed mb-5">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-[6px] font-medium"
                      style={{
                        backgroundColor: feature.bg,
                        color: feature.color,
                        border: `1px solid ${feature.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
