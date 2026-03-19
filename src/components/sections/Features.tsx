'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  BarChart3,
  Handshake,
  Flame,
  Check,
  Brain,
  Clock,
  Link,
} from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

// ─── Feature 1 mockup: Pod Builder ───────────────────────────────────────────
function PodBuilderMockup() {
  const templates = [
    { name: 'Tech Sales Suite', tag: 'Enterprise', color: '#6366F1', bg: 'rgba(99,102,241,0.08)', active: true },
    { name: 'SaaS Renewal Pack', tag: 'Renewal', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
    { name: 'SMB Intro Pack', tag: 'SMB', color: '#D97706', bg: 'rgba(217,119,6,0.08)' },
    { name: 'AI Pod Builder', tag: 'Beta', color: '#4F46E5', bg: 'rgba(79,70,229,0.08)' },
  ]
  const blocks = ['Hero', 'Welcome Video', 'Pricing', 'Case Study', 'Next Steps']

  return (
    <div className="rounded-[16px] border border-black/[0.08] bg-white overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06] bg-[#FAFBFF]">
        <span className="text-xs font-semibold text-[#0D1117]">Pod Builder</span>
        <span className="text-[10px] bg-[#6366F1]/10 text-[#6366F1] font-semibold px-2 py-0.5 rounded-[5px]">AI Ready</span>
      </div>
      <div className="flex">
        <div className="w-1/2 border-r border-black/[0.06] p-4">
          <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider mb-3">Templates</div>
          <div className="space-y-2">
            {templates.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between p-2.5 rounded-[8px] border cursor-default"
                style={{
                  borderColor: t.active ? `${t.color}30` : 'transparent',
                  backgroundColor: t.active ? t.bg : 'transparent',
                }}
              >
                <span className="text-[11px] font-medium text-[#0D1117]">{t.name}</span>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-[4px]"
                  style={{ color: t.color, backgroundColor: t.bg }}
                >
                  {t.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider mb-3">Content Blocks</div>
          <div className="space-y-2">
            {blocks.map((b, i) => (
              <div
                key={b}
                className="flex items-center gap-2 p-2.5 rounded-[8px] bg-[#F2F4FA] border border-black/[0.05] cursor-default"
              >
                <div className="w-4 h-4 rounded-[3px] bg-[#6366F1]/15 flex items-center justify-center text-[8px] font-bold text-[#6366F1]">
                  {i + 1}
                </div>
                <span className="text-[11px] font-medium text-[#5A6480]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Feature 2 mockup: Analytics / Intent Scoring ────────────────────────────
function AnalyticsMockup() {
  const visitors = [
    { name: 'Sarah M.', company: 'Meridian Corp', time: '14m 22s', intent: 'HIGH', color: '#22D3A0', initials: 'SM' },
    { name: 'David K.', company: 'Nexus Capital', time: '7m 04s', intent: 'HIGH', color: '#22D3A0', initials: 'DK' },
    { name: 'Priya S.', company: 'CloudOps Inc', time: '3m 11s', intent: 'MED', color: '#F59E0B', initials: 'PS' },
  ]

  return (
    <div className="rounded-[16px] border border-black/[0.08] bg-white overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06] bg-[#FAFBFF]">
        <span className="text-xs font-semibold text-[#0D1117]">Meridian Q2 Deal</span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3A0] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22D3A0]" />
          </span>
          <span className="text-[10px] font-semibold text-[#22D3A0]">Live</span>
        </div>
      </div>
      <div className="px-5 py-4 border-b border-black/[0.05]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-[#9BA3B8] uppercase tracking-wider">Intent Score</span>
          <div className="flex items-center gap-1">
            <Flame size={12} className="text-[#22D3A0]" />
            <span className="text-lg font-black text-[#22D3A0]">87</span>
            <span className="text-xs text-[#9BA3B8]">/ 100</span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-[#F2F4FA] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '87%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-[#22D3A0] to-[#059669]"
          />
        </div>
      </div>
      <div className="px-5 py-3">
        <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider mb-2">Recent Visitors</div>
        <div className="space-y-2">
          {visitors.map((v) => (
            <div key={v.name} className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-[7px] flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{ backgroundColor: `${v.color}15`, color: v.color }}
              >
                {v.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-[#0D1117] truncate">{v.name}</div>
                <div className="text-[10px] text-[#9BA3B8] truncate">{v.company}</div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-[10px] text-[#9BA3B8] flex items-center gap-0.5">
                  <Clock size={9} /> {v.time}
                </span>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-[4px]"
                  style={{ color: v.color, backgroundColor: `${v.color}15` }}
                >
                  {v.intent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Feature 3 mockup: AI Agent + Closing ────────────────────────────────────
function ClosingMockup() {
  const messages = [
    { from: 'buyer', text: 'What does implementation look like for a team of 50?', time: '2:14 PM' },
    { from: 'ai', text: 'For a 50-person team, setup takes about 2 hours with your admin. We provide onboarding support and templates for your exact use case.', time: '2:14 PM' },
    { from: 'buyer', text: 'Can we start with a pilot group first?', time: '2:17 PM' },
  ]

  return (
    <div className="rounded-[16px] border border-black/[0.08] bg-white overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06] bg-[#FAFBFF]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-[6px] bg-[#6366F1]/15 flex items-center justify-center">
            <Brain size={12} className="text-[#6366F1]" />
          </div>
          <span className="text-xs font-semibold text-[#0D1117]">AI Q&amp;A Agent</span>
        </div>
        <span className="text-[10px] bg-[#22D3A0]/12 text-[#22D3A0] font-semibold px-2 py-0.5 rounded-[5px]">Active</span>
      </div>
      <div className="p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'buyer' ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-[80%] rounded-[10px] px-3 py-2.5 text-[11px] leading-relaxed ${
                msg.from === 'buyer' ? 'bg-[#F2F4FA] text-[#5A6480]' : 'bg-[#6366F1] text-white'
              }`}
            >
              {msg.text}
              <div className={`text-[9px] mt-1 opacity-60 ${msg.from === 'buyer' ? 'text-[#9BA3B8]' : 'text-white'}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="rounded-[10px] bg-[#F2F4FA] border border-black/[0.06] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link size={13} className="text-[#6366F1]" />
            <span className="text-[11px] font-medium text-[#0D1117]">Schedule a call →</span>
          </div>
          <span className="text-[9px] font-bold text-[#6366F1] bg-[#6366F1]/10 px-2 py-0.5 rounded-[4px]">CTA Block</span>
        </div>
      </div>
    </div>
  )
}

// ─── Feature definitions ──────────────────────────────────────────────────────
const features = [
  {
    icon: Zap,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.18)',
    eyebrow: 'Pod Builder',
    title: 'Build a personalized room in minutes — not hours.',
    description:
      'Drag-and-drop blocks, 6+ battle-tested templates, or let AI generate a full pod from your call transcript. No design skills needed.',
    tags: ['AI Pod Builder', 'Templates', 'Drag & Drop'],
    benefits: [
      'AI builds from your call transcript',
      'Dynamic tokens auto-fill buyer details',
      'Publish and share in one click',
    ],
    mockup: PodBuilderMockup,
    align: 'left',
  },
  {
    icon: BarChart3,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.18)',
    eyebrow: 'Buyer Intelligence',
    title: "Know exactly who's engaged — and who's about to go dark.",
    description:
      "Real-time intent scoring on every visit. See who viewed your room, what they re-read, and how long they stayed. No more guessing.",
    tags: ['Intent Score', 'Session Analytics', 'Visitor ID'],
    benefits: [
      'Intent score updated on every visit',
      'Block-level tracking shows what they re-read',
      'Get notified the instant they engage',
    ],
    mockup: AnalyticsMockup,
    align: 'right',
  },
  {
    icon: Handshake,
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.18)',
    eyebrow: 'Deal Closing',
    title: 'Give buyers everything they need to say yes.',
    description:
      'Embed an AI Q&A agent to handle objections 24/7. Add a CTA block to drive next steps. Track deal stage all the way to close.',
    tags: ['AI Agent', 'Deal Stage', 'CTA Blocks'],
    benefits: [
      'AI Q&A answers buyer questions instantly',
      'Embedded CTAs drive next steps in-room',
      'Deal stage tracking from first view to close',
    ],
    mockup: ClosingMockup,
    align: 'left',
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
          className="text-center mb-24"
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

        <div className="flex flex-col gap-32">
          {features.map((feature) => {
            const Icon = feature.icon
            const Mockup = feature.mockup
            const isRight = feature.align === 'right'

            return (
              <div
                key={feature.eyebrow}
                className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}
              >
                {/* Text side */}
                <motion.div
                  variants={isRight ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="flex-1 max-w-lg"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <div
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                      style={{ backgroundColor: feature.bg, border: `1px solid ${feature.border}` }}
                    >
                      <Icon size={18} style={{ color: feature.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: feature.color }}>
                      {feature.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D1117] leading-tight mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#5A6480] leading-relaxed mb-6">{feature.description}</p>

                  <ul className="space-y-2.5 mb-7">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#5A6480]">
                        <span
                          className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: feature.bg }}
                        >
                          <Check size={9} style={{ color: feature.color }} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

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

                {/* Mockup side */}
                <motion.div
                  variants={isRight ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="flex-1 w-full max-w-lg"
                >
                  <Mockup />
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
