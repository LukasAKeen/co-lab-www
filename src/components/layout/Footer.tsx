import { Twitter, Linkedin, ArrowRight } from 'lucide-react'
import BrandMark from '@/components/BrandMark'

const links = {
  Product: [
    { label: 'How it works', href: '#how' },
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Resources: [{ label: 'Blog', href: '/blog' }],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E7EE] bg-[#F6F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <BrandMark size={28} variant="iris" />
              <span className="font-semibold text-[15px] text-[#0B0E1A]">Co-Lab</span>
            </div>
            <p className="text-[13.5px] text-[#71768B] leading-relaxed max-w-[300px] mb-5">
              The AI-native digital sales room. AI builds the deal room — you close the deal.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.colabapp.ai/register"
                className="group inline-flex items-center gap-1.5 px-3.5 py-2 text-[12.5px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] rounded-lg transition-colors"
              >
                Start free
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-[#E7E7EE] flex items-center justify-center text-[#71768B] hover:text-[#0B0E1A] hover:border-[#C9C9EE] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-[#E7E7EE] flex items-center justify-center text-[#71768B] hover:text-[#0B0E1A] hover:border-[#C9C9EE] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="eyebrow text-[#71768B] mb-4">{category}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13.5px] text-[#3D4256] hover:text-[#0B0E1A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E7E7EE] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#71768B]">&copy; 2026 Co-Lab. All rights reserved.</p>
          <p className="text-[12px] text-[#71768B]">
            Built for sales teams who let AI close.
          </p>
        </div>
      </div>
    </footer>
  )
}
