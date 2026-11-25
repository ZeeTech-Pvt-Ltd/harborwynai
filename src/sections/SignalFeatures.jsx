import Icon from '../components/Icon'
import { SIGNAL_FEATURES } from '../data/content'

// Section 10 - Features. Centered hairline list, verbatim copy.
export default function SignalFeatures() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Features</h2>
        </div>

        <div className="feature-list" data-reveal-grid>
          {SIGNAL_FEATURES.map(({ title, text, icon }) => (
            <div className="feature-row" data-reveal key={title}>
              <span className="feature-row__icon" aria-hidden="true">
                <Icon name={icon} size={22} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
