import { renderOgImage } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Co-Lab pricing'

export default async function Image() {
  return renderOgImage({
    kicker: 'Pricing',
    title: 'Simple pricing. No surprises.',
    subhead:
      'Starter free. Growth $35/seat/mo. Accelerate $55/seat/mo. 14-day trial on every plan.',
  })
}
