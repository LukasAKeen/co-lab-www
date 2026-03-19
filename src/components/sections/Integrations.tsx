'use client'

import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const integrations = [
  { name: 'Salesforce', label: 'CRM', color: '#00A1E0', bg: 'rgba(0,161,224,0.08)', border: 'rgba(0,161,224,0.2)', initial: 'SF' },
  { name: 'HubSpot', label: 'CRM', color: '#FF7A59', bg: 'rgba(255,122,89,0.08)', border: 'rgba(255,122,89,0.2)', initial: 'HS' },
  { name: 'Gong', label: 'Revenue Intel', color: '#6366F1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)', initial: 'Go' },
  { name: 'Slack', label: 'Messaging', color: '#4A154B', bg: 'rgba(74,21,75,0.06)', border: 'rgba(74,21,75,0.15)', initial: 'Sl' },
  { name: 'Zoom', label: 'Video', color: '#2D8CFF', bg: 'rgba(45,140,255,0.08)', border: 'rgba(45,140,255,0.2)', initial: 'Zm', comingSoon: true },
  { name: 'Gmail', label: 'Email', color: '#EA4335', bg: 'rgba(234,67,53,0.08)', border: 'rgba(234,67,53,0.2)', initial: 'Gm', comingSoon: true },
  { name: 'LinkedIn', label: 'Social', color: '#0A66C2', bg: 'rgba(10,102,194,0.08)', border: 'rgba(10,102,194,0.2)', initial: 'Li', comingSoon: true },
  { name: 'Zapier', label: 'Automation', color: '#FF4A00', bg: 'rgba(255,74,0,0.08)', border: 'rgba(255,74,0,0.2)', initial: 'Zp', comingSoon: true },
]

export default function Integrations() {
  return (
    <section className="py-28 px-6 bg-[#F2F4FA] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto">
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
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117]"
          >
            Plugs into your existing stack.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#5A6480] max-w-xl mx-auto">
            Co-Lab syncs with the tools your team already uses — no new tab required.
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
              className="relative bg-white rounded-[16px] border border-black/[0.07] p-5 flex flex-col items-center text-center hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all"
            >
              {integration.comingSoon && (
                <span className="absolute -top-2 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-[5px] bg-[#F2F4FA] border border-black/[0.1] text-[#9BA3B8] shadow-sm">
                  Soon
                </span>
              )}
              {/* Logo circle */}
              <div
                className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-3 text-sm font-black"
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
          className="text-center text-xs text-[#C5CBDA] mt-10"
        >
          More integrations on the way · Built on a REST API and webhooks
        </motion.p>
      </div>
    </section>
  )
}
