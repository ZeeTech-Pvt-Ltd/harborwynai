import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import useMeta from '../hooks/useMeta'
import { BRAND, FAQS_PAGE, FAQ_QUICK_CARDS, SITE_URL } from '../data/content'

export default function Faqs() {
  useMeta({
    title: `FAQs — ${BRAND}`,
    canonical: `${SITE_URL}/faqs`,
    description:
      'Bright Kapitune frequently asked questions — how the platform works, security, withdrawals, fees, and more.',
  })

  return (
    <main>
      {/* Hero header, modeled on the reference site's "Here to Help" */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          FAQ
        </span>
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(64px, 8vw, 110px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              FAQs
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              Here to <span className="accent">Help</span>
            </h1>
            <p className="hero__sub">
              Whether you are getting started, managing your portfolio or need help with your
              account, we can answer common platform questions.
            </p>

            <div className="faqs-quick" data-reveal>
              {FAQ_QUICK_CARDS.map(({ title, text }) => (
                <div className="faqs-quick__card" key={title}>
                  <h3>{title}</h3>
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
            <p>Everything you need to know about trading with Bright Kapitune.</p>
          </div>

          <FaqList items={FAQS_PAGE} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--tight">
        <div className="container faqs-cta">
          <h2>Can&apos;t find what you&apos;re looking for?</h2>
          <p>Our team is ready to help with anything else you need.</p>
          <Link to="/contact-us" className="btn btn--lime">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
