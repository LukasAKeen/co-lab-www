'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  BarChart3,
  Flame,
  Check,
  Clock,
  ListChecks,
  CalendarCheck,
  Flag,
  ArrowRight,
  CircleCheckBig,
} from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

/* ── Feature 1 mockup: AI Pod Builder ── */
function PodBuilderMockup() {
  const templates = [
    { name: 'Enterprise Suite', tag: 'AI-Built', color: '#6366F1', bg: 'rgba(99,102,241,0.08)', active: true },
    { name: 'SaaS Renewal Pack', tag: 'Template', color: '#34D399', bg: 'rgba(52,211,153,0.08)' },
    { name: 'SMB Intro Pack', tag: 'Template', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
    { name: 'From Transcript', tag: 'AI', color: '#F43F5E', bg: 'rgba(244,63,94,0.08)' },
  ]
  const blocks = [
    { name: 'Hero Section', icon: '1' },
    { name: 'Welcome Video', icon: '2' },
    { name: 'ROI Calculator', icon: '3' },
    { name: 'Case Study', icon: '4' },
    { name: 'Next Steps', icon: '5' },
  ]

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.05] bg-[#FAFBFF]">
        <span className="text-xs font-semibold text-[#0D1117]">AI Pod Builder</span>
        <span className="text-[10px] bg-gradient-to-r from-[#6366F1] to-[#34D399] text-white font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Sparkles size={9} />
          AI Ready
        </span>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 border-b sm:border-b-0 sm:border-r border-black/[0.05] p-4">
          <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider mb-3">Templates</div>
          <div className="space-y-2">
            {templates.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between p-2.5 rounded-xl border transition-all"
                style={{
                  borderColor: t.active ? `${t.color}30` : 'transparent',
                  backgroundColor: t.active ? t.bg : 'transparent',
                }}
              >
                <span className="text-[11px] font-medium text-[#0D1117]">{t.name}</span>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-lg"
                  style={{ color: t.color, backgroundColor: t.bg }}
                >
                  {t.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:w-1/2 p-4">
          <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider mb-3">AI-Suggested Blocks</div>
          <div className="space-y-2">
            {blocks.map((b) => (
              <div
                key={b.name}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F2F4FA] border border-black/[0.04]"
              >
                <div className="w-5 h-5 rounded-lg bg-[#6366F1]/12 flex items-center justify-center text-[9px] font-bold text-[#6366F1]">
                  {b.icon}
                </div>
                <span className="text-[11px] font-medium text-[#3D4663]">{b.name}</span>
                <Sparkles size={9} className="text-[#34D399] ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Feature 2 mockup: Buyer Intelligence ── */
function AnalyticsMockup() {
  const visitors = [
    { name: 'Sarah M.', company: 'Meridian Corp', time: '14m 22s', intent: 'HIGH', color: '#34D399', initials: 'SM' },
    { name: 'David K.', company: 'Nexus Capital', time: '7m 04s', intent: 'HIGH', color: '#34D399', initials: 'DK' },
    { name: 'Priya S.', company: 'CloudOps Inc', time: '3m 11s', intent: 'MED', color: '#F59E0B', initials: 'PS' },
  ]

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.05] bg-[#FAFBFF]">
        <span className="text-xs font-semibold text-[#0D1117]">Meridian Q2 Deal</span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
          </span>
          <span className="text-[10px] font-semibold text-[#34D399]">Live</span>
        </div>
      </div>
      <div className="px-5 py-4 border-b border-black/[0.04]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-[#9BA3B8] uppercase tracking-wider">Intent Score</span>
          <div className="flex items-center gap-1">
            <Flame size={12} className="text-[#34D399]" />
            <span className="text-lg font-black text-[#34D399]">87</span>
            <span className="text-xs text-[#9BA3B8]">/ 100</span>
          </div>
        </div>
        <div className="h-2.5 rounded-full bg-[#F2F4FA] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '87%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-[#34D399] to-[#059669]"
          />
        </div>
      </div>
      <div className="px-5 py-3">
        <div className="text-[10px] font-semibold text-[#9BA3B8] uppercase tracking-wider mb-2">Recent Visitors</div>
        <div className="space-y-2">
          {visitors.map((v) => (
            <div key={v.name} className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0"
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
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-lg"
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

/* ── Feature 3 mockup: AI Mutual Action Plans ── */
function MAPMockup() {
  const milestones = [
    { label: 'Discovery Call Complete', date: 'Mar 10', done: true, owner: 'AE', color: '#34D399' },
    { label: 'Technical Requirements Shared', date: 'Mar 17', done: true, owner: 'SE', color: '#34D399' },
    { label: 'Security Review Kickoff', date: 'Mar 24', done: true, owner: 'IT', color: '#34D399' },
    { label: 'Proposal Delivered', date: 'Apr 2', done: false, owner: 'AE', color: '#6366F1' },
    { label: 'Legal / Redline', date: 'Apr 14', done: false, owner: 'Legal', color: '#F59E0B' },
    { label: 'Contract Signed', date: 'Apr 28', done: false, owner: 'VP', color: '#F43F5E' },
  ]

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.05] bg-[#FAFBFF]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#F43F5E]/12 flex items-center justify-center">
            <ListChecks size={12} className="text-[#F43F5E]" />
          </div>
          <span className="text-xs font-semibold text-[#0D1117]">AI Mutual Action Plan</span>
        </div>
        <span className="text-[10px] bg-gradient-to-r from-[#F43F5E] to-[#F59E0B] text-white font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Sparkles size={9} />
          Auto-Generated
        </span>
      </div>

      {/* AI source note */}
      <div className="px-5 py-2.5 bg-[#F43F5E]/[0.03] border-b border-[#F43F5E]/10 flex items-center gap-2">
        <Sparkles size={10} className="text-[#F43F5E]" />
        <span className="text-[10px] text-[#F43F5E] font-medium">
          Generated from transcript: &quot;Buyer timeline is end of Q2&quot;
        </span>
      </div>

      {/* Timeline */}
      <div className="p-5">
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div key={m.label} className="flex items-start gap-3 relative">
              {/* Vertical connector */}
              {i < milestones.length - 1 && (
                <div
                  className="absolute left-[11px] top-[24px] w-[2px] h-[calc(100%)] rounded-full"
                  style={{ backgroundColor: m.done ? '#34D39930' : '#E3E6F0' }}
                />
              )}
              {/* Status dot */}
              <div className="relative z-10 flex-shrink-0 mt-0.5">
                {m.done ? (
                  <div className="w-[22px] h-[22px] rounded-full bg-[#34D399]/15 flex items-center justify-center">
                    <CircleCheckBig size={13} className="text-[#34D399]" />
                  </div>
                ) : (
                  <div
                    className="w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: `${m.color}40` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `${m.color}60` }} />
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[12px] font-semibold ${m.done ? 'text-[#9BA3B8] line-through' : 'text-[#0D1117]'}`}>
                    {m.label}
                  </span>
                  <span className="text-[10px] text-[#9BA3B8] flex items-center gap-1">
                    <CalendarCheck size={9} />
                    {m.date}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md"
                    style={{ color: m.color, backgroundColor: `${m.color}12` }}
                  >
                    {m.owner}
                  </span>
                  {!m.done && i === 3 && (
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md bg-[#6366F1]/10 text-[#6366F1] flex items-center gap-0.5">
                      <Flag size={8} /> Up next
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-2 pt-3 border-t border-black/[0.05]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-[#9BA3B8]">Deal Progress</span>
            <span className="text-[10px] font-bold text-[#34D399]">50%</span>
          </div>
          <div className="h-2 rounded-full bg-[#F2F4FA] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[#34D399] to-[#6366F1]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Feature data ── */
const features = [
  {
    icon: Sparkles,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.18)',
    eyebrow: 'AI Pod Builder',
    title: 'Paste a transcript. Get a deal room.',
    description:
      'AI analyzes your sales call, selects the perfect template, and assembles a complete pod with the exact blocks, assets, and decks your buyer needs. Ready to share in seconds.',
    tags: ['AI Generation', 'Smart Templates', 'One-Click Publish'],
    benefits: [
      'AI builds from your call transcript',
      'Dynamic tokens auto-fill buyer details',
      'Blocks ranked by AI confidence score',
    ],
    mockup: PodBuilderMockup,
    align: 'left' as const,
  },
  {
    icon: BarChart3,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.18)',
    eyebrow: 'Buyer Intelligence',
    title: "Know who's engaged — before they tell you.",
    description:
      'Real-time intent scoring on every visit. See who viewed your room, which blocks they re-read, and how long they stayed. AI surfaces the signals — you close the deal.',
    tags: ['Intent Score', 'Session Analytics', 'AI Signals'],
    benefits: [
      'Intent score updated in real time',
      'Block-level heatmaps show what resonates',
      'AI alerts when deals are heating up',
    ],
    mockup: AnalyticsMockup,
    align: 'right' as const,
  },
  {
    icon: ListChecks,
    color: '#F43F5E',
    bg: 'rgba(244,63,94,0.08)',
    border: 'rgba(244,63,94,0.18)',
    eyebrow: 'AI Mutual Action Plans',
    title: 'AI reads your call. Builds the timeline.',
    description:
      'Forget manual checklists. Co-Lab\'s AI extracts buyer timelines, stakeholder requirements, and key milestones from your call transcript — then auto-generates a shared Mutual Action Plan that keeps both sides accountable.',
    tags: ['Auto-Generated MAPs', 'Timeline Extraction', 'Shared Milestones'],
    benefits: [
      'AI detects "end of Q2" and builds the milestone plan',
      'Stakeholders, owners & dates assigned automatically',
      'Buyer-facing — both sides track progress in real time',
    ],
    mockup: MAPMockup,
    align: 'left' as const,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-24"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            AI-Powered Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117]"
          >
            Everything AI can do{' '}
            <span className="text-gradient-ai">for your deals.</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {features.map((feature) => {
            const Icon = feature.icon
            const Mockup = feature.mockup
            const isRight = feature.align === 'right'

            return (
              <div
                key={feature.eyebrow}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
              >
                {/* Text */}
                <motion.div
                  variants={isRight ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className={isRight ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: feature.bg, border: `1.5px solid ${feature.border}` }}
                    >
                      <Icon size={20} style={{ color: feature.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: feature.color }}>
                      {feature.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D1117] leading-tight mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#3D4663] leading-relaxed mb-6">{feature.description}</p>

                  <ul className="space-y-3 mb-7">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#3D4663]">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: feature.bg }}
                        >
                          <Check size={10} style={{ color: feature.color }} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-xl font-medium"
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

                {/* Mockup */}
                <motion.div
                  variants={isRight ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className={isRight ? 'lg:order-1' : ''}
                >
                  <Mockup />
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.co-lab.com/signup"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] active:scale-[0.97]"
            >
              <span className="absolute inset-0 rounded-xl shimmer pointer-events-none" />
              Start Free
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
