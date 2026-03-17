import { Handshake, Twitter, Linkedin } from 'lucide-react'

const links = {
  Product: ['Features', 'Analytics', 'Templates', 'Pricing'],
  Company: ['About', 'Blog', 'Careers'],
  Legal: ['Privacy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-[#F2F4FA]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-[10px] bg-[#6366F1] flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.3)]">
                <Handshake size={16} className="text-white" />
              </div>
              <span className="font-semibold text-[15px] text-[#0D1117]">Co-Lab</span>
            </div>
            <p className="text-sm text-[#9BA3B8] leading-relaxed max-w-[240px]">
              The sales room your buyers will actually engage with.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-[10px] border border-black/[0.09] flex items-center justify-center text-[#9BA3B8] hover:text-[#5A6480] hover:border-black/[0.15] transition-all"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-[10px] border border-black/[0.09] flex items-center justify-center text-[#9BA3B8] hover:text-[#5A6480] hover:border-black/[0.15] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-[#9BA3B8] uppercase tracking-wider mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#5A6480] hover:text-[#0D1117] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-black/[0.07] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9BA3B8]">© 2025 Co-Lab. All rights reserved.</p>
          <p className="text-xs text-[#9BA3B8]">
            Built for sales teams who close.
          </p>
        </div>
      </div>
    </footer>
  )
}
