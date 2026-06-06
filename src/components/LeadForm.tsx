import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'done'

const injuryTypes = [
  'Car / Truck Accident',
  'Motorcycle Accident',
  'Slip & Fall',
  'Workplace Injury',
  'Medical Malpractice',
  'Dog Bite',
  'Wrongful Death',
  'Other',
]

export default function LeadForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', injury: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.injury) e.injury = 'Please select an injury type'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setState('submitting')
    setTimeout(() => setState('done'), 1200)
  }

  const field = (id: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={e => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: '' })) }}
        className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all"
        style={{
          border: errors[id] ? '1.5px solid #ef4444' : '1.5px solid #d1d5db',
          background: '#fff',
          color: '#111',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.15)' }}
        onBlur={e => { e.currentTarget.style.borderColor = errors[id] ? '#ef4444' : '#d1d5db'; e.currentTarget.style.boxShadow = 'none' }}
      />
      {errors[id] && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors[id]}</p>}
    </div>
  )

  return (
    <section id="contact-form" className="py-20 md:py-28" style={{ background: '#06091a' }}>
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3 text-center" style={{ color: '#c9a84c' }}>
          Free — No Obligation
        </p>
        <h2
          className="font-display text-center mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 1.05 }}
        >
          GET YOUR FREE<br />CASE REVIEW
        </h2>
        <p className="text-center mb-12 text-sm" style={{ color: '#94a3b8' }}>
          Tell us what happened. We'll review your case and contact you within 1 business hour.
        </p>

        {state === 'done' ? (
          <div className="text-center py-16 px-8 rounded-sm" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}>
            <div className="text-5xl mb-6">✓</div>
            <h3 className="font-display text-3xl mb-3" style={{ color: '#c9a84c' }}>WE'VE GOT YOUR CASE</h3>
            <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>
              A case manager will call you within the next business hour. Check your email for a confirmation.
            </p>
            <p className="text-sm font-semibold" style={{ color: '#fff' }}>
              Need to talk now? Call us: <a href="tel:18005550100" style={{ color: '#c9a84c' }}>1-800-555-0100</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {field('name', 'Full Name', 'text', 'Jane Smith')}
            {field('phone', 'Phone Number', 'tel', '(555) 000-0000')}
            {field('email', 'Email Address', 'email', 'jane@email.com')}

            <div>
              <label htmlFor="injury" className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>
                Type of Injury / Accident
              </label>
              <select
                id="injury"
                value={form.injury}
                onChange={e => { setForm(f => ({ ...f, injury: e.target.value })); setErrors(er => ({ ...er, injury: '' })) }}
                className="w-full px-4 py-3 text-sm rounded-sm outline-none"
                style={{
                  border: errors.injury ? '1.5px solid #ef4444' : '1.5px solid #d1d5db',
                  background: '#fff',
                  color: form.injury ? '#111' : '#9ca3af',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                }}
              >
                <option value="">Select injury type…</option>
                {injuryTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.injury && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.injury}</p>}
            </div>

            <button
              type="submit"
              disabled={state === 'submitting'}
              className="w-full py-4 text-base font-bold rounded-sm mt-2 transition-all cursor-pointer disabled:opacity-70"
              style={{ background: '#c9a84c', color: '#06091a', letterSpacing: '0.05em' }}
            >
              {state === 'submitting' ? 'SUBMITTING…' : 'GET MY FREE CONSULTATION →'}
            </button>

            <p className="text-xs text-center" style={{ color: '#4b5563' }}>
              By submitting you agree to be contacted. We never sell your information.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
