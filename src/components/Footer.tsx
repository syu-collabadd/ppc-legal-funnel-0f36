export default function Footer() {
  return (
    <footer style={{ background: '#030612', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="font-display text-2xl mb-2" style={{ color: '#c9a84c' }}>
          JUSTICE LAW GROUP
        </p>
        <a
          href="tel:18005550100"
          className="text-lg font-semibold mb-8 block"
          style={{ color: '#fff' }}
        >
          1-800-555-0100
        </a>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm" style={{ color: '#6b7280' }}>
          <span>Available 24/7</span>
          <span>·</span>
          <span>No Fee Unless We Win</span>
          <span>·</span>
          <span>Free Consultations</span>
        </div>
        <p className="text-xs leading-relaxed max-w-2xl mx-auto" style={{ color: '#374151' }}>
          <strong style={{ color: '#4b5563' }}>Legal Disclaimer:</strong> The information on this website is for general informational purposes only and is not legal advice. Prior results do not guarantee similar outcomes. Attorney advertising. Results may vary. This firm is not responsible for actions taken based on information found on this site. Contingency fees apply only if you win. Consult an attorney for advice about your individual situation.
        </p>
        <p className="text-xs mt-6" style={{ color: '#374151' }}>
          © {new Date().getFullYear()} Justice Law Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
