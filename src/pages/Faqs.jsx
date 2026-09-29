import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import useMeta from '../hooks/useMeta'
import { FAQS_PAGE, FAQ_QUICK_CARDS, SITE_URL } from '../data/content'

export default function Faqs() {
  useMeta({
    title: 'Harborwyn AI FAQs - Fees, Security & How It Works',
    canonical: `${SITE_URL}/faqs`,
    description:
      'Harborwyn AI frequently asked questions - how the platform works, security, withdrawals, fees, and more.',
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_PAGE.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero header, modeled on the reference site's "Here to Help" */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(64px, 8vw, 110px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              FAQs
            </span>
            <h1 style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Harborwyn AI <span className="accent">FAQs</span>
            </h1>
            <p className="hero__sub">
              Getting started, managing a portfolio or simply needing account help - we can answer
              the most common platform questions. Harborwyn AI is built for traders worldwide,
              from first-timers exploring crypto to seasoned investors running a diversified
              portfolio.
            </p>

            <div className="faqs-quick" data-reveal>
              {FAQ_QUICK_CARDS.map(({ title, text }) => (
                <div className="faqs-quick__card" key={title}>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full question list */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about trading on Harborwyn AI.</p>
          </div>

          <FaqList items={FAQS_PAGE} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--tight">
        <div className="container faqs-cta">
          <h2>Can&apos;t find the answer you need?</h2>
          <p>Our team is ready to help with anything else.</p>
          <Link to="/contact-us" className="btn btn--lime">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
