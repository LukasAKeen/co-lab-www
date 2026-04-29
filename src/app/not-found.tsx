import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Page not found — Co-Lab',
  description: 'The page you were looking for doesn’t exist or has moved.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FBFBFD] flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[460px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(91,91,214,0.10) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
          <p className="eyebrow text-[#5B5BD6] mb-5 inline-flex items-center gap-2">
            <span className="inline-block w-3.5 h-px bg-current" />
            <span>404 · Not found</span>
          </p>

          <h1 className="display text-5xl sm:text-6xl md:text-[80px] text-[#0B0E1A] leading-[0.98] tracking-[-0.04em] mb-6">
            This deal room
            <br />
            doesn&apos;t exist.
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#3D4256] leading-[1.55] max-w-[520px] mx-auto mb-10">
            The page you were looking for has either moved or was never here.
            Pretty common in B2B sales, actually.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-xl transition-colors active:scale-[0.98]"
            >
              Back home
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-[#0B0E1A] bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-xl transition-colors"
            >
              <BookOpen size={14} />
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
