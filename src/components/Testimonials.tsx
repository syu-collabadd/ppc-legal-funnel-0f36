const reviews = [
  {
    name: 'Maria T.',
    location: 'Los Angeles, CA',
    injury: 'Car Accident',
    stars: 5,
    text: 'After my accident the insurance company offered me almost nothing. This firm fought hard and I ended up with 8× what was originally offered. They handled everything — I just had to heal.',
    award: '$340,000 settlement',
  },
  {
    name: 'James R.',
    location: 'Houston, TX',
    injury: 'Slip & Fall',
    stars: 5,
    text: 'I was skeptical but they took my case seriously from the first call. Within 6 months we had a settlement that covered all my medical bills and lost wages. Truly no fee unless you win.',
    award: '$127,500 settlement',
  },
  {
    name: 'Priya S.',
    location: 'Chicago, IL',
    injury: 'Workplace Injury',
    stars: 5,
    text: 'Professional, responsive, and genuinely caring. They never made me feel like just another case number. I highly recommend them to anyone who has been wrongfully injured.',
    award: '$89,000 settlement',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c9a84c">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#f8f6f1' }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3 text-center" style={{ color: '#c9a84c' }}>
          Client Results
        </p>
        <h2
          className="font-display text-center mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#06091a', lineHeight: 1.05 }}
        >
          REAL RESULTS.<br />REAL PEOPLE.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-7 rounded-sm flex flex-col"
              style={{ background: '#fff', border: '1px solid #e8e2d4', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            >
              <Stars count={r.stars} />
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#374151' }}>"{r.text}"</p>
              <div
                className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm mb-4 inline-block self-start"
                style={{ background: 'rgba(201,168,76,0.12)', color: '#a37f28' }}
              >
                {r.award}
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#06091a' }}>{r.name}</p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>{r.location} · {r.injury}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-8" style={{ color: '#9ca3af' }}>
          *Results may vary. Prior results do not guarantee similar outcomes.
        </p>
      </div>
    </section>
  )
}
