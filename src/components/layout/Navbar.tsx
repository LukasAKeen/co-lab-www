'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import BrandMark from '@/components/BrandMark'

const navLinks = [
  { label: 'How it works', href: '#how' },
  { label: 'Features', href: '#features' },
  { label: 'Who it’s for', href: '#who' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(251,251,253,0.85)] backdrop-blur-xl backdrop-saturate-150 border-b border-[#E7E7EE]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center gap-8">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <BrandMark size={28} variant="iris" />
            <span className="font-semibold text-[15px] tracking-tight text-[#0B0E1A]">
              Co-Lab
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-[13.5px] font-medium text-[#3D4256] hover:text-[#0B0E1A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai"
              className="px-3 py-2 text-[13.5px] font-medium text-[#3D4256] hover:text-[#0B0E1A] transition-colors"
            >
              Sign in
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.colabapp.ai/register"
              className="group inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-lg transition-colors"
            >
              Start free
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 -mr-1 text-[#3D4256] hover:text-[#0B0E1A] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 sm:top-16 left-0 right-0 bottom-0 z-40 bg-[rgba(251,251,253,0.98)] backdrop-blur-xl border-t border-[#E7E7EE] px-4 sm:px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-[14px] text-[#3D4256] hover:text-[#0B0E1A] hover:bg-[#F6F6FA] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-[#E7E7EE] flex flex-col gap-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.colabapp.ai"
                  className="px-3 py-2.5 text-[14px] text-center text-[#3D4256] hover:text-[#0B0E1A] border border-[#E7E7EE] rounded-lg"
                >
                  Sign in
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.colabapp.ai/register"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-[14px] font-semibold text-center text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-lg transition-colors"
                >
                  Start free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
