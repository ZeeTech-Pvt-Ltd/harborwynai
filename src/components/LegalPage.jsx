import useMeta from '../hooks/useMeta'
import { BRAND, CONTACT_EMAIL, SITE_URL } from '../data/content'

/**
 * Shared layout for legal pages. Content is template text — have a
 * lawyer review each page before launch.
 */
export default function LegalPage({ title, description, updated, children }) {
  const slug = title.toLowerCase().replace(/\s+/g, '-')
  useMeta({
    title: `${title} — ${BRAND}`,
    description,
    canonical: `${SITE_URL}/${slug}`,
  })

  return (
    <main className="legal">
      <h1>{title}</h1>
      <p className="legal__updated">Last updated: {updated}</p>
      <div className="legal__body">{children}</div>
    </main>
  )
}

export function LegalSection({ heading, children }) {
  return (
    <section>
      <h2>{heading}</h2>
      {children}
    </section>
  )
}

export function ContactNote() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this document, please contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </section>
  )
}
