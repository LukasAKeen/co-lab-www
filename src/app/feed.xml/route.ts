import { getAllPosts } from '@/lib/blog'

const SITE_URL = 'https://colabapp.ai'

export const dynamic = 'force-static'
export const revalidate = false

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function escapeCdata(str: string): string {
  return str.replace(/]]>/g, ']]]]><![CDATA[>')
}

function rfc822(iso: string): string {
  const d = iso ? new Date(iso + 'T00:00:00Z') : new Date()
  if (Number.isNaN(d.getTime())) return new Date().toUTCString()
  return d.toUTCString()
}

export async function GET() {
  const posts = await getAllPosts()
  const lastBuild = posts[0]?.date ? rfc822(posts[0].date) : new Date().toUTCString()

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <description><![CDATA[${escapeCdata(post.description)}]]></description>
      <category>${escapeXml(post.category)}</category>
      <dc:creator>Co-Lab</dc:creator>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Co-Lab Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Field notes on AI sales, digital sales rooms, buyer intelligence, and modern revenue operations from the Co-Lab team.</description>
    <language>en-US</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
