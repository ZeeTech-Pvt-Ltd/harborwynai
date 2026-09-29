import Icon from '../components/Icon'
import { BENEFITS } from '../data/content'

export default function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Why trade</span>
          <h2>Why traders choose Harborwyn AI</h2>
          <p>
            Every detail of the platform is designed to clear away the hurdles that keep people
            out of the markets.
          </p>
        </div>

        <div className="benefits-grid" data-reveal-grid>
          {BENEFITS.map(({ title, text, icon }) => (
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
