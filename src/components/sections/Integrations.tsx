'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const integrations = [
  { name: 'Salesforce', label: 'CRM', color: '#00A1E0', bg: 'rgba(0,161,224,0.08)', border: 'rgba(0,161,224,0.18)', initial: 'SF' },
  { name: 'HubSpot', label: 'CRM', color: '#FF7A59', bg: 'rgba(255,122,89,0.08)', border: 'rgba(255,122,89,0.18)', initial: 'HS' },
  { name: 'Gong', label: 'Revenue Intel', color: '#6366F1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.18)', initial: 'Go' },
  { name: 'Slack', label: 'Messaging', color: '#4A154B', bg: 'rgba(74,21,75,0.06)', border: 'rgba(74,21,75,0.12)', initial: 'Sl' },
  { name: 'Zoom', label: 'Video', color: '#2D8CFF', bg: 'rgba(45,140,255,0.08)', border: 'rgba(45,140,255,0.18)', initial: 'Zm', comingSoon: true },
  { name: 'Gmail', label: 'Email', color: '#EA4335', bg: 'rgba(234,67,53,0.08)', border: 'rgba(234,67,53,0.18)', initial: 'Gm', comingSoon: true },
  { name: 'LinkedIn', label: 'Social', color: '#0A66C2', bg: 'rgba(10,102,194,0.08)', border: 'rgba(10,102,194,0.18)', initial: 'Li', comingSoon: true },
  { name: 'Zapier', label: 'Automation', color: '#FF4A00', bg: 'rgba(255,74,0,0.08)', border: 'rgba(255,74,0,0.18)', initial: 'Zp', comingSoon: true },
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
            Plugs into your stack.{' '}
            <span className="text-gradient-ai">Powered by AI.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#3D4663] max-w-xl mx-auto">
            Co-Lab syncs with the tools your team already uses — AI pulls context from your calls and CRM automatically.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={scaleIn}
              className="relative bg-white rounded-2xl border border-black/[0.06] p-5 flex flex-col items-center text-center card-hover shadow-sm"
            >
              {integration.comingSoon && (
                <span className="absolute -top-2 -right-2 text-[9px] font-bold px-2 py-0.5 rounded-xl bg-[#F2F4FA] border border-black/[0.08] text-[#9BA3B8] shadow-sm">
                  Soon
                </span>
              )}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 text-sm font-black"
                style={{ backgroundColor: integration.bg, border: `1.5px solid ${integration.border}`, color: integration.color }}
              >
                {integration.initial}
              </div>
              <div className="text-sm font-semibold text-[#0D1117]">{integration.name}</div>
              <div className="text-[11px] text-[#9BA3B8] mt-0.5">{integration.label}</div>
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
