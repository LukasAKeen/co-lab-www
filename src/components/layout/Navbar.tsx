'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Handshake, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong border-b border-black/[0.07]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-[10px] bg-[#6366F1] flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.35)] group-hover:shadow-[0_0_24px_rgba(99,102,241,0.5)] transition-shadow">
              <Handshake size={16} className="text-white" />
            </div>
            <span className="font-semibold text-[15px] text-[#0D1117] tracking-tight">
              Co-Lab
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-[#5A6480] hover:text-[#0D1117] transition-colors rounded-[10px] hover:bg-black/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.co-lab.com/login"
              className="px-4 py-2 text-sm text-[#5A6480] hover:text-[#0D1117] transition-colors"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-medium text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-[10px] transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] active:scale-95"
            >
              Get early access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#5A6480] hover:text-[#0D1117] transition-colors"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-strong border-b border-black/[0.07] px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-[#5A6480] hover:text-[#0D1117] transition-colors rounded-[10px] hover:bg-black/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-black/[0.07] flex flex-col gap-2">
                <a
                  href="https://app.co-lab.com/login"
                  className="px-4 py-2.5 text-sm text-center text-[#5A6480] hover:text-[#0D1117] transition-colors border border-black/[0.09] rounded-[10px]"
                >
                  Sign in
                </a>
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-center text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-[10px] transition-colors"
                >
                  Get early access
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
