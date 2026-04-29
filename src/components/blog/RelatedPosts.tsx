import Image from 'next/image'
import Link from 'next/link'
import type { PostMeta } from '@/lib/blog'

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

type RelatedPostsProps = {
  current: PostMeta
  allPosts: PostMeta[]
  limit?: number
}

export default function RelatedPosts({
  current,
  allPosts,
  limit = 3,
}: RelatedPostsProps) {
  const sameCategory = allPosts.filter(
    (p) => p.slug !== current.slug && p.categorySlug === current.categorySlug,
  )
  const others = allPosts.filter(
    (p) => p.slug !== current.slug && p.categorySlug !== current.categorySlug,
  )
  const picks = [...sameCategory, ...others].slice(0, limit)

  if (picks.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 pt-16 border-t border-[#E7E7EE]">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <p className="eyebrow text-[#5B5BD6] mb-2">More from the blog</p>
          <h2 className="display text-2xl sm:text-[28px] text-[#0B0E1A] tracking-[-0.025em]">
            Keep reading.
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#5B5BD6] hover:text-[#4040C0] transition-colors"
        >
          All posts →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {picks.map((post) => (
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
              <h3 className="display text-[17px] sm:text-[18px] text-[#0B0E1A] leading-[1.2] tracking-[-0.025em] mb-3 group-hover:text-[#5B5BD6] transition-colors">
                {post.title}
              </h3>
              <p className="text-[13px] text-[#3D4256] leading-[1.55] mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-auto pt-3 border-t border-[#E7E7EE] flex items-center gap-2.5 text-[11px] font-mono text-[#71768B]">
                <span>{formatDate(post.date)}</span>
                <span className="text-[#C9C9EE]">·</span>
                <span>{post.readTime} min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
