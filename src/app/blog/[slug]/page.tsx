import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { getAllPosts, getPostBySlug, getPostSlugs, type Post } from '@/lib/blog'

const SITE_URL = 'https://colabapp.ai'

function buildBreadcrumbJsonLd(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  }
}

function buildBlogPostingJsonLd(post: Post) {
  const url = `${SITE_URL}/blog/${post.slug}`
  const heroUrl = `${SITE_URL}${post.hero}`
  const isoDate = post.date ? `${post.date}T00:00:00.000Z` : new Date().toISOString()

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [heroUrl],
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Co-Lab',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    articleSection: post.category,
    inLanguage: 'en-US',
    wordCount: post.html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length,
    ...(post.seo ? { keywords: post.seo } : {}),
  }
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${post.slug}`
  const heroUrl = `${SITE_URL}${post.hero}`

  return {
    title: `${post.title} — Co-Lab`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      siteName: 'Co-Lab',
      images: [{ url: heroUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [heroUrl],
    },
  }
}

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00Z')
  if (Number.isNaN(d.getTime())) return iso
  return dateFmt.format(d)
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = await getAllPosts()
  const idx = allPosts.findIndex((p) => p.slug === post.slug)
  const prev = idx > 0 ? allPosts[idx - 1] : null
  const next = idx >= 0 && idx < allPosts.length - 1 ? allPosts[idx + 1] : null

  const jsonLd = buildBlogPostingJsonLd(post)
  const breadcrumbLd = buildBreadcrumbJsonLd(post)

  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <article className="pt-24 sm:pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#71768B] hover:text-[#0B0E1A] transition-colors mb-8"
          >
            <ArrowLeft size={13} />
            Back to blog
          </Link>

          <div className="eyebrow text-[#5B5BD6] mb-4">{post.category}</div>

          <h1 className="display text-3xl sm:text-4xl md:text-[44px] text-[#0B0E1A] leading-[1.1] tracking-[-0.035em] mb-5">
            {post.title}
          </h1>

          <p className="text-[17px] sm:text-[18px] text-[#3D4256] leading-[1.55] mb-6">
            {post.description}
          </p>

          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#E7E7EE]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B5BD6] to-[#4040C0] text-white flex items-center justify-center text-[11px] font-bold tracking-tight">
                CL
              </div>
              <span className="text-[13px] font-semibold text-[#0B0E1A]">
                {post.author}
              </span>
            </div>
            <span className="text-[#C9C9EE]">·</span>
            <span className="text-[12.5px] font-mono text-[#71768B]">{formatDate(post.date)}</span>
            <span className="text-[#C9C9EE]">·</span>
            <span className="text-[12.5px] font-mono text-[#71768B]">{post.readTime} min read</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12">
          <div className="relative aspect-[1200/630] rounded-2xl overflow-hidden border border-[#E7E7EE] bg-[#F4F4F8]">
            <Image
              src={post.hero}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose prose-zinc max-w-none
              prose-headings:font-[Inter] prose-headings:tracking-[-0.025em] prose-headings:text-[#0B0E1A]
              prose-h2:text-[28px] prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-[22px] prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-3
              prose-p:text-[#1F2333] prose-p:leading-[1.7]
              prose-a:text-[#5B5BD6] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#0B0E1A] prose-strong:font-semibold
              prose-ul:my-4 prose-li:my-1.5 prose-li:text-[#1F2333]
              prose-ol:my-4
              prose-blockquote:border-l-2 prose-blockquote:border-[#5B5BD6] prose-blockquote:bg-[#F2F2FB] prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-[#1F2333]
              prose-code:font-mono prose-code:text-[13px] prose-code:bg-[#F4F4F8] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:text-[#0B0E1A] prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#0B0E1A] prose-pre:text-[#E7E7EE] prose-pre:rounded-xl prose-pre:border prose-pre:border-[#E7E7EE]
              prose-hr:border-[#E7E7EE] prose-hr:my-10
              prose-img:rounded-xl prose-img:border prose-img:border-[#E7E7EE]
              prose-table:text-[14px]
              prose-th:bg-[#F4F4F8] prose-th:font-semibold prose-th:text-[#0B0E1A] prose-th:border-[#E7E7EE]
              prose-td:border-[#E7E7EE] prose-td:text-[#1F2333]"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        <RelatedPosts current={post} allPosts={allPosts} limit={3} />

        {(prev || next) && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-16 pt-10 border-t border-[#E7E7EE]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group block p-5 rounded-xl border border-[#E7E7EE] hover:border-[#C9C9EE] transition-colors"
                >
                  <div className="eyebrow text-[10px] text-[#71768B] mb-2 flex items-center gap-1.5">
                    <ArrowLeft size={10} />
                    Previous
                  </div>
                  <div className="text-[14px] font-semibold text-[#0B0E1A] group-hover:text-[#5B5BD6] transition-colors leading-snug">
                    {prev.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group block p-5 rounded-xl border border-[#E7E7EE] hover:border-[#C9C9EE] transition-colors text-right"
                >
                  <div className="eyebrow text-[10px] text-[#71768B] mb-2 flex items-center gap-1.5 justify-end">
                    Next
                    <ArrowRight size={10} />
                  </div>
                  <div className="text-[14px] font-semibold text-[#0B0E1A] group-hover:text-[#5B5BD6] transition-colors leading-snug">
                    {next.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  )
}
