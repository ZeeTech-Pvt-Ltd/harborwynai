import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import { RATING, SITE_URL, TESTIMONIALS } from '../data/content'

export default function Reviews() {
  useMeta({
    title: 'Harborwyn AI Reviews - Verified Member Testimonials',
    description:
      'Read verified Harborwyn AI reviews and testimonials from members worldwide. See what traders say about the AI-assisted platform.',
    canonical: `${SITE_URL}/reviews`,
  })

  return (
    <main>
      {/* Hero - split: intro left, rating summary panel right */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="container hero__inner reviews-hero__split" data-reveal>
          <div>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              Reviews
            </span>
            <h1 style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Harborwyn AI <span className="accent">Reviews</span>
            </h1>
            <p className="hero__sub">
              Members from around the world trade on Harborwyn AI every day - from first-time
              traders finding their feet to experienced investors running diversified portfolios.
              Here is what they have to say about the platform.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/#register" className="btn btn--lime">
                Register
              </Link>
              <Link to="/faqs" className="btn btn--ghost">
                Read FAQs
              </Link>
            </div>
          </div>

          <div className="reviews-hero__panel" data-reveal>
            <div className="reviews-hero__score">
              <span className="reviews-hero__value">{RATING.score}</span>
              <div>
                <span className="reviews-hero__stars" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} name="star" size={17} />
                  ))}
                </span>
                <p>Based on {RATING.reviews} verified member reviews</p>
              </div>
            </div>
            <div className="rating-break">
              {RATING.breakdown.map(({ stars, pct }) => (
                <div className="rating-break__row" key={stars}>
                  <span>{stars}★</span>
                  <span className="rating-break__bar">
                    <span className="rating-break__fill" style={{ width: `${pct}%` }} />
                  </span>
                  <span>{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All member reviews in a grid */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Member reviews</span>
            <h2>What members are saying</h2>
            <p>Verified feedback from Harborwyn AI members across the globe.</p>
          </div>

          <div className="reviews-grid" data-reveal-grid>
            {TESTIMONIALS.map(({ name, location, initials, returnPct, quote }) => (
              <article className="testimonial" data-reveal key={name}>
                <div
                  className="testimonial__head"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span className="testimonial__stars" role="img" aria-label="5 star rating">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="star" size={16} filled />
                    ))}
                  </span>
                  <span className="testimonial__badge">
                    <Icon name="check" size={13} strokeWidth={2.5} />
                    Confirmed user
                  </span>
                </div>

                <p>“{quote}”</p>

                <div className="testimonial__author">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {initials}
                  </span>
                  <div>
                    <div className="testimonial__name">{name}</div>
                    <div className="testimonial__loc">{location}</div>
                  </div>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      fontSize: 16,
                    }}
                  >
                    {returnPct}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--tight">
        <div className="container faqs-cta">
          <h2>Ready to join the community?</h2>
          <p>Open an account from just $250 and see what the platform can do for you.</p>
          <Link to="/#register" className="btn btn--lime">
            Register
          </Link>
        </div>
      </section>
    </main>
  )
}
