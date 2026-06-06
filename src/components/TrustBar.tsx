const stats = [
  { icon: <ScaleIcon />, value: '30+', label: 'Years Experience' },
  { icon: <TrophyIcon />, value: '98%', label: 'Win Rate' },
  { icon: <DollarIcon />, value: '$500M+', label: 'Recovered' },
  { icon: <StarIcon />, label: 'No Fee Unless We Win', value: '★★★★★' },
]

export default function TrustBar() {
  return (
    <div className="border-b" style={{ background: '#f8f6f1', borderColor: '#e8e2d4' }}>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div style={{ color: '#c9a84c' }}>{s.icon}</div>
              <p className="font-display text-2xl md:text-3xl" style={{ color: '#06091a', letterSpacing: '0.02em' }}>
                {s.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: '#6b7280' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScaleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function DollarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
