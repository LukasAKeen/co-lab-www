const logos = ['MERIDIAN', 'SENTRY', 'ACME', 'HELIX', 'NORTHWIND', 'VERTEX']

export default function LogoStrip() {
  return (
    <section className="border-y border-[#E7E7EE] bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14">
        <p className="eyebrow text-[#71768B] text-center mb-8">
          Powering revenue at growing teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-16 opacity-85">
          {logos.map((name) => (
            <div
              key={name}
              className="display text-[16px] sm:text-[18px] font-semibold tracking-[0.04em] text-[#3D4256]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
