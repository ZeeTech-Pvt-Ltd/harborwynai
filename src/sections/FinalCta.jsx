import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'

const POINTS = ['Free account in minutes', 'No experience needed']

// Closing conversion section on the slate background, above the footer.
// Mirrors the hero's split layout for a bookend feel.
export default function FinalCta() {
  return (
    <section
      className="hero cta-final"
      id="register-final"
      style={{ borderRadius: 'var(--radius-section) 0 0 0' }}
    >
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
            Join 4m+ members already trading with Bright Kapitune. Your free account takes minutes
            to open - no experience needed.
          </p>

          <div className="hero__points cta-final__points">
            {POINTS.map((point) => (
              <span className="hero__point" key={point}>
                <Icon name="check" size={16} strokeWidth={2.5} />
                {point}
              </span>
            ))}
          </div>
        </div>

        <RegistrationForm idPrefix="final" title="Create your free account" />
      </div>
    </section>
  )
}
