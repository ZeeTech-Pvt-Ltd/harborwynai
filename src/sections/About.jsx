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
            Harborwyn AI is an online trading platform built for traders worldwide. It brings a
            broad range of markets together in one place, with tools that do the heavy lifting so
            you can focus on the decisions that matter.
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
          Start with a minimum deposit of just{' '}
          <strong style={{ color: 'var(--blue)' }}>$250</strong> - no experience required.
        </p>
      </div>
    </section>
  )
}
