export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{ background: 'linear-gradient(160deg, #06091a 0%, #0d1538 60%, #111827 100%)' }}
      className="relative overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#c9a84c' }} />

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">

        {/* Eyebrow */}
        <p className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-6 px-4 py-2 rounded-full"
          style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)' }}>
          No Fee Unless We Win &nbsp;·&nbsp; Free Consultation
        </p>

        {/* H1 */}
        <h1
          className="font-display text-white leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '0.01em' }}
        >
          INJURED?
          <br />
          <span style={{ color: '#c9a84c' }}>FIGHT BACK.</span>
          <br />
          GET PAID.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#94a3b8' }}>
          Our attorneys have recovered <strong className="text-white">$500M+</strong> for accident victims.
          We handle the legal battle — you focus on healing.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto px-10 py-5 text-base font-bold rounded-sm cursor-pointer"
            style={{ background: '#c9a84c', color: '#06091a', letterSpacing: '0.05em' }}
          >
            GET FREE CONSULTATION
          </button>
          <a
            href="tel:18005550100"
            className="flex items-center gap-2 text-white font-semibold hover:text-amber-300 transition-colors"
          >
            <PhoneIcon />
            <span>1-800-555-0100</span>
          </a>
        </div>

        {/* Urgency note */}
        <p className="mt-6 text-xs" style={{ color: '#64748b' }}>
          Statutes of limitations apply — don't wait. Available 24/7.
        </p>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.41 2 2 0 0 1 3.69 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.29 6.29l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
