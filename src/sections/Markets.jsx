import Icon from '../components/Icon'
import { MARKETS } from '../data/content'

// Section 9 - Markets. Verbatim.
export default function Markets() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Markets</h2>
        </div>

        <div className="benefits-grid cards-2x2" data-reveal-grid>
          {MARKETS.map(({ title, text, icon }) => (
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
