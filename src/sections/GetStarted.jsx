import Link from 'next/link'
import { GET_STARTED_STEPS } from '../data/content'

// Section 8 - How to Get Started. Light steps band, verbatim.
export default function GetStarted() {
  return (
    <section className="steps-band steps-band--light">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Your First Signal in 4 Simple Steps</h2>
        </div>

        <div className="steps-band__grid steps-band__grid--4" data-reveal-grid>
          {GET_STARTED_STEPS.map(({ title, text }, i) => (
            <div className="steps-band__item" data-reveal key={title}>
              <span className="steps-band__num" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="diff-cta" data-reveal>
          <Link href="/#register" className="btn btn--lime">
            Start My Registration
          </Link>
        </div>
      </div>
    </section>
  )
}
