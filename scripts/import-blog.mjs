/**
 * One-time importer: reads blog posts from ~/Desktop/colab-assets/blog-posts,
 * writes Markdown with frontmatter into src/content/blog/, and copies hero
 * images into public/blog/.
 *
 * Run:  node scripts/import-blog.mjs
 */

import { readFile, writeFile, copyFile, readdir, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const repoRoot = join(__dirname, '..')

const SOURCE = 'C:/Users/lukas/Desktop/colab-assets/blog-posts'
const CONTENT_DIR = join(repoRoot, 'src/content/blog')
const PUBLIC_DIR = join(repoRoot, 'public/blog')

const CATEGORY_MAP = {
  '01-ai-sales': { name: 'AI in Sales', slug: 'ai-sales' },
  '02-deal-rooms': { name: 'Deal Rooms', slug: 'deal-rooms' },
  '03-buyer-intel': { name: 'Buyer Intelligence', slug: 'buyer-intel' },
  '04-sales-process': { name: 'Sales Process', slug: 'sales-process' },
  '05-revops': { name: 'RevOps', slug: 'revops' },
}

const TODAY = '2026-04-28'

function escapeYaml(str) {
  if (str === undefined || str === null) return ''
  // Wrap in double-quotes; escape backslashes and double-quotes
  return `"${String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

function parseHeader(raw) {
  // Posts open with:
  //   # Title
  //   (blank)
  //   **Subtitle (description)**
  //   (blank)
  //   *Read time: 6 min · Category: AI sales · SEO: AI sales tools 2026*
  //   (blank)
  //   ---
  //   (body)
  const lines = raw.split(/\r?\n/)
  let i = 0
  // skip leading blanks
  while (i < lines.length && lines[i].trim() === '') i++

  // title
  const titleMatch = lines[i]?.match(/^#\s+(.*?)\s*$/)
  if (!titleMatch) throw new Error(`No # title at line ${i + 1}`)
  const title = titleMatch[1].trim()
  i++

  // skip blanks
  while (i < lines.length && lines[i].trim() === '') i++

  // subtitle (bold) — optional but expected
  let description = ''
  const subMatch = lines[i]?.match(/^\*\*(.+?)\*\*\s*$/)
  if (subMatch) {
    description = subMatch[1].trim()
    i++
  }

  // skip blanks
  while (i < lines.length && lines[i].trim() === '') i++

  // meta line — *Read time: 6 min · Category: AI sales · SEO: AI sales tools 2026*
  let readTime
  let seo
  const metaMatch = lines[i]?.match(/^\*(.+?)\*\s*$/)
  if (metaMatch) {
    const meta = metaMatch[1]
    const rt = meta.match(/Read time:\s*(\d+)\s*min/i)
    if (rt) readTime = Number(rt[1])
    const seoM = meta.match(/SEO:\s*(.+?)(?:$|·)/i)
    if (seoM) seo = seoM[1].trim()
    i++
  }

  // skip blanks
  while (i < lines.length && lines[i].trim() === '') i++

  // optional `---` separator (skip it)
  if (lines[i]?.trim() === '---') {
    i++
    while (i < lines.length && lines[i].trim() === '') i++
  }

  const body = lines.slice(i).join('\n').replace(/^\s+/, '').trimEnd() + '\n'
  return { title, description, readTime, seo, body }
}

async function main() {
  await mkdir(CONTENT_DIR, { recursive: true })
  await mkdir(PUBLIC_DIR, { recursive: true })

  const categoryDirs = await readdir(SOURCE, { withFileTypes: true })
  const imported = []

  for (const catDir of categoryDirs) {
    if (!catDir.isDirectory()) continue
    const cat = CATEGORY_MAP[catDir.name]
    if (!cat) {
      console.warn(`skip: no category map for ${catDir.name}`)
      continue
    }

    const postDirs = await readdir(join(SOURCE, catDir.name), { withFileTypes: true })
    for (const postDir of postDirs) {
      if (!postDir.isDirectory()) continue
      const slug = postDir.name // e.g. 01-ai-sales-stack
      const postPath = join(SOURCE, catDir.name, slug, 'post.md')
      const heroPath = join(SOURCE, catDir.name, slug, 'hero.png')

      if (!existsSync(postPath)) {
        console.warn(`skip: ${slug} (no post.md)`)
        continue
      }

      const raw = await readFile(postPath, 'utf8')
      const { title, description, readTime, seo, body } = parseHeader(raw)

      const frontmatter = [
        '---',
        `title: ${escapeYaml(title)}`,
        `description: ${escapeYaml(description)}`,
        `date: ${escapeYaml(TODAY)}`,
        `category: ${escapeYaml(cat.name)}`,
        `categorySlug: ${escapeYaml(cat.slug)}`,
        `readTime: ${readTime ?? 5}`,
        seo ? `seo: ${escapeYaml(seo)}` : null,
        `hero: ${escapeYaml(`/blog/${slug}.png`)}`,
        `slug: ${escapeYaml(slug)}`,
        '---',
        '',
      ]
        .filter(Boolean)
        .join('\n')

      const out = frontmatter + '\n' + body
      await writeFile(join(CONTENT_DIR, `${slug}.md`), out, 'utf8')

      if (existsSync(heroPath)) {
        await copyFile(heroPath, join(PUBLIC_DIR, `${slug}.png`))
      } else {
        console.warn(`no hero.png for ${slug}`)
      }

      imported.push({ slug, title, category: cat.name })
    }
  }

  console.log(`imported ${imported.length} posts`)
  for (const p of imported) {
    console.log(`  ${p.category}: ${p.slug}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
