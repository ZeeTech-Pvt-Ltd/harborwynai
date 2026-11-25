import Link from 'next/link'
import Icon from '../components/Icon'
import { SECURITY_PRICING } from '../data/content'

// Section 13 - Security & Transparency. Verbatim, incl. the risk notice.
export default function SecurityPricing() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Security &amp; Transparency</h2>
        </div>

        <div className="benefits-grid cards-2x2" data-reveal-grid>
          {SECURITY_PRICING.map(({ title, text, icon }) => (
            <div className="benefit-card" data-reveal key={title}>
              <div className="benefit-card__icon">
                <Icon name={icon} size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="risk-notice" data-reveal>
          <strong>Risk notice</strong>
          <p>
            Trading is risky, and you may lose some or all of your money. Harborwyn AI signals
            are general information, not personal financial advice, and do not guarantee profits.
            Past performance is not a reliable indicator of future results.
          </p>
        </div>

        <div className="diff-cta" data-reveal>
          <Link href="/#register" className="btn btn--lime">
            Secure My Account
          </Link>
        </div>
      </div>
    </section>
  )
}
