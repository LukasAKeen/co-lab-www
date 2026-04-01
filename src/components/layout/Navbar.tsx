'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Handshake, Menu, X, Sparkles } from 'lucide-react'

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-[0_1px_8px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#6366F1] flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.35)] group-hover:shadow-[0_0_24px_rgba(99,102,241,0.5)] transition-shadow">
              <Handshake size={16} className="text-white" />
            </div>
            <span className={`font-semibold text-[15px] tracking-tight transition-colors duration-500 ${scrolled ? 'text-[#0D1117]' : 'text-white'}`}>
              Co-Lab
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-[#34D399] bg-[#34D399]/10 px-2 py-0.5 rounded-full border border-[#34D399]/15">
              <Sparkles size={8} />
              AI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm transition-colors rounded-xl ${scrolled ? 'text-[#3D4663] hover:text-[#0D1117] hover:bg-black/[0.03]' : 'text-[#8892AA] hover:text-white hover:bg-white/[0.06]'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.co-lab.com/login"
              className={`px-4 py-2 text-sm transition-colors ${scrolled ? 'text-[#3D4663] hover:text-[#0D1117]' : 'text-[#8892AA] hover:text-white'}`}
            >
              Sign in
            </a>
            <a
              href="https://app.co-lab.com/demo"
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${scrolled ? 'text-[#3D4663] hover:text-[#0D1117] border border-black/[0.08] hover:border-black/[0.12]' : 'text-[#C5CBDA] hover:text-white border border-white/[0.10] hover:border-white/[0.20]'}`}
            >
              Book a Demo
            </a>
            <a
              href="https://app.co-lab.com/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] active:scale-[0.97]"
            >
              Start Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2.5 -mr-1 transition-colors ${scrolled ? 'text-[#3D4663] hover:text-[#0D1117]' : 'text-[#8892AA] hover:text-white'}`}
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
            className="fixed top-14 sm:top-16 left-0 right-0 bottom-0 z-40 bg-white/[0.97] backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] px-4 sm:px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-[#3D4663] hover:text-[#0D1117] transition-colors rounded-xl hover:bg-black/[0.03]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-black/[0.06] flex flex-col gap-2">
                <a
                  href="https://app.co-lab.com/login"
                  className="px-4 py-2.5 text-sm text-center text-[#3D4663] hover:text-[#0D1117] transition-colors border border-black/[0.07] rounded-xl"
                >
                  Sign in
                </a>
                <a
                  href="https://app.co-lab.com/demo"
                  className="px-4 py-2.5 text-sm font-medium text-center text-[#3D4663] hover:text-[#0D1117] border border-black/[0.07] rounded-xl transition-colors"
                >
                  Book a Demo
                </a>
                <a
                  href="https://app.co-lab.com/signup"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-center text-white bg-[#6366F1] hover:bg-[#5558E8] rounded-xl transition-colors"
                >
                  Start Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
