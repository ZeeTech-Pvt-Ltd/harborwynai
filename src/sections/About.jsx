import Icon from '../components/Icon'
import { ABOUT_CARDS } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">About the platform</span>
          <h2>Meet the Harborwyn AI platform</h2>
          <p>
            Harborwyn AI is an online trading platform created for traders everywhere. It unites a
            broad range of markets in a single place, with tools that handle the heavy lifting so
            you can concentrate on the decisions that matter.
          </p>
        </div>

        <div className="grid-3" data-reveal-grid>
          {ABOUT_CARDS.map(({ title, text, icon }) => (
            <div className="feature feature--blue" data-reveal key={title}>
              <div className="feature__icon">
                <Icon name={icon} size={26} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 28, textAlign: 'center', color: 'var(--ink-muted)', fontSize: 15 }}>
          Open an account from just{' '}
          <strong style={{ color: 'var(--blue)' }}>$250</strong> - no experience required.
        </p>
      </div>
    </section>
  )
}
