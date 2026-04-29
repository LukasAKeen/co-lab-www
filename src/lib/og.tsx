import { ImageResponse } from 'next/og'

export const ogImageSize = { width: 1200, height: 630 } as const
export const ogImageContentType = 'image/png' as const

type RenderProps = {
  kicker: string
  title: string
  subhead?: string
}

// Note: ImageResponse uses system sans by default. We can swap to Inter
// later by dropping inter-700.ttf + inter-500.ttf into src/lib/fonts/
// and reading them via fs.readFile (Google Fonts CSS only serves woff2,
// which Satori doesn't support).

export async function renderOgImage({ kicker, title, subhead }: RenderProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FBFBFD',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Iris glow at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 460,
            background:
              'radial-gradient(ellipse 800px 320px at 50% -10%, rgba(91,91,214,0.20) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Brand mark + wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #5B5BD6 0%, #4040C0 100%)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            Co
          </div>
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: '#0B0E1A',
              letterSpacing: '-0.025em',
            }}
          >
            Co-Lab
          </span>
        </div>

        {/* Body */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#5B5BD6',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: 28,
              display: 'flex',
            }}
          >
            — &nbsp;{kicker}
          </span>

          <h1
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: '#0B0E1A',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              margin: 0,
              marginBottom: subhead ? 24 : 0,
              maxWidth: 1000,
              display: 'flex',
            }}
          >
            {title}
          </h1>

          {subhead && (
            <p
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: '#3D4256',
                lineHeight: 1.35,
                margin: 0,
                maxWidth: 940,
                display: 'flex',
              }}
            >
              {subhead}
            </p>
          )}
        </div>

        {/* Hairline at bottom */}
        <div
          style={{
            position: 'absolute',
            left: 80,
            right: 80,
            bottom: 32,
            height: 1,
            background: '#E7E7EE',
            display: 'flex',
          }}
        />

        {/* URL stamp at bottom right */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            bottom: 40,
            fontSize: 16,
            fontWeight: 500,
            color: '#71768B',
            letterSpacing: '0.08em',
            display: 'flex',
          }}
        >
          colabapp.ai
        </div>
      </div>
    ),
    {
      ...ogImageSize,
    },
  )
}
