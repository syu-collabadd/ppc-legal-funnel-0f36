const steps = [
  {
    num: '01',
    title: 'Tell Us What Happened',
    body: 'Call or fill out the form. A case manager reviews your situation in minutes — no legal jargon, no pressure.',
  },
  {
    num: '02',
    title: 'We Build Your Case',
    body: 'Our attorneys gather evidence, handle insurance negotiations, and file all paperwork on your behalf.',
  },
  {
    num: '03',
    title: 'You Get Paid',
    body: 'We fight for the maximum settlement. You pay nothing unless we win — guaranteed.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3 text-center" style={{ color: '#c9a84c' }}>
          Simple Process
        </p>
        <h2
          className="font-display text-center mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#06091a', lineHeight: 1.05 }}
        >
          HOW IT WORKS
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
          {/* connector line on desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c 20%, #c9a84c 80%, transparent)' }}
          />
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center relative">
              <div
                className="font-display text-5xl mb-4 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                style={{ background: '#06091a', color: '#c9a84c', fontSize: '1.5rem', border: '2px solid #c9a84c' }}
              >
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#06091a' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
