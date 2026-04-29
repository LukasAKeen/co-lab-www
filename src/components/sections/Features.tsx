'use client'

import { motion } from 'framer-motion'
import { Sparkles, BarChart3, ListChecks } from 'lucide-react'
import { slideInLeft, slideInRight, viewportConfig } from '@/lib/motion'
import SectionHeader from '@/components/SectionHeader'

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

/* ── Feature 2 mockup: Buyer Intelligence (intent line chart with event markers) ── */
function AnalyticsMockup() {
  const events = [
    { x: 230, label: 'CALL' },
    { x: 380, label: 'DOC SHARE' },
    { x: 530, label: 'VP JOIN' },
    { x: 630, label: 'LEGAL' },
  ]

  return (
    <div className="rounded-2xl border border-[#E7E7EE] bg-white overflow-hidden shadow-[0_16px_48px_-16px_rgba(15,18,30,0.10)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E7E7EE] bg-[#FBFBFD]">
        <div>
          <div className="eyebrow text-[9.5px] text-[#5B5BD6]">Intent · Meridian Corp</div>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="display text-[26px] text-[#0B0E1A] tabular-nums leading-none">
              87
              <span className="text-[14px] text-[#A4A8BC] font-mono ml-0.5">/100</span>
            </span>
            <span className="text-[11px] font-mono font-semibold text-[#22B574]">+12 last 7d</span>
          </div>
        </div>
        <div className="flex gap-1.5 font-mono text-[10px]">
          {['7D', '14D', '30D', '90D'].map((t, i) => (
            <span
              key={t}
              className={`px-2 py-1 rounded font-semibold tracking-wider ${
                i === 1
                  ? 'bg-[#5B5BD6] text-white'
                  : 'border border-[#E7E7EE] text-[#71768B]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 pb-3">
        <svg viewBox="0 0 700 220" className="w-full h-[200px] block">
          <defs>
            <linearGradient id="intent-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#5B5BD6" stopOpacity="0.25" />
              <stop offset="1" stopColor="#5B5BD6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* gridlines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="30"
              y1={i * 44 + 14}
              x2="690"
              y2={i * 44 + 14}
              stroke="#E7E7EE"
              strokeDasharray="2 4"
            />
          ))}
          {/* y labels */}
          {[100, 75, 50, 25, 0].map((v, i) => (
            <text
              key={v}
              x="0"
              y={i * 44 + 18}
              fill="#A4A8BC"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
            >
              {v}
            </text>
          ))}
          {/* fill */}
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            d="M30 174 L80 172 L130 164 L180 154 L230 144 L280 134 L330 120 L380 114 L430 94 L480 84 L530 64 L580 52 L630 36 L680 30 L680 200 L30 200 Z"
            fill="url(#intent-fill)"
          />
          {/* main intent line */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            d="M30 174 L80 172 L130 164 L180 154 L230 144 L280 134 L330 120 L380 114 L430 94 L480 84 L530 64 L580 52 L630 36 L680 30"
            stroke="#5B5BD6"
            strokeWidth="2.5"
            fill="none"
          />
          {/* benchmark dashed */}
          <path
            d="M30 154 L80 152 L130 149 L180 146 L230 144 L280 142 L330 138 L380 134 L430 130 L480 126 L530 122 L580 118 L630 116 L680 114"
            stroke="#A4A8BC"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.7"
          />
          {/* event markers */}
          {events.map((e, i) => (
            <g key={i}>
              <line
                x1={e.x}
                y1="0"
                x2={e.x}
                y2="200"
                stroke="#5B5BD6"
                strokeOpacity="0.2"
                strokeDasharray="2 3"
              />
              <rect x={e.x - 32} y="0" width="64" height="14" fill="#5B5BD6" rx="3" />
              <text
                x={e.x}
                y="10"
                fill="#fff"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                fontWeight="700"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                {e.label}
              </text>
            </g>
          ))}
        </svg>

        <div className="flex gap-5 mt-3 font-mono text-[10px] text-[#71768B] tracking-wider">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-0.5 bg-[#5B5BD6]" />
            Meridian intent
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="w-3.5 h-0"
              style={{ borderTop: '1.5px dashed #A4A8BC' }}
            />
            Benchmark · similar deals
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Feature 3 mockup: AI Mutual Action Plans (Gantt timeline) ── */
function MAPMockup() {
  const steps: Array<{
    s: string
    o: string
    d: string
    start: number
    end: number
    status: 'done' | 'progress' | 'risk' | 'pending'
  }> = [
    { s: 'Discovery call', o: 'Alex · CoLab', d: 'Apr 8', start: 0, end: 8, status: 'done' },
    { s: 'Technical eval', o: 'Sarah · Meridian', d: 'Apr 14', start: 6, end: 22, status: 'done' },
    { s: 'Security review', o: 'IT · Meridian', d: 'Apr 18', start: 16, end: 34, status: 'done' },
    { s: 'Stakeholder alignment', o: 'Sarah + VP Ops', d: 'Apr 21', start: 28, end: 44, status: 'done' },
    { s: 'ROI validation', o: 'Finance', d: 'Apr 24', start: 38, end: 58, status: 'progress' },
    { s: 'Legal · MSA review', o: 'Legal', d: 'Apr 26', start: 50, end: 72, status: 'progress' },
    { s: 'Procurement signoff', o: 'Procurement', d: 'Apr 28', start: 62, end: 84, status: 'risk' },
    { s: 'Mutual signature', o: 'Both teams', d: 'Apr 30', start: 78, end: 94, status: 'pending' },
  ]

  const colorFor = (status: typeof steps[number]['status']) =>
    status === 'done'
      ? '#22B574'
      : status === 'progress'
      ? '#5B5BD6'
      : status === 'risk'
      ? '#E8A02C'
      : '#A4A8BC'

  const labelFor = (status: typeof steps[number]['status']) =>
    status === 'done'
      ? 'DONE'
      : status === 'progress'
      ? 'ACTIVE'
      : status === 'risk'
      ? 'AT RISK'
      : 'PENDING'

  return (
    <div className="rounded-2xl border border-[#E7E7EE] bg-white overflow-hidden shadow-[0_16px_48px_-16px_rgba(15,18,30,0.10)]">
      <div className="flex items-center gap-3 px-5 py-3 border-b border-[#E7E7EE] bg-[#FBFBFD]">
        <ListChecks size={13} className="text-[#5B5BD6]" />
        <div>
          <div className="eyebrow text-[9.5px] text-[#5B5BD6]">MAP · Meridian × Co-Lab</div>
          <div className="text-[12.5px] font-semibold text-[#0B0E1A] tracking-tight">
            Q2 Partnership · Close target Apr 30
          </div>
        </div>
        <div className="ml-auto flex gap-4 items-end">
          {[
            { l: 'STEPS', v: '12' },
            { l: 'DONE', v: '4', color: '#22B574' },
            { l: 'AT RISK', v: '1', color: '#E8A02C' },
            { l: 'DAYS', v: '14' },
          ].map((m) => (
            <div key={m.l} className="text-right">
              <div
                className="display text-[16px] tabular-nums leading-none"
                style={{ color: m.color || '#0B0E1A' }}
              >
                {m.v}
              </div>
              <div className="eyebrow text-[8.5px] text-[#71768B] mt-1">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-2.5 bg-[#F2F2FB] border-b border-[#E6E6F7] flex items-center gap-2">
        <Sparkles size={10} className="text-[#5B5BD6]" />
        <span className="text-[10.5px] text-[#5B5BD6] font-medium">
          Drafted from call: &quot;Buyer timeline is end of Q2&quot;
        </span>
      </div>

      <div className="px-5 py-3">
        <div className="grid grid-cols-[1.4fr_80px_60px_1fr_70px] gap-3 pb-2 border-b border-[#E7E7EE] eyebrow text-[9px] text-[#A4A8BC]">
          <div>STEP</div>
          <div>OWNER</div>
          <div>DUE</div>
          <div>TIMELINE</div>
          <div className="text-right">STATUS</div>
        </div>
        {steps.map((step, i) => {
          const col = colorFor(step.status)
          const label = labelFor(step.status)
          return (
            <div
              key={step.s}
              className={`grid grid-cols-[1.4fr_80px_60px_1fr_70px] gap-3 py-2.5 items-center text-[12px] ${
                i < steps.length - 1 ? 'border-b border-[#E7E7EE]' : ''
              }`}
            >
              <div className="font-medium text-[#0B0E1A] truncate">{step.s}</div>
              <div className="text-[#71768B] text-[11px] truncate">{step.o}</div>
              <div className="font-mono text-[10.5px] text-[#71768B]">{step.d}</div>
              <div className="h-3.5 bg-[#F4F4F8] rounded relative overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 bottom-0 rounded origin-left"
                  style={{
                    left: `${step.start}%`,
                    width: `${step.end - step.start}%`,
                    background:
                      step.status === 'progress'
                        ? `repeating-linear-gradient(45deg, ${col}, ${col} 6px, ${col}aa 6px, ${col}aa 12px)`
                        : col,
                  }}
                />
              </div>
              <div
                className="text-right eyebrow text-[9px] tabular-nums"
                style={{ color: col }}
              >
                {label}
              </div>
            </div>
          )
        })}
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
        <SectionHeader
          anchor="04"
          kicker="The platform"
          title={
            <>
              Everything a modern
              <br />
              sales room should do.
            </>
          }
          subhead="Three pillars work together: build the room from a call, watch buyers move through it in real time, and keep both sides accountable to a shared timeline."
        />

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
