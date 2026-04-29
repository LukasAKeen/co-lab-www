'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  BarChart3,
  Flame,
  Clock,
  ListChecks,
  CalendarCheck,
  Flag,
  CircleCheckBig,
} from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/motion'

/* ── Feature 1 mockup: AI Pod Builder ── */
function PodBuilderMockup() {
  const templates = [
    { name: 'Enterprise Suite', tag: 'AI-Built', active: true },
    { name: 'SaaS Renewal Pack', tag: 'Template' },
    { name: 'SMB Intro Pack', tag: 'Template' },
    { name: 'From Transcript', tag: 'AI' },
  ]
  const blocks = [
    { name: 'Hero Section', icon: '1', confidence: '98%' },
    { name: 'Welcome Video', icon: '2', confidence: '95%' },
    { name: 'ROI Calculator', icon: '3', confidence: '94%' },
    { name: 'Case Study', icon: '4' },
    { name: 'Next Steps', icon: '5' },
  ]

  return (
    <div className="rounded-2xl border border-[#E7E7EE] bg-white overflow-hidden shadow-[0_16px_48px_-16px_rgba(15,18,30,0.10)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E7E7EE] bg-[#FBFBFD]">
        <span className="text-[12px] font-semibold text-[#0B0E1A]">Pod Builder</span>
        <span className="eyebrow text-[10px] text-[#5B5BD6] bg-[#F2F2FB] px-2 py-0.5 rounded flex items-center gap-1">
          <Sparkles size={9} />
          AI Assist
        </span>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 border-b sm:border-b-0 sm:border-r border-[#E7E7EE] p-4">
          <div className="eyebrow text-[10px] text-[#A4A8BC] mb-3">Templates</div>
          <div className="space-y-2">
            {templates.map((t) => (
              <div
                key={t.name}
                className={`flex items-center justify-between p-2.5 rounded-md border transition-all ${
                  t.active
                    ? 'border-[#C9C9EE] bg-[#F2F2FB]'
                    : 'border-transparent bg-transparent'
                }`}
              >
                <span className="text-[11.5px] font-medium text-[#0B0E1A]">{t.name}</span>
                <span className="eyebrow text-[9px] text-[#5B5BD6] bg-[#F2F2FB] px-1.5 py-0.5 rounded">
                  {t.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:w-1/2 p-4">
          <div className="eyebrow text-[10px] text-[#A4A8BC] mb-3">AI-Suggested Blocks</div>
          <div className="space-y-2">
            {blocks.map((b) => (
              <div
                key={b.name}
                className="flex items-center gap-2 p-2.5 rounded-md bg-[#FBFBFD] border border-[#E7E7EE]"
              >
                <div className="w-5 h-5 rounded bg-[#5B5BD6] text-white flex items-center justify-center text-[10px] font-semibold">
                  {b.icon}
                </div>
                <span className="text-[11.5px] font-medium text-[#1F2333]">{b.name}</span>
                {b.confidence && (
                  <span className="ml-auto eyebrow text-[9px] text-[#5B5BD6]">
                    {b.confidence}
                  </span>
                )}
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
    { name: 'Sarah M.', company: 'Meridian Corp', time: '14m 22s', intent: 'HIGH', initials: 'SM' },
    { name: 'David K.', company: 'Nexus Capital', time: '7m 04s', intent: 'HIGH', initials: 'DK' },
    { name: 'Priya S.', company: 'CloudOps Inc', time: '3m 11s', intent: 'MED', initials: 'PS' },
  ]

  return (
    <div className="rounded-2xl border border-[#E7E7EE] bg-white overflow-hidden shadow-[0_16px_48px_-16px_rgba(15,18,30,0.10)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E7E7EE] bg-[#FBFBFD]">
        <span className="text-[12px] font-semibold text-[#0B0E1A]">Meridian Q2 Deal</span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D9A6A] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3D9A6A]" />
          </span>
          <span className="eyebrow text-[9.5px] text-[#3D9A6A]">Live</span>
        </div>
      </div>

      <div className="px-5 py-4 border-b border-[#E7E7EE]">
        <div className="flex items-center justify-between mb-2">
          <span className="eyebrow text-[10px] text-[#A4A8BC]">Intent Score</span>
          <div className="flex items-baseline gap-1.5">
            <Flame size={12} className="text-[#5B5BD6] self-center" />
            <span className="display text-[28px] text-gradient tabular-nums">87</span>
            <span className="text-[11px] text-[#A4A8BC]">/ 100</span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-[#EFEFF4] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '87%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-[#5B5BD6] to-[#2BB5D6]"
          />
        </div>
      </div>

      <div className="px-5 py-3">
        <div className="eyebrow text-[10px] text-[#A4A8BC] mb-2">Recent Visitors</div>
        <div>
          {visitors.map((v, i) => (
            <div
              key={v.name}
              className={`flex items-center gap-2.5 py-2 ${
                i < visitors.length - 1 ? 'border-b border-[#E7E7EE]' : ''
              }`}
            >
              <div className="w-7 h-7 rounded-md bg-[#F2F2FB] text-[#5B5BD6] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                {v.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-semibold text-[#0B0E1A] truncate">{v.name}</div>
                <div className="text-[10.5px] text-[#71768B] truncate">{v.company}</div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-[10px] text-[#71768B] flex items-center gap-0.5 font-mono">
                  <Clock size={9} /> {v.time}
                </span>
                <span
                  className={`eyebrow text-[9px] px-1.5 py-0.5 rounded ${
                    v.intent === 'HIGH'
                      ? 'text-[#3D9A6A] bg-[#E5F2EB]'
                      : 'text-[#B88518] bg-[#F7EFD9]'
                  }`}
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
    { label: 'Discovery Call Complete', date: 'Mar 10', done: true, owner: 'AE' },
    { label: 'Technical Requirements Shared', date: 'Mar 17', done: true, owner: 'SE' },
    { label: 'Security Review Kickoff', date: 'Mar 24', done: true, owner: 'IT' },
    { label: 'Proposal Delivered', date: 'Apr 2', done: false, owner: 'AE', upNext: true },
    { label: 'Legal / Redline', date: 'Apr 14', done: false, owner: 'Legal' },
    { label: 'Contract Signed', date: 'Apr 28', done: false, owner: 'VP' },
  ]

  return (
    <div className="rounded-2xl border border-[#E7E7EE] bg-white overflow-hidden shadow-[0_16px_48px_-16px_rgba(15,18,30,0.10)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E7E7EE] bg-[#FBFBFD]">
        <div className="flex items-center gap-2">
          <ListChecks size={13} className="text-[#5B5BD6]" />
          <span className="text-[12px] font-semibold text-[#0B0E1A]">Mutual Action Plan</span>
        </div>
        <span className="eyebrow text-[10px] text-[#5B5BD6] bg-[#F2F2FB] px-2 py-0.5 rounded flex items-center gap-1">
          <Sparkles size={9} />
          AI Drafted
        </span>
      </div>

      <div className="px-5 py-2.5 bg-[#F2F2FB] border-b border-[#E6E6F7] flex items-center gap-2">
        <Sparkles size={10} className="text-[#5B5BD6]" />
        <span className="text-[10.5px] text-[#5B5BD6] font-medium">
          Drafted from call: &quot;Buyer timeline is end of Q2&quot;
        </span>
      </div>

      <div className="p-5">
        <div>
          {milestones.map((m, i) => (
            <div key={m.label} className="flex items-start gap-3 relative">
              {i < milestones.length - 1 && (
                <div
                  className="absolute left-[10px] top-[24px] w-px h-[calc(100%)]"
                  style={{ backgroundColor: m.done ? '#3D9A6A33' : '#E7E7EE' }}
                />
              )}
              <div className="relative z-10 flex-shrink-0 mt-0.5">
                {m.done ? (
                  <div className="w-[20px] h-[20px] rounded-full bg-[#E5F2EB] flex items-center justify-center">
                    <CircleCheckBig size={12} className="text-[#3D9A6A]" />
                  </div>
                ) : (
                  <div className="w-[20px] h-[20px] rounded-full border-2 border-[#D9D9E2] bg-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A4A8BC]" />
                  </div>
                )}
              </div>
              <div className="flex-1 pb-3.5">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[12px] font-semibold ${
                      m.done ? 'text-[#A4A8BC] line-through' : 'text-[#0B0E1A]'
                    }`}
                  >
                    {m.label}
                  </span>
                  <span className="text-[10px] text-[#71768B] flex items-center gap-1 font-mono">
                    <CalendarCheck size={9} />
                    {m.date}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="eyebrow text-[9px] text-[#71768B] bg-[#F6F6FA] px-1.5 py-0.5 rounded">
                    {m.owner}
                  </span>
                  {m.upNext && (
                    <span className="eyebrow text-[9px] text-[#5B5BD6] bg-[#F2F2FB] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <Flag size={8} /> Up next
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 pt-3 border-t border-[#E7E7EE]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="eyebrow text-[10px] text-[#A4A8BC]">Deal Progress</span>
            <span className="eyebrow text-[10px] text-[#3D9A6A]">50%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#EFEFF4] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[#5B5BD6] to-[#2BB5D6]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: Sparkles,
    eyebrow: 'Pod Builder',
    title: 'Build a buyer-ready room in minutes.',
    description:
      'A drag-and-drop editor with everything a modern proposal needs — hero, video, pricing, case studies, mutual action plans. Start from a template, or let the AI coach draft one from a call transcript.',
    tags: ['Drag-and-Drop Editor', 'Smart Templates', 'AI Draft Assist'],
    benefits: [
      'Reusable blocks, templates, and brand themes',
      'Dynamic tokens auto-fill buyer details',
      'Optional AI draft from a call transcript',
    ],
    mockup: PodBuilderMockup,
    align: 'left' as const,
  },
  {
    icon: BarChart3,
    eyebrow: 'Buyer Intelligence',
    title: "Know who's engaged — before they tell you.",
    description:
      'Real-time intent scoring on every visit. See who viewed your room, which blocks they re-read, and how long they stayed. Your AI deal coach surfaces the signals — you decide when to move.',
    tags: ['Intent Score', 'Session Analytics', 'Deal Coach Alerts'],
    benefits: [
      'Intent score updated in real time',
      'Block-level heatmaps show what resonates',
      'AI coach alerts when deals heat up or stall',
    ],
    mockup: AnalyticsMockup,
    align: 'right' as const,
  },
  {
    icon: ListChecks,
    eyebrow: 'Mutual Action Plans',
    title: 'Keep both sides accountable to the timeline.',
    description:
      'A shared Mutual Action Plan lives inside every room — stakeholders, owners, dates, dependencies. The AI coach can draft one from your call transcript so you start with a complete timeline, not a blank checklist.',
    tags: ['Shared MAPs', 'Stakeholder Tracking', 'AI Draft Assist'],
    benefits: [
      'Buyer-facing — both sides track progress in real time',
      'Stakeholders, owners & dates in one view',
      'AI coach drafts the first timeline from your call',
    ],
    mockup: MAPMockup,
    align: 'left' as const,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-[760px] mx-auto mb-20"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[#5B5BD6] mb-3">
            The platform
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="display text-3xl sm:text-4xl md:text-[44px] text-[#0B0E1A]"
          >
            Everything a modern sales room <span className="text-gradient">should do.</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const Mockup = feature.mockup
            const isRight = feature.align === 'right'

            return (
              <div
                key={feature.eyebrow}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 ${
                  idx > 0 ? 'border-t border-[#E7E7EE]' : ''
                }`}
              >
                {/* Text */}
                <motion.div
                  variants={isRight ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className={isRight ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#F2F2FB] border border-[#E6E6F7] flex items-center justify-center">
                      <Icon size={17} className="text-[#5B5BD6]" />
                    </div>
                    <span className="eyebrow text-[#5B5BD6]">{feature.eyebrow}</span>
                  </div>

                  <h3 className="display text-2xl md:text-[38px] text-[#0B0E1A] mb-4 leading-[1.1]">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-[#3D4256] leading-[1.55] mb-6">
                    {feature.description}
                  </p>

                  <ul className="border-t border-[#E7E7EE] mb-6">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 py-2.5 text-[14.5px] text-[#1F2333] border-b border-[#E7E7EE]"
                      >
                        <span className="text-[#5B5BD6] font-semibold flex-shrink-0">→</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11.5px] px-2.5 py-1 rounded-full font-medium text-[#5B5BD6] bg-[#F2F2FB]"
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
      </div>
    </section>
  )
}
