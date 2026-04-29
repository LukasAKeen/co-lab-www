import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  categorySlug: string
  readTime: number
  seo?: string
  hero: string
}

export type Post = PostMeta & {
  html: string
}

const CONTENT_DIR = join(process.cwd(), 'src/content/blog')

marked.setOptions({
  gfm: true,
  breaks: false,
})

export async function getPostSlugs(): Promise<string[]> {
  const files = await readdir(CONTENT_DIR)
  return files.filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
}

function toPostMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug: String(data.slug ?? slug),
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    date: String(data.date ?? ''),
    category: String(data.category ?? ''),
    categorySlug: String(data.categorySlug ?? ''),
    readTime: Number(data.readTime ?? 5),
    seo: data.seo ? String(data.seo) : undefined,
    hero: String(data.hero ?? ''),
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const raw = await readFile(join(CONTENT_DIR, `${slug}.md`), 'utf8')
    const { data, content } = matter(raw)
    const meta = toPostMeta(slug, data)
    const html = await marked.parse(content)
    return { ...meta, html }
  } catch {
    return null
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await readFile(join(CONTENT_DIR, `${slug}.md`), 'utf8')
      const { data } = matter(raw)
      return toPostMeta(slug, data)
    }),
  )
  return posts.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1
    return a.slug < b.slug ? -1 : 1
  })
}
