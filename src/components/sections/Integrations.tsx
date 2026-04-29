'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'
import SectionHeader from '@/components/SectionHeader'

const integrations = [
  { name: 'Salesforce', label: 'CRM', initial: 'SF' },
  { name: 'HubSpot', label: 'CRM', initial: 'HS' },
  { name: 'Gong', label: 'Revenue Intel', initial: 'Go' },
  { name: 'DocuSign', label: 'E-Signature', initial: 'DS' },
  { name: 'PandaDoc', label: 'E-Signature', initial: 'PD' },
  { name: 'Slack', label: 'Messaging', initial: 'Sl' },
  { name: 'Zoom', label: 'Video', initial: 'Zm' },
  { name: 'Gmail', label: 'Email', initial: 'Gm' },
  { name: 'LinkedIn', label: 'Social', initial: 'Li' },
  { name: 'Zapier', label: 'Automation', initial: 'Zp' },
]

const dealFlowStages = [
  { label: 'Discovery', tool: 'Call transcript' },
  { label: 'Pod Built', tool: 'Co-Lab AI' },
  { label: 'Engagement', tool: 'Co-Lab Analytics' },
  { label: 'Proposal', tool: 'Co-Lab + CRM' },
  { label: 'Signature', tool: 'DocuSign' },
]

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="py-20 md:py-28 px-4 sm:px-6 bg-[#F6F6FA] border-y border-[#E7E7EE]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          anchor="07"
          kicker="Integrations"
          title={
            <>
              Discovery to signature.
              <br />
              All inside Co-Lab.
            </>
          }
          subhead="From your first call transcript to the final signature — Co-Lab connects your entire deal workflow so nothing falls through the cracks."
        />

        {/* Deal flow pipeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto mb-14"
        >
          <div className="rounded-2xl bg-white border border-[#E7E7EE] p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="eyebrow text-[#5B5BD6]">End-to-End Deal Flow</span>
              <span className="ml-auto eyebrow text-[10px] text-[#3D9A6A] bg-[#E5F2EB] px-2 py-0.5 rounded">
                Inside Co-Lab
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-0">
              {dealFlowStages.map((stage, i) => (
                <div key={stage.label} className="flex flex-col sm:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#F2F2FB] border border-[#E6E6F7] text-[#5B5BD6] flex items-center justify-center mb-2 text-[13px] font-semibold tabular-nums">
                      {i + 1}
                    </div>
                    <span className="text-[11.5px] font-semibold text-[#0B0E1A]">
                      {stage.label}
                    </span>
                    <span className="text-[10px] text-[#71768B] mt-0.5 font-mono">
                      {stage.tool}
                    </span>
                  </motion.div>
                  {i < dealFlowStages.length - 1 && (
                    <div className="hidden sm:block flex-shrink-0 mx-1">
                      <ArrowRight size={13} className="text-[#A4A8BC]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 h-1 rounded-full bg-[#EFEFF4] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-[#5B5BD6] to-[#2BB5D6]"
              />
            </div>
          </div>
        </motion.div>

        {/* Integration cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={scaleIn}
              className="relative bg-white rounded-xl border border-[#E7E7EE] p-5 flex flex-col items-center text-center card-hover"
            >
              <span className="absolute -top-2 -right-2 eyebrow text-[9px] text-[#71768B] bg-white border border-[#E7E7EE] px-1.5 py-0.5 rounded">
                Soon
              </span>
              <div className="w-10 h-10 rounded-lg bg-[#FBFBFD] border border-[#E7E7EE] flex items-center justify-center mb-2.5 text-[12px] font-bold text-[#3D4256]">
                {integration.initial}
              </div>
              <div className="text-[12.5px] font-semibold text-[#0B0E1A]">{integration.name}</div>
              <div className="text-[10px] text-[#71768B] mt-0.5 font-mono">
                {integration.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center text-[12px] text-[#71768B] mt-10 font-mono"
        >
          More integrations on the way · Built on REST API + webhooks
        </motion.p>
      </div>
    </section>
  )
}
