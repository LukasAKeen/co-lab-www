'use client'

import { motion } from 'framer-motion'
import { Palette, Globe, Type, ImageIcon } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

const features = [
  { icon: Palette, label: 'Custom brand colors & themes' },
  { icon: ImageIcon, label: 'Your logo on every pod' },
  { icon: Globe, label: 'Custom domain (deals.yourco.com)' },
  { icon: Type, label: 'Font & typography matching' },
]

function BrandedPodPreview({
  brand,
  color,
  logo,
  domain,
  delay,
}: {
  brand: string
  color: string
  logo: string
  domain: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="rounded-2xl border border-[#E7E7EE] bg-white overflow-hidden flex-1 shadow-[0_8px_24px_-12px_rgba(15,18,30,0.08)]"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-[#FBFBFD] border-b border-[#E7E7EE]">
        <div className="flex gap-1 flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E7E7EE]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E7E7EE]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E7E7EE]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded px-2.5 py-0.5 text-[10px] text-[#71768B] border border-[#E7E7EE] font-mono">
            {domain}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: `${color}0A`, border: `1px solid ${color}20` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {logo}
            </div>
            <span className="text-[12px] font-semibold text-[#0B0E1A]">{brand}</span>
          </div>

          <div className="space-y-2">
            <div
              className="h-2 rounded w-3/4"
              style={{ backgroundColor: `${color}25` }}
            />
            <div
              className="h-1.5 rounded w-1/2"
              style={{ backgroundColor: `${color}15` }}
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {['Welcome', 'Proposal', 'Demo', 'Next Steps'].map((block) => (
              <div
                key={block}
                className="rounded-md px-2.5 py-2 bg-white border border-[#E7E7EE]"
              >
                <div className="text-[10px] font-medium text-[#0B0E1A]">{block}</div>
                <div
                  className="h-1 rounded mt-1.5 w-2/3"
                  style={{ backgroundColor: `${color}20` }}
                />
              </div>
            ))}
          </div>

          <div
            className="mt-3 rounded-lg py-2 text-center text-[10px] font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            Schedule a Call
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhiteLabel() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#5B5BD6] mb-4">
              White-Label
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="display text-3xl sm:text-4xl md:text-[44px] text-[#0B0E1A] mb-5"
            >
              Your brand. <span className="text-gradient">Your deal room.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[17px] text-[#3D4256] leading-[1.55] mb-7"
            >
              Make every pod look like it was built in-house. Custom colors, your logo,
              your domain — buyers see your brand, not ours. Full white-label means
              every touchpoint reinforces trust.
            </motion.p>

            <motion.ul variants={staggerContainer} className="border-t border-[#E7E7EE]">
              {features.map((feat) => {
                const Icon = feat.icon
                return (
                  <motion.li
                    key={feat.label}
                    variants={fadeUp}
                    className="flex items-center gap-3 py-3.5 border-b border-[#E7E7EE]"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-md bg-[#F2F2FB] border border-[#E6E6F7] flex items-center justify-center">
                      <Icon size={14} className="text-[#5B5BD6]" />
                    </span>
                    <span className="text-[14px] font-medium text-[#1F2333]">{feat.label}</span>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <BrandedPodPreview
              brand="Acme Corp"
              color="#2563EB"
              logo="A"
              domain="deals.acmecorp.com"
              delay={0.1}
            />
            <BrandedPodPreview
              brand="TechFlow"
              color="#0E8A6E"
              logo="T"
              domain="rooms.techflow.io"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
