'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Check } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const integrations = [
  { name: 'Salesforce', label: 'CRM', color: '#00A1E0', bg: 'rgba(0,161,224,0.08)', border: 'rgba(0,161,224,0.18)', initial: 'SF' },
  { name: 'HubSpot', label: 'CRM', color: '#FF7A59', bg: 'rgba(255,122,89,0.08)', border: 'rgba(255,122,89,0.18)', initial: 'HS' },
  { name: 'Gong', label: 'Revenue Intel', color: '#6366F1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.18)', initial: 'Go' },
  { name: 'DocuSign', label: 'E-Signature', color: '#FFCD00', bg: 'rgba(255,205,0,0.10)', border: 'rgba(255,205,0,0.25)', initial: 'DS', featured: true },
  { name: 'PandaDoc', label: 'E-Signature', color: '#4FCEA1', bg: 'rgba(79,206,161,0.08)', border: 'rgba(79,206,161,0.18)', initial: 'PD', featured: true },
  { name: 'Slack', label: 'Messaging', color: '#4A154B', bg: 'rgba(74,21,75,0.06)', border: 'rgba(74,21,75,0.12)', initial: 'Sl' },
  { name: 'Zoom', label: 'Video', color: '#2D8CFF', bg: 'rgba(45,140,255,0.08)', border: 'rgba(45,140,255,0.18)', initial: 'Zm', comingSoon: true },
  { name: 'Gmail', label: 'Email', color: '#EA4335', bg: 'rgba(234,67,53,0.08)', border: 'rgba(234,67,53,0.18)', initial: 'Gm', comingSoon: true },
  { name: 'LinkedIn', label: 'Social', color: '#0A66C2', bg: 'rgba(10,102,194,0.08)', border: 'rgba(10,102,194,0.18)', initial: 'Li', comingSoon: true },
  { name: 'Zapier', label: 'Automation', color: '#FF4A00', bg: 'rgba(255,74,0,0.08)', border: 'rgba(255,74,0,0.18)', initial: 'Zp', comingSoon: true },
]

/* ── Deal Flow Pipeline ── */
const dealFlowStages = [
  { label: 'Discovery', tool: 'Gong', color: '#6366F1', bg: 'rgba(99,102,241,0.08)' },
  { label: 'Pod Built', tool: 'Co-Lab AI', color: '#34D399', bg: 'rgba(52,211,153,0.08)' },
  { label: 'Engagement', tool: 'Co-Lab Analytics', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
  { label: 'Proposal', tool: 'Co-Lab + CRM', color: '#818CF8', bg: 'rgba(129,140,248,0.08)' },
  { label: 'Signature', tool: 'DocuSign', color: '#F43F5E', bg: 'rgba(244,63,94,0.08)' },
]

export default function Integrations() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F2F4FA]" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            Integrations
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117]"
          >
            Discovery to signature.{' '}
            <span className="text-gradient-ai">All inside Co-Lab.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#3D4663] max-w-2xl mx-auto">
            From the first Gong call to the final DocuSign — Co-Lab connects your entire deal workflow so nothing falls through the cracks.
          </motion.p>
        </motion.div>

        {/* ── Deal Flow Pipeline Visual ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="rounded-2xl bg-white border border-black/[0.06] p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={13} className="text-[#6366F1]" />
              <span className="text-xs font-semibold text-[#0D1117]">End-to-End Deal Flow</span>
              <span className="text-[10px] bg-[#34D399]/10 text-[#34D399] font-semibold px-2 py-0.5 rounded-full ml-auto">Entirely inside Co-Lab</span>
            </div>

            {/* Pipeline stages — grid on mobile, flex row on desktop */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-0">
              {dealFlowStages.map((stage, i) => (
                <div key={stage.label} className="flex flex-col sm:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-2 text-sm font-bold"
                      style={{ backgroundColor: stage.bg, color: stage.color, border: `1.5px solid ${stage.color}25` }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#0D1117]">{stage.label}</span>
                    <span className="text-[9px] sm:text-[10px] text-[#9BA3B8] mt-0.5">{stage.tool}</span>
                  </motion.div>
                  {i < dealFlowStages.length - 1 && (
                    <div className="hidden sm:block flex-shrink-0 mx-1">
                      <ArrowRight size={14} className="text-[#C5CBDA]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-1.5 rounded-full bg-[#F2F4FA] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-[#6366F1] via-[#34D399] via-[#F59E0B] to-[#F43F5E]"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Integration cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={scaleIn}
              className={`relative bg-white rounded-2xl border p-5 flex flex-col items-center text-center card-hover shadow-sm ${
                integration.featured
                  ? 'border-[#F43F5E]/20 ring-1 ring-[#F43F5E]/10'
                  : 'border-black/[0.06]'
              }`}
            >
              {integration.comingSoon && (
                <span className="absolute -top-2 -right-2 text-[9px] font-bold px-2 py-0.5 rounded-xl bg-[#F2F4FA] border border-black/[0.08] text-[#9BA3B8] shadow-sm">
                  Soon
                </span>
              )}
              {integration.featured && (
                <span className="absolute -top-2 -right-2 text-[9px] font-bold px-2 py-0.5 rounded-xl bg-[#F43F5E] text-white shadow-sm flex items-center gap-0.5">
                  <Check size={8} />
                  E-Sign
                </span>
              )}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-2.5 text-sm font-black"
                style={{ backgroundColor: integration.bg, border: `1.5px solid ${integration.border}`, color: integration.color }}
              >
                {integration.initial}
              </div>
              <div className="text-[13px] font-semibold text-[#0D1117]">{integration.name}</div>
              <div className="text-[10px] text-[#9BA3B8] mt-0.5">{integration.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center text-xs text-[#9BA3B8] mt-10 flex items-center justify-center gap-1.5"
        >
          <Sparkles size={11} className="text-[#6366F1]" />
          More AI-powered integrations on the way · Built on REST API + webhooks
        </motion.p>
      </div>
    </section>
  )
}
