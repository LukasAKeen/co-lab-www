'use client'

import { motion } from 'framer-motion'
import { Check, Shield, FileText, ExternalLink } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

const functionality = [
  'Create personalized digital sales rooms (called "Pods") to share with buyers',
  'Upload and organize documents, decks, videos, and other sales materials',
  'Track buyer engagement: who visited, how long they stayed, what they viewed',
  'Generate Mutual Action Plans to align sales teams and buyers on next steps',
  'Use AI to analyze call transcripts and suggest pod content automatically',
  'Integrate with Salesforce, HubSpot, Gong, Slack, DocuSign, and PandaDoc',
  'Customize deal rooms with your company\u2019s branding (white-label)',
]

const dataRequested = [
  {
    label: 'Name',
    purpose: 'To identify you in the application and on shared deal rooms',
  },
  {
    label: 'Email address',
    purpose: 'For account creation, login, and transactional notifications',
  },
  {
    label: 'Profile photo',
    purpose: 'Optional \u2014 displayed on your user profile within Co-Lab',
  },
  {
    label: 'Google account ID',
    purpose: 'To securely identify your account on subsequent sign-ins',
  },
]

export default function AboutDataUsage() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative bg-white border-t border-b border-black/[0.05]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4"
          >
            About Co-Lab
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight mb-6"
          >
            What Co-Lab is and how it works
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-[#3D4663] leading-relaxed mb-4"
          >
            Co-Lab is a digital sales room platform built by Co-Lab. Sales teams use Co-Lab to create personalized,
            interactive workspaces (called &ldquo;Pods&rdquo;) where they share proposals, presentations, videos, pricing, and
            mutual action plans with their buyers. Buyers access these workspaces through a single shared link, with no
            account or download required.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-[#3D4663] leading-relaxed mb-12"
          >
            Co-Lab also includes optional AI features that analyze sales call transcripts (uploaded by the user) and
            suggest relevant content blocks to include in a deal room. The platform is designed for B2B sales teams,
            account executives, customer success managers, and revenue operations professionals.
          </motion.p>

          {/* Functionality */}
          <motion.div variants={fadeUp} className="mb-12">
            <h3 className="text-lg font-bold text-[#0D1117] mb-4">What you can do with Co-Lab</h3>
            <ul className="space-y-3">
              {functionality.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#3D4663]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#34D399]/12 flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-[#059669]" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OAuth / Data usage */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-[#6366F1]/15 bg-[#6366F1]/[0.03] p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
                <Shield size={18} className="text-[#6366F1]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D1117]">How we use your Google account data</h3>
            </div>

            <p className="text-sm sm:text-base text-[#3D4663] leading-relaxed mb-5">
              When you sign in to Co-Lab using your Google account, Co-Lab requests access to a limited set of basic
              profile information. We use this information solely to create and authenticate your Co-Lab account. We do
              not access your Gmail, Google Drive, Google Calendar, Google Contacts, or any other Google Workspace data.
            </p>

            <div className="mb-5">
              <p className="text-xs font-semibold text-[#0D1117] uppercase tracking-wider mb-3">Data Co-Lab requests from your Google account:</p>
              <ul className="space-y-2.5">
                {dataRequested.map((d) => (
                  <li key={d.label} className="text-sm text-[#3D4663]">
                    <span className="font-semibold text-[#0D1117]">{d.label}</span>
                    <span className="text-[#6B7394]"> &mdash; {d.purpose}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-[#3D4663] leading-relaxed">
              Co-Lab does not sell your data. Co-Lab does not use your data, your call transcripts, or your buyer
              engagement data to train foundational AI models. Your data is encrypted in transit (TLS 1.3) and at rest
              (AES-256), and Co-Lab maintains SOC 2 Type II compliance.
            </p>
          </motion.div>

          {/* Policy links */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <a
              href="/privacy"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#3D4663] hover:text-[#0D1117] border border-black/[0.08] hover:border-black/[0.15] rounded-xl transition-all"
            >
              <FileText size={14} />
              Read our Privacy Policy
              <ExternalLink size={12} className="opacity-60" />
            </a>
            <a
              href="/terms"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#3D4663] hover:text-[#0D1117] border border-black/[0.08] hover:border-black/[0.15] rounded-xl transition-all"
            >
              <FileText size={14} />
              Read our Terms of Service
              <ExternalLink size={12} className="opacity-60" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
