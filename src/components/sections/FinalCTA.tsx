'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(91,91,214,0.10) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-7">
            <span className="bg-white border border-[#E7E7EE] rounded-full px-3 py-1 text-[11.5px] font-medium text-[#3D4256] flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D9A6A] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3D9A6A]" />
              </span>
              Now Live
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="display text-3xl sm:text-5xl md:text-[64px] text-[#0B0E1A] mb-6 leading-[1.05] tracking-[-0.04em]"
          >
            Ready to let AI <span className="text-gradient">run your deals?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[17px] text-[#3D4256] leading-[1.55] mb-9 max-w-[560px] mx-auto"
          >
            Join sales teams using Co-Lab&apos;s AI to build deal rooms, track intent,
            and close faster. Sign up free and start in minutes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai/register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.98]"
            >
              Get Started Free
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-[#0B0E1A] bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-xl transition-colors"
            >
              Sign in
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[12px] text-[#71768B]"
          >
            No credit card required · Free plan available · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
