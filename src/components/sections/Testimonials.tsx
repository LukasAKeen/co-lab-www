'use client'

import { motion } from 'framer-motion'
import { Star, Sparkles } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '@/lib/motion'

const testimonials = [
  {
    quote:
      'I pasted a Gong transcript and Co-Lab built a full deal room in under a minute. My champion shared it with the entire buying committee. We closed 2 weeks early.',
    name: 'Sarah K.',
    role: 'Enterprise Account Executive',
    company: 'Meridian Corp',
    initials: 'SK',
    color: '#6366F1',
  },
  {
    quote:
      'The AI intent scoring is a game changer. I used to wonder if anyone opened my decks. Now I know exactly who viewed what, for how long, and when to follow up.',
    name: 'Marcus T.',
    role: 'Account Executive',
    company: 'CloudOps Inc',
    initials: 'MT',
    color: '#34D399',
  },
  {
    quote:
      'The AI assistant handles objections at 2am while I sleep. Buyers get instant answers, I get notified of key questions, and deals move forward without me lifting a finger.',
    name: 'Jordan L.',
    role: 'Mid-Market AE',
    company: 'Nexus Capital',
    initials: 'JL',
    color: '#F59E0B',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F2F4FA]" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            Social proof
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117]"
          >
            Teams are closing faster{' '}
            <span className="text-gradient-ai">with AI.</span>
          </motion.h2>

          {/* Metric bar */}
          <motion.div variants={fadeUp} className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
              ))}
              <span className="text-sm font-semibold text-[#0D1117] ml-1">4.8 / 5 on G2</span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-black/[0.1]" />
            <span className="text-sm text-[#3D4663]">
              Loved by <span className="font-semibold text-[#0D1117]">200+</span> sales teams in early access
            </span>
          </motion.div>
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
              className="bg-white rounded-2xl border border-black/[0.06] p-5 sm:p-8 flex flex-col shadow-sm card-hover"
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
                style={{ color: t.color, opacity: 0.25 }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-sm text-[#3D4663] leading-relaxed flex-1 mb-6">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-black/[0.05]">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: `${t.color}12`, border: `1.5px solid ${t.color}20` }}
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
