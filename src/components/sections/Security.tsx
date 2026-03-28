'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Lock,
  Eye,
  Server,
  Check,
  Sparkles,
} from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const badges = [
  {
    icon: ShieldCheck,
    title: 'SOC 2 Type II',
    description: 'Audited controls for security, availability, and confidentiality.',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.18)',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256).',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.18)',
  },
  {
    icon: Eye,
    title: 'No AI Training on Your Data',
    description: 'We do NOT train our foundational AI models on your proprietary sales calls or buyer data.',
    color: '#F43F5E',
    bg: 'rgba(244,63,94,0.08)',
    border: 'rgba(244,63,94,0.18)',
  },
  {
    icon: Server,
    title: 'Enterprise SSO & RBAC',
    description: 'SAML 2.0 SSO, role-based access controls, and audit logs for every action.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.18)',
  },
]

const certifications = [
  'SOC 2 Type II Compliant',
  'GDPR Ready',
  'Data residency options (US / EU)',
  'Penetration tested annually',
  '99.99% uptime SLA',
  'Dedicated security team',
]

export default function Security() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#6366F1]/8 border border-[#6366F1]/15 rounded-full px-4 py-1.5 text-xs font-semibold text-[#6366F1] shadow-sm flex items-center gap-1.5">
              <ShieldCheck size={11} className="text-[#6366F1]" />
              Enterprise-Grade Security
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117] leading-tight"
          >
            Your data is yours.{' '}
            <span className="text-gradient-ai">Full stop.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-[#3D4663] max-w-2xl mx-auto">
            Enterprise IT teams trust Co-Lab with their most sensitive deal data. We built security
            into the foundation — not as an afterthought.
          </motion.p>
        </motion.div>

        {/* Security cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.title}
                variants={scaleIn}
                className="bg-white rounded-2xl border border-black/[0.06] p-6 card-hover shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: badge.bg, border: `1.5px solid ${badge.border}` }}
                >
                  <Icon size={22} style={{ color: badge.color }} />
                </div>
                <h3 className="text-sm font-bold text-[#0D1117] mb-2">{badge.title}</h3>
                <p className="text-[13px] text-[#3D4663] leading-relaxed">{badge.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#6366F1]/[0.04] to-[#34D399]/[0.04] border border-[#6366F1]/10 p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={18} className="text-[#6366F1]" />
                  <span className="text-sm font-bold text-[#0D1117]">Security Certifications & Commitments</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-[#3D4663]">
                      <span className="flex-shrink-0 w-4 h-4 rounded-md bg-[#34D399]/12 flex items-center justify-center">
                        <Check size={9} className="text-[#34D399]" />
                      </span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA */}
              <div className="flex-shrink-0">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-[0.97]"
                >
                  <ShieldCheck size={14} />
                  Request Security Docs
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
