/**
 * One-shot: rewrite the `date:` frontmatter line on each blog post
 * to follow the README's 25-week recommended order, but compressed
 * to a 3-per-week (Mon/Wed/Fri) cadence ending Mon 2026-04-27.
 *
 * Run:  node scripts/update-blog-dates.mjs
 */

import { readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const repoRoot = join(__dirname, '..')
const CONTENT_DIR = join(repoRoot, 'src/content/blog')

// README "Suggested 25-week posting cadence" — chronological order
// (week 1 = oldest, week 25 = most recent).
const ORDER = [
  '01-what-is-a-digital-sales-room',
  '03-transcript-to-deal-room',
  '01-engagement-signals',
  '01-mutual-action-plans',
  '01-sales-coaching-at-scale',
  '02-deal-rooms-vs-decks',
  '01-ai-sales-stack',
  '02-crm-misses-buyer-journey',
  '02-discovery-call-generates-pod',
  '02-forecasting-with-engagement',
  '03-five-blocks-every-deal-room',
  '05-call-transcripts-beyond-notes',
  '03-reading-buyer-activity',
  '04-closing-velocity',
  '04-sales-tools-audit',
  '04-close-without-another-call',
  '02-ai-wrappers',
  '04-champion-vetting',
  '03-multi-threaded-selling',
  '03-onboarding-aes-14-days',
  '05-death-of-the-cycle',
  '04-limits-of-ai',
  '05-stalled-deals',
  '05-quick-sync-cost',
  '05-renewal-risk-handoff',
]

// Mon/Wed/Fri pattern, most recent first. Walks BACKWARDS from
// 2026-04-27 (Mon), so position 0 in this list is the latest post.
function buildDates(count, endDateIso) {
  const dates = []
  const cur = new Date(endDateIso + 'T00:00:00Z') // Mon
  // pattern stepping backwards: Mon → Fri → Wed → Mon → ...
  // (since we're walking back, the gaps are 3, 2, 2 days)
  const steps = [3, 2, 2]
  let i = 0
  while (dates.length < count) {
    dates.push(cur.toISOString().slice(0, 10))
    cur.setUTCDate(cur.getUTCDate() - steps[i % steps.length])
    i++
  }
  return dates // [latest, ..., oldest]
}

async function main() {
  const datesNewestFirst = buildDates(ORDER.length, '2026-04-27')
  // Map: slug -> date. ORDER is oldest → newest, datesNewestFirst is newest → oldest.
  const slugToDate = new Map()
  for (let i = 0; i < ORDER.length; i++) {
    slugToDate.set(ORDER[i], datesNewestFirst[ORDER.length - 1 - i])
  }

  let touched = 0
  for (const slug of ORDER) {
    const path = join(CONTENT_DIR, `${slug}.md`)
    const raw = await readFile(path, 'utf8')
    const newDate = slugToDate.get(slug)
    if (!newDate) {
      console.warn(`no date for ${slug}`)
      continue
    }
    const updated = raw.replace(/^date:\s*"[^"]*"\s*$/m, `date: "${newDate}"`)
    if (updated === raw) {
      console.warn(`no date frontmatter found in ${slug}`)
      continue
    }
    await writeFile(path, updated, 'utf8')
    console.log(`${slug.padEnd(40)} → ${newDate}`)
    touched++
  }
  console.log(`updated ${touched} posts`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
