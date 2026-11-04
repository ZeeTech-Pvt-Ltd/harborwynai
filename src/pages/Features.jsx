import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import Benefits from '../sections/Benefits'
import Security from '../sections/Security'
import { FEATURES_MARKETS, SITE_URL } from '../data/content'

export default function Features() {
  useMeta({
    title: 'Harborwyn AI Features - Smart Tools for Crypto Trading',
    description:
      'Explore Harborwyn AI features - AI-assisted market analysis, fast execution, bank-grade security and 24/7 trading from a single dashboard.',
    canonical: `${SITE_URL}/features`,
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
              Features
            </span>
            <h1 style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Harborwyn AI <span className="accent">Features</span>
            </h1>
            <p className="hero__sub">
              Every part of Harborwyn AI is built to clear away the hurdles that keep people out
              of the markets - from smart analysis and fast execution to bank-grade security and
              around-the-clock access.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/#register" className="btn btn--lime">
                Register
              </Link>
              <Link to="/how-it-works" className="btn btn--ghost">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why traders choose us - shared with home */}
      <Benefits />

      {/* Security - shared with home */}
      <Security />

      {/* Markets */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Markets</span>
            <h2>Trade across multiple markets</h2>
            <p>
              From a single Harborwyn AI account you can trade a broad mix of instruments through
              partnered, regulated brokers.
            </p>
          </div>

          <div className="benefits-grid" data-reveal-grid>
            {FEATURES_MARKETS.map(({ title, text, icon }) => (
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
          <h2>See the features in action</h2>
          <p>Open an account from just $250 and explore the platform for yourself.</p>
          <Link to="/#register" className="btn btn--lime">
            Register
          </Link>
        </div>
      </section>
    </main>
  )
}
