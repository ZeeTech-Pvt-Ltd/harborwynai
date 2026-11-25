import { SIGNAL_STEPS } from '../data/content'

// Section 3 - How Harborwyn AI Signals Work. Dark steps band.
export default function SignalProcess() {
  return (
    <section className="steps-band" id="how-it-works">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>How Harborwyn AI Signals Work</h2>
        </div>

        <div className="steps-band__grid steps-band__grid--4" data-reveal-grid>
          {SIGNAL_STEPS.map(({ title, text }, i) => (
            <div className="steps-band__item" data-reveal key={title}>
              <span className="steps-band__num" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
