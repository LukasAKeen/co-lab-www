import { renderOgImage } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'About Co-Lab'

export default async function Image() {
  return renderOgImage({
    kicker: 'About',
    title: "We're building the workspace where deals stay alive.",
    subhead:
      'Co-Lab is built by sales operators tired of watching deals die in the silence between meetings.',
  })
}
