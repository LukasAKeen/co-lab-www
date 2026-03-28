'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'

const blocks = [
  { icon: '🎯', label: 'Hero' },
  { icon: '👋', label: 'Welcome' },
  { icon: '🎥', label: 'Recording' },
  { icon: '📁', label: 'Asset Grid' },
  { icon: '🤖', label: 'AI Agent' },
  { icon: '📢', label: 'CTA' },
  { icon: '❓', label: 'FAQ' },
  { icon: '👥', label: 'Team' },
  { icon: '➡️', label: 'Next Steps' },
]

const templates = [
  {
    name: 'AI Enterprise Suite',
    desc: 'AI-built from your transcript — demo, ROI & case study',
    tag: 'AI',
    color: '#6366F1',
  },
  {
    name: 'SaaS Renewal Pack',
    desc: 'Usage stats, success highlights & next-tier value',
    tag: 'Template',
    color: '#34D399',
  },
  {
    name: 'Enterprise Onboarding',
    desc: 'Implementation roadmap, contacts & resource hub',
    tag: 'Post-sale',
    color: '#4F46E5',
  },
  {
    name: 'SMB Intro Pack',
    desc: 'Quick wins, pricing & easy path to yes',
    tag: 'SMB',
    color: '#F59E0B',
  },
  {
    name: 'Competitive Displacement',
    desc: 'Battle cards, comparisons & switching incentives',
    tag: 'Compete',
    color: '#F43F5E',
  },
  {
    name: 'AI Pod Builder',
    desc: 'Paste your call transcript — AI builds the pod',
    tag: 'AI',
    color: '#34D399',
  },
]

export default function BuilderShowcase() {
  const [activeBlock, setActiveBlock] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % blocks.length)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="templates" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold text-[#6366F1] uppercase tracking-[0.15em] mb-4">
            Pod Builder
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#0D1117]"
          >
            A room for every deal,{' '}
            <span className="text-gradient-ai">built by AI.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-[#3D4663] max-w-xl mx-auto">
            Choose an AI template or paste a transcript. AI selects the blocks, you hit publish.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Block list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportConfig}
          >
            <div className="text-xs font-semibold text-[#9BA3B8] uppercase tracking-wider mb-4">
              Content Blocks
            </div>
            <div className="space-y-2">
              {blocks.map((block, i) => (
                <div
                  key={block.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300"
                  style={
                    activeBlock === i
                      ? {
                          backgroundColor: 'rgba(99,102,241,0.05)',
                          borderColor: 'rgba(99,102,241,0.18)',
                          boxShadow: '0 0 20px rgba(99,102,241,0.06)',
                        }
                      : {
                          backgroundColor: '#FFFFFF',
                          borderColor: 'rgba(0,0,0,0.05)',
                        }
                  }
                >
                  <span className="text-lg w-6 text-center">{block.icon}</span>
                  <span
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: activeBlock === i ? '#0D1117' : '#6B7394' }}
                  >
                    {block.label}
                  </span>
                  {activeBlock === i && (
                    <span className="ml-auto text-[10px] text-[#6366F1] bg-[#6366F1]/10 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <Sparkles size={8} />
                      AI pick
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Templates grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportConfig}
          >
            <div className="text-xs font-semibold text-[#9BA3B8] uppercase tracking-wider mb-4">
              Templates
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {templates.map((template) => (
                <div
                  key={template.name}
                  className="group rounded-2xl border border-black/[0.05] bg-white p-4 hover:border-[#6366F1]/20 hover:bg-[#6366F1]/[0.02] transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-[#0D1117] leading-tight">
                      {template.name}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-2 flex items-center gap-0.5"
                      style={{
                        color: template.color,
                        backgroundColor: `${template.color}12`,
                      }}
                    >
                      {template.tag === 'AI' && <Sparkles size={8} />}
                      {template.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#9BA3B8] leading-relaxed">{template.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
