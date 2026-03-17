'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const testimonials = [
  {
    quote:
      'Co-Lab helped us close our biggest enterprise deal of the quarter. Our champion could finally share everything in one place — and we knew exactly when they were engaged.',
    name: 'Sarah K.',
    role: 'Enterprise Account Executive',
    company: 'Meridian Corp',
    initials: 'SK',
    color: '#6366F1',
  },
  {
    quote:
      'I used to wonder if prospects even opened my decks. Now I get an intent score the moment someone visits. It completely changed how I prioritize my pipeline.',
    name: 'Marcus T.',
    role: 'Account Executive',
    company: 'CloudOps Inc',
    initials: 'MT',
    color: '#059669',
  },
  {
    quote:
      'Templates save me 30 minutes per deal. The AI builder is wild — paste a call transcript and the pod builds itself. My buyers actually reply to follow-ups now.',
    name: 'Jordan L.',
    role: 'Mid-Market AE',
    company: 'Nexus Capital',
    initials: 'JL',
    color: '#D97706',
  },
]

export default function Testimonials() {
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
            Social Proof
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117]"
          >
            What sales teams are saying
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              className="bg-white rounded-[18px] border border-black/[0.07] p-8 flex flex-col shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-3 -mt-2"
                style={{ color: t.color, opacity: 0.3 }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-sm text-[#5A6480] leading-relaxed flex-1 mb-6">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-black/[0.06]">
                <div
                  className="w-9 h-9 rounded-[8px] flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: `${t.color}12`, border: `1px solid ${t.color}20` }}
                >
                  <span style={{ color: t.color }}>{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0D1117]">{t.name}</div>
                  <div className="text-xs text-[#9BA3B8]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
