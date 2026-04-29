import type { ReactNode } from 'react'

type SectionHeaderProps = {
  anchor: string
  kicker: string
  title: ReactNode
  subhead: ReactNode
  dark?: boolean
}

export default function SectionHeader({
  anchor,
  kicker,
  title,
  subhead,
  dark = false,
}: SectionHeaderProps) {
  const titleColor = dark ? 'text-white' : 'text-[#0B0E1A]'
  const subColor = dark ? 'text-[#A8AECB]' : 'text-[#3D4256]'
  const kickerColor = dark ? 'text-[#8C8CFF]' : 'text-[#5B5BD6]'

  return (
    <div className="max-w-[1320px] mx-auto mb-12 md:mb-14">
      <div className={`inline-flex items-center gap-2 eyebrow ${kickerColor}`}>
        <span className="inline-block w-3.5 h-px bg-current" />
        <span>
          {anchor} · {kicker}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 md:gap-16 items-end mt-4">
        <h2
          className={`display ${titleColor} text-3xl sm:text-4xl md:text-5xl lg:text-[60px] tracking-[-0.035em] leading-[1.0]`}
        >
          {title}
        </h2>
        <p className={`${subColor} text-[16px] md:text-[17px] leading-[1.55] tracking-[-0.005em]`}>
          {subhead}
        </p>
      </div>
    </div>
  )
}
