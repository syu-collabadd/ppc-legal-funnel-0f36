import { lazy, Suspense, useState, useRef, useEffect } from 'react'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import StickyMobileCTA from './components/StickyMobileCTA'
import './index.css'

const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const LeadForm = lazy(() => import('./components/LeadForm'))
const Footer = lazy(() => import('./components/Footer'))

function BelowFold() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { rootMargin: '200px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {visible && (
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading…</div>}>
          <HowItWorks />
          <Testimonials />
          <LeadForm />
          <Footer />
        </Suspense>
      )}
    </div>
  )
}

export default function App() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BelowFold />
      <StickyMobileCTA />
    </>
  )
}
