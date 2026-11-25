import Icon from '../components/Icon'
import { AUDIENCE } from '../data/content'

// Section 12 - Who It's For. Verbatim.
export default function Audience() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Who It’s For</h2>
        </div>

        <div className="benefits-grid" data-reveal-grid>
          {AUDIENCE.map(({ title, text, icon }) => (
            <div className="benefit-card" data-reveal key={title}>
              <div className="benefit-card__icon">
                <Icon name={icon} size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
