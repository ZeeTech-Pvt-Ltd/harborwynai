import Icon from '../components/Icon'
import { HIGHLIGHTS } from '../data/content'

// Section 6 - Quick Highlights. Verbatim.
export default function Highlights() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Quick Highlights</h2>
        </div>

        <div className="benefits-grid cards-2x2" data-reveal-grid>
          {HIGHLIGHTS.map(({ text, icon }) => (
            <div className="benefit-card" data-reveal key={text}>
              <div className="benefit-card__icon">
                <Icon name={icon} size={24} />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
