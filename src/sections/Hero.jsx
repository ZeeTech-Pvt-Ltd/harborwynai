import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'

export default function Hero() {
  return (
    <section className="hero" id="register">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <img className="coin coin--btc" src="/assets/img/coins/bitcoin-r-320.webp" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <img className="coin coin--eth" src="/assets/img/coins/ethereum-f-320.webp" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <img className="coin coin--sol" src="/assets/img/coins/solana-l-320.webp" alt="" loading="lazy" decoding="async" fetchPriority="low" />

      <div className="container hero__inner hero__inner--compact">
        <div>
          <h1>
            Turn Market Moves Into Clear Trade Plans With{' '}
            <span className="accent">Harborwyn AI</span>
          </h1>

          <p className="hero__sub">
            The markets move all day, but you don’t have to watch them. Harborwyn AI does the
            watching for you and sends a ready-made plan whenever a worthwhile opportunity shows
            up.
          </p>

          <p className="hero__micro">
            <span className="hero__micro-item">
              <Icon name="clock" size={15} strokeWidth={2.2} />
              Sign up in minutes
            </span>
            <span className="hero__micro-dot" aria-hidden="true">·</span>
            <span className="hero__micro-item">
              <Icon name="receipt" size={15} strokeWidth={2.2} />
              Upfront fees
            </span>
            <span className="hero__micro-dot" aria-hidden="true">·</span>
            <span className="hero__micro-item">
              <Icon name="shield" size={15} strokeWidth={2.2} />
              Protected personal data
            </span>
          </p>
        </div>

        <RegistrationForm idPrefix="hero" title="Create a Free Account" />
      </div>
    </section>
  )
}
