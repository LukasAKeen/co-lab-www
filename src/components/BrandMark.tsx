type BrandMarkProps = {
  size?: number
  variant?: 'iris' | 'navy' | 'white'
  className?: string
}

export default function BrandMark({ size = 28, variant = 'iris', className = '' }: BrandMarkProps) {
  const palette = {
    iris: { bg: 'linear-gradient(135deg, #5B5BD6 0%, #4040C0 100%)', fg: '#FFFFFF' },
    navy: { bg: '#0B0E1A', fg: '#FFFFFF' },
    white: { bg: '#FFFFFF', fg: '#0B0E1A' },
  }[variant]

  const radius = Math.round(size * 0.29)
  const fontSize = Math.round(size * 0.46)

  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: radius,
        background: palette.bg,
        color: palette.fg,
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.05em',
        fontSize,
        lineHeight: 1,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
      }}
    >
      Co
    </span>
  )
}
