import { renderOgImage } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Co-Lab Blog'

export default async function Image() {
  return renderOgImage({
    kicker: 'Blog',
    title: 'Field notes from the front lines of revenue.',
    subhead:
      'AI sales, digital sales rooms, buyer intelligence, and the operational details that decide which deals close.',
  })
}
