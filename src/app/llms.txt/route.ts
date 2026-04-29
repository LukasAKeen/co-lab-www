import { getAllPosts } from '@/lib/blog'

const SITE_URL = 'https://colabapp.ai'

export const dynamic = 'force-static'
export const revalidate = false

const HEADER = `# Co-Lab

> Co-Lab is the sales enablement workspace where AEs build buyer-facing micro-sites for every deal — with live engagement tracking, mutual action plans, and an AI coach that drafts the first version of each room and flags stalling deals.

Co-Lab is built for B2B sales teams. "Pods" are personalized, trackable deal rooms — a single buyer-facing URL where decks, pricing, video, mutual action plans, and follow-ups live together. The AI coach drafts pods from call transcripts, scores buyer intent in real time, and surfaces deals that have gone quiet. Humans still close the deals; AI handles the busywork between meetings.

The product itself lives at https://app.colabapp.ai. This site (https://colabapp.ai) is the marketing site and blog.

## Key pages

- [Home](${SITE_URL}/): Product overview, hero feature walkthroughs, pricing summary
- [Pricing](${SITE_URL}/pricing): Starter (free, 3 pods), Growth ($35/seat/mo, 20 pods + Close CRM/Slack), Accelerate ($55/seat/mo, unlimited + AI Pod Builder + Salesforce/HubSpot/Zapier), Enterprise (custom — SSO/SAML/SCIM, audit logs, dedicated CSM, SLA, volume pricing)
- [About](${SITE_URL}/about): Why Co-Lab exists, what we're building toward, how we ship
- [Blog](${SITE_URL}/blog): Long-form field notes on AI sales, digital sales rooms, buyer intelligence, sales process, and revenue operations
- [Contact](${SITE_URL}/contact): Direct contact form for prospects, partners, and press

## RSS

The blog publishes RSS at [${SITE_URL}/feed.xml](${SITE_URL}/feed.xml).
`

const CATEGORY_ORDER: { slug: string; name: string }[] = [
  { slug: 'ai-sales', name: 'AI in Sales' },
  { slug: 'deal-rooms', name: 'Digital Sales Rooms' },
  { slug: 'buyer-intel', name: 'Buyer Intelligence' },
  { slug: 'sales-process', name: 'Sales Process' },
  { slug: 'revops', name: 'RevOps & Sales Leadership' },
]

export async function GET() {
  const posts = await getAllPosts()
  const byCategory = new Map<string, typeof posts>()
  for (const post of posts) {
    if (!byCategory.has(post.categorySlug)) byCategory.set(post.categorySlug, [])
    byCategory.get(post.categorySlug)!.push(post)
  }

  const sections = CATEGORY_ORDER.map(({ slug, name }) => {
    const items = byCategory.get(slug) ?? []
    if (items.length === 0) return null
    const lines = items.map(
      (post) =>
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`,
    )
    return `### ${name}\n\n${lines.join('\n')}\n`
  })
    .filter(Boolean)
    .join('\n')

  const body = `${HEADER}
## Blog posts

${sections}
## Voice & positioning

Co-Lab's content is direct, numbers-forward, and operationally specific. We don't use "growth hacking" language. We're skeptical of vendor pitches and willing to take contrarian positions on industry orthodoxy. Our positioning frames AI as a deal coach (not a replacement for the AE) and the product as a workspace where deals actually happen — not another dashboard.
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
