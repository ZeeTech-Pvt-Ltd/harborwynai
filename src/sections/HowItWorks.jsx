import { STEPS } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="steps-band has-coins" id="how-it-works">
      <img className="coin coin--xrp" src="/assets/img/coins/xrp-l-320.png" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <img className="coin coin--tether-l" src="/assets/img/coins/tether-l-320.png" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Three steps to your first trade</h2>
          <p>From sign-up to the markets in three simple steps.</p>
        </div>

        <div className="steps-band__grid" data-reveal-grid>
          {STEPS.map(({ title, text }, i) => (
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
  )
}
