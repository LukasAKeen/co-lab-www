'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

export default function FinalCTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-cta" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
            <span className="bg-white/80 backdrop-blur-sm border border-[#6366F1]/15 rounded-full px-4 py-1.5 text-xs font-semibold text-[#6366F1] shadow-sm flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#6366F1]" />
              Invite-only early access
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight text-[#0D1117] mb-5 sm:mb-6 leading-[1.08] sm:leading-[1.05]"
          >
            Ready to let AI{' '}
            <span className="text-gradient-ai">run your deals?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#3D4663] mb-10 leading-relaxed"
          >
            Join sales teams using Co-Lab&apos;s AI to build deal rooms, track intent,
            and close faster. Early access is invite-only — spots are limited.
          </motion.p>

          <motion.p variants={fadeUp} className="text-sm text-[#9BA3B8] mb-8">
            Join <span className="font-semibold text-[#3D4663]">200+ sales teams</span> already on the waitlist
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@co-lab.com?subject=Early Access Request"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-2xl transition-all animate-[pulse-glow_3s_ease-in-out_infinite] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] active:scale-[0.97]"
            >
              <span className="absolute inset-0 rounded-2xl shimmer pointer-events-none" />
              Request early access
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://app.co-lab.com/login"
              className="inline-flex items-center gap-1.5 text-sm text-[#9BA3B8] hover:text-[#3D4663] transition-colors"
            >
              Already have an account? Sign in
              <ArrowRight size={13} />
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-xs text-[#C5CBDA]">
            No credit card required · Invite-only · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
