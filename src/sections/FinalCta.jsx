import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

const POINTS = ['Free account in minutes', 'No experience needed']

// Closing conversion section, styled as a floating gradient card above
// the solid navy footer - CTA-only, points to the registration form in
// the hero.
export default function FinalCta() {
  return (
    <section className="hero cta-final" id="register-final">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <span className="cta-final__ghost" aria-hidden="true">
        09
      </span>

      <div className="container hero__inner cta-final__inner" data-reveal>
        <div>
          <h2 className="cta-final__heading">
            Ready to start your <span className="accent">trading journey?</span>
          </h2>
          <p className="hero__sub">
            Join 4m+ members who already trade with Harborwyn AI. A free account takes minutes to
            open - and no experience is needed.
          </p>

          <div className="hero__points cta-final__points">
            {POINTS.map((point) => (
              <span className="hero__point" key={point}>
                <Icon name="check" size={16} strokeWidth={2.5} />
                {point}
              </span>
            ))}
          </div>

          <div className="cta-final__actions">
            <a className="btn btn--lime" href="#register">
              Open an account
            </a>
            <Link className="btn btn--ghost" to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
