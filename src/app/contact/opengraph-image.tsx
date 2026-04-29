import { renderOgImage } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Contact Co-Lab'

export default async function Image() {
  return renderOgImage({
    kicker: 'Contact',
    title: "Tell us what you're working on.",
    subhead:
      "We're a small team — every message reaches a person, not a ticket queue.",
  })
}
