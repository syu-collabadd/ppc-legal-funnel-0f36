export default function StickyMobileCTA() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{
        boxShadow: '0 -4px 20px rgba(0,0,0,0.25)',
        background: '#06091a',
        borderTop: '1px solid rgba(201,168,76,0.3)',
      }}
    >
      <a
        href="tel:18005550100"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold"
        style={{ color: '#c9a84c', borderRight: '1px solid rgba(201,168,76,0.2)' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.41 2 2 0 0 1 3.69 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.29 6.29l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        CALL NOW
      </a>
      <button
        onClick={scrollToForm}
        className="flex-1 py-4 text-sm font-bold cursor-pointer"
        style={{ background: '#c9a84c', color: '#06091a' }}
      >
        FREE CONSULTATION
      </button>
    </div>
  )
}
