import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/SectionHeader'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Co-Lab',
  description:
    'Field notes on AI sales, digital sales rooms, buyer intelligence, and modern revenue operations from the Co-Lab team.',
  alternates: { canonical: 'https://colabapp.ai/blog' },
}

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00Z')
  if (Number.isNaN(d.getTime())) return iso
  return dateFmt.format(d)
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()
  const [featured, ...rest] = posts

  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[420px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(91,91,214,0.10) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader
            anchor="—"
            kicker="Blog"
            title={
              <>
                Field notes from the
                <br />
                front lines of revenue.
              </>
            }
            subhead="AI sales, digital sales rooms, buyer intelligence, and the operational details that decide which deals close. Direct, numbers-forward, no growth-hacking nonsense."
          />
        </div>
      </section>

      {featured && (
        <section className="px-4 sm:px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-2xl overflow-hidden transition-colors"
            >
              <div className="relative aspect-[1200/630] overflow-hidden bg-[#F4F4F8]">
                <Image
                  src={featured.hero}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4 eyebrow text-[#5B5BD6]">
                  <span>{featured.category}</span>
                  <span className="text-[#A4A8BC]">·</span>
                  <span className="text-[#71768B]">Featured</span>
                </div>
                <h2 className="display text-2xl sm:text-3xl md:text-[36px] text-[#0B0E1A] leading-[1.1] tracking-[-0.03em] mb-4 group-hover:text-[#5B5BD6] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#3D4256] leading-[1.55] mb-5">
                  {featured.description}
                </p>
                <div className="flex items-center gap-3 text-[12px] font-mono text-[#71768B]">
                  <span>{formatDate(featured.date)}</span>
                  <span className="text-[#C9C9EE]">·</span>
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="px-4 sm:px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-[#E7E7EE] hover:border-[#C9C9EE] rounded-2xl overflow-hidden transition-colors flex flex-col"
              >
                <div className="relative aspect-[1200/630] overflow-hidden bg-[#F4F4F8]">
                  <Image
                    src={post.hero}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="eyebrow text-[#5B5BD6] mb-2.5">{post.category}</div>
                  <h3 className="display text-[18px] sm:text-[19px] text-[#0B0E1A] leading-[1.2] tracking-[-0.025em] mb-3 group-hover:text-[#5B5BD6] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13.5px] text-[#3D4256] leading-[1.55] mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-[#E7E7EE] flex items-center gap-2.5 text-[11.5px] font-mono text-[#71768B]">
                    <span>{formatDate(post.date)}</span>
                    <span className="text-[#C9C9EE]">·</span>
                    <span>{post.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
