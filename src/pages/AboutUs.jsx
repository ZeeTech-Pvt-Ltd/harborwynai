import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import {
  ABOUT_FEATURES,
  STATS,
  STORY_STEPS,
  SITE_URL,
  VALUES,
} from '../data/content'

const HERO_STATS = [
  { value: '98+', label: 'Market availability' },
  { value: '65+', label: 'Currency options' },
  { value: '24/7', label: 'Trading access' },
]

export default function AboutUs() {
  useMeta({
    title: 'About Bright Kapitune — AI-Powered Crypto Trading Platform',
    description:
      'About Bright Kapitune — our story, purpose, team and the transparency and controls behind the platform.',
    canonical: `${SITE_URL}/about-us`,
  })

  return (
    <main>
      {/* Hero — split: text left, frosted stats panel right */}
      <section className="hero about-hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          ABT
        </span>
        <div className="container hero__inner about-hero__split" data-reveal>
          <div>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              About us
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              Smart, automated crypto trading with <span className="accent">Bright Kapitune</span>
            </h1>
            <p className="hero__sub">
              Bright Kapitune supports market analysis, helping you assess opportunities, respond
              efficiently and invest with greater transparency.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/#register" className="btn btn--lime">
                Register
              </Link>
              <Link to="/contact-us" className="btn btn--ghost">
                Contact us
              </Link>
            </div>
          </div>

          <div className="about-hero__panel" data-reveal>
            {HERO_STATS.map(({ value, label }) => (
              <div className="about-hero__stat" key={label}>
                <span className="about-hero__stat-value">{value}</span>
                <span className="about-hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — numbered hairline rows */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">What we offer</span>
            <h2>Technology, security and personalised support</h2>
            <p>
              Our platform brings together automated market analysis and support resources to help
              you make more informed decisions.
            </p>
          </div>
          <div className="about-feature-list" data-reveal-grid>
            {ABOUT_FEATURES.map(({ title, text, icon }, i) => (
              <div className="about-feature-row" data-reveal key={title}>
                <span className="about-feature-row__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="about-feature-row__icon" aria-hidden="true">
                  <Icon name={icon} size={22} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform overview — numeral row */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Platform overview</span>
            <h2>Key platform areas at a glance</h2>
          </div>
          <div className="stats-grid" data-reveal>
            {STATS.map(({ value, label }) => (
              <div className="stat" key={label}>
                <div className="stat__value">{value}</div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story — slate band with lime numerals */}
      <section className="steps-band about-story">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>From a simple idea to a platform designed to make crypto trading accessible</h2>
          </div>
          <div className="steps-band__grid about-story-grid">
            {STORY_STEPS.map(({ title, text }, i) => (
              <div className="steps-band__item" data-reveal key={title}>
                <span className="steps-band__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our purpose — icon cards + long-term callout */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our purpose</span>
            <h2>What we believe and why we created Bright Kapitune</h2>
          </div>
          <div className="grid-3 about-values-grid" data-reveal-grid>
            {VALUES.map(({ title, text, icon }) => (
              <div className="feature" data-reveal key={title}>
                <div className="feature__icon">
                  <Icon name={icon} size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="about-longterm" data-reveal>
            <strong>Think long term</strong>
            <p>
              We are not focused on short-term gains. Bright Kapitune is built to support ongoing
              trading through stable technology, consistent service and continuous platform
              development.
            </p>
          </div>

          <p style={{ marginTop: 28, color: 'var(--ink-muted)', maxWidth: 90 + 'ch' }}>
            Whatever your experience level, Bright Kapitune is designed to help Australians trade
            with clarity. From your first crypto purchase to a diversified portfolio across forex,
            shares and commodities, the platform brings analysis, execution and account controls
            together in one place — so you can focus on the decisions that matter.
          </p>
        </div>
      </section>

    </main>
  )
}
