import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { RATING } from '../data/content'

const HIGHLIGHTS = ['Smart market analysis', 'Orders in an instant', 'Open 24/7']

export default function Hero() {
  return (
    <section className="hero" id="register">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <img className="coin coin--btc" src="/assets/img/coins/bitcoin-r-320.webp" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <img className="coin coin--eth" src="/assets/img/coins/ethereum-f-320.webp" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <img className="coin coin--sol" src="/assets/img/coins/solana-l-320.webp" alt="" loading="lazy" decoding="async" fetchPriority="low" />

      <div className="container hero__inner">
        <div>
          <span className="hero__eyebrow">
            <span className="dot" aria-hidden="true" />
            Your AI-assisted trading partner
          </span>

          <h1>
            Harborwyn AI <span className="accent">Platform</span>
          </h1>

          <p className="hero__sub">
            An AI-assisted trading platform that brings crypto and traditional markets together,
            with tools that make trading feel effortless.
          </p>

          <div className="hero__points">
            {HIGHLIGHTS.map((point) => (
              <span className="hero__point" key={point}>
                <Icon name="check" size={16} strokeWidth={2.5} />
                {point}
              </span>
            ))}
          </div>

          <div
            className="rating"
            style={{ marginTop: 28, color: 'var(--on-slate)' }}
            aria-label={`Rated ${RATING.score} out of 5 from ${RATING.reviews} reviews`}
          >
            <span className="rating__stars" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} name="star" size={18} />
              ))}
            </span>
            <span className="rating__score">{RATING.score}/5</span>
            <span style={{ opacity: 0.75, fontSize: 14 }}>based on {RATING.reviews} reviews</span>
          </div>
        </div>

        <RegistrationForm
          idPrefix="hero"
          title="Create your free account"
          subtitle="Join 4m+ members and make your first trade in minutes."
        />
      </div>
    </section>
  )
}
