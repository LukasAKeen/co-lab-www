'use client'

import { motion } from 'framer-motion'
import { fadeIn, viewportConfig } from '@/lib/motion'

const companies = [
  'Meridian Corp',
  'Nexus Capital',
  'Vantage Health',
  'CloudOps Inc',
  'Apex Ventures',
  'Synergy Labs',
  'Meridian Corp',
  'Nexus Capital',
  'Vantage Health',
  'CloudOps Inc',
  'Apex Ventures',
  'Synergy Labs',
]

export default function LogoBar() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="py-12 border-y border-black/[0.06] bg-[#F2F4FA] overflow-hidden"
    >
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-[#9BA3B8] uppercase tracking-[0.15em]">
          Trusted by sales teams at
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[marquee_30s_linear_infinite] items-center gap-16 whitespace-nowrap">
          {companies.map((name, i) => (
            <span
              key={i}
              className="text-[#C5CBDA] font-semibold text-sm tracking-wide hover:text-[#9BA3B8] transition-colors select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
