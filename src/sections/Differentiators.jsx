import Link from 'next/link'
import Icon from '../components/Icon'
import { DIFFERENTIATORS } from '../data/content'

const ICONS = ['star', 'eye', 'clock', 'headset']

// Section 7 - Why Choose Us. Blue band with frosted cards, verbatim copy.
export default function Differentiators() {
  return (
    <section className="diff-band">
      <div className="container">
        <div className="diff-head" data-reveal>
          <h2>Why Choose Us</h2>
          <Link href="/about-us" className="btn btn--lime">
            Learn More About Harborwyn AI
          </Link>
        </div>

        <div className="diff-grid" data-reveal-grid>
          {DIFFERENTIATORS.map(({ title, text }, i) => (
            <div className="diff-card" data-reveal key={title}>
              <span className="diff-card__icon" aria-hidden="true">
                <Icon name={ICONS[i]} size={22} />
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
