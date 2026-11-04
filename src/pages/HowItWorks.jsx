import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import HowItWorksSection from '../sections/HowItWorks'
import { SITE_URL, TRADING_MODES } from '../data/content'

export default function HowItWorks() {
  useMeta({
    title: 'How It Works - Harborwyn AI Trading Explained Simply',
    description:
      'How Harborwyn AI works - sign up, deposit from $250 and start trading. Let the AI manage trades or drive manually through partnered, regulated brokers.',
    canonical: `${SITE_URL}/how-it-works`,
  })

  return (
    <main>
      {/* Hero header */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div
          className="container hero__inner"
          data-reveal
          style={{ paddingBlock: 'clamp(64px, 8vw, 110px)', gridTemplateColumns: '1fr' }}
        >
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              How it works
            </span>
            <h1 style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Smart trading, handled <span className="accent">for you</span>
            </h1>
            <p className="hero__sub">
              Harborwyn AI scans the markets around the clock, spots potential opportunities and
              places trades through partnered, regulated brokers - while every setting stays
              under your control.
            </p>
            <div className="hero__points">
              <span className="hero__point">Automated or manual</span>
              <span className="hero__point">Partnered, regulated brokers</span>
              <span className="hero__point">Start from just $250</span>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/#register" className="btn btn--lime">
                Register
              </Link>
              <Link to="/faqs" className="btn btn--ghost">
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three steps - shared with home, light variant under the dark hero */}
      <HowItWorksSection variant="light" />

      {/* Automated vs manual */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Your choice</span>
            <h2>Automated or manual - you decide</h2>
            <p>
              Harborwyn AI fits whatever style of trading suits you best, and you can switch
              between modes at any time.
            </p>
          </div>

          <div className="benefits-grid" data-reveal-grid>
            {TRADING_MODES.map(({ title, text, icon }) => (
              <div className="benefit-card" data-reveal key={title}>
                <div className="benefit-card__icon">
                  <Icon name={icon} size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--tight">
        <div className="container faqs-cta">
          <h2>Ready to make your first trade?</h2>
          <p>Sign up, add $250 or more, and you&apos;re in.</p>
          <Link to="/#register" className="btn btn--lime">
            Register
          </Link>
        </div>
      </section>
    </main>
  )
}
