'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

export default function FinalCTA() {
  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6366F1] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
            <span className="bg-white border border-[#6366F1]/20 rounded-full px-4 py-1.5 text-xs font-medium text-[#6366F1] shadow-sm">
              Invite-only early access
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D1117] mb-5 leading-[1.05]"
          >
            Ready to run deals
            <br />
            <span className="text-gradient-indigo">the modern way?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#5A6480] mb-10 leading-relaxed"
          >
            Join sales teams using Co-Lab to engage buyers, track intent, and close
            faster. Early access is invite-only — spots are limited.
          </motion.p>

          {/* Waitlist social proof */}
          <motion.p variants={fadeUp} className="text-sm text-[#9BA3B8] mb-8">
            Join <span className="font-semibold text-[#5A6480]">200+ sales teams</span> already on the waitlist
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@co-lab.com?subject=Early Access Request"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-[14px] transition-all animate-[pulse-glow_3s_ease-in-out_infinite] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] active:scale-95"
            >
              Request early access
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm text-[#9BA3B8] hover:text-[#5A6480] transition-colors"
            >
              Already have an account? Sign in →
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p variants={fadeUp} className="mt-6 text-xs text-[#C5CBDA]">
            No credit card required · Invite-only · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
