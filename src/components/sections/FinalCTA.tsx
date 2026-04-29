'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-[#0B0E1A]"
    >
      {/* Iris glow at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 1000px 500px at 50% 100%, rgba(91,91,214,0.25) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 dot-grid-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center mb-7">
            <span className="eyebrow text-[#8C8CFF] flex items-center gap-2">
              <span className="inline-block w-3.5 h-px bg-current" />
              Ready to ship
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="display text-3xl sm:text-5xl md:text-[64px] text-white mb-6 leading-[1.0] tracking-[-0.04em]"
          >
            Deals don&apos;t die on calls.
            <br />
            <span className="text-[#A8AECB]">They die between meetings.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[17px] md:text-[18px] text-[#A8AECB] leading-[1.55] mb-9 max-w-[560px] mx-auto"
          >
            Co-Lab watches the gaps so your deal stays alive. Sign up free and
            start in minutes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai/register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-[#0B0E1A] bg-white hover:bg-[#F4F4F8] rounded-xl transition-colors active:scale-[0.98]"
            >
              Start free trial
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-white bg-transparent border border-[#2A2F4D] hover:border-[#3D4256] rounded-xl transition-colors"
            >
              Sign in
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 eyebrow text-[#6E7494] tracking-[0.16em]"
          >
            14-day trial · No credit card · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
