import { SAMPLE_ALERT } from '../data/content'

// Section 4 - What a Harborwyn AI Alert Looks Like. Verbatim.
export default function SampleAlert() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>What a Harborwyn AI Alert Looks Like</h2>
          <p>
            Every alert follows the same tidy format, so you never have to hunt for information.
            The example below is for illustration only and is not a real trade.
          </p>
        </div>

        <div className="alert-card" data-reveal>
          <div className="alert-card__head">
            <div className="alert-card__id">
              <span className="alert-card__pair">{SAMPLE_ALERT.pair}</span>
              <span className="alert-card__badge">{SAMPLE_ALERT.direction}</span>
            </div>
            <span className="alert-card__label">Illustration only - not a real trade</span>
          </div>

          <div className="alert-card__levels">
            <div>
              <span>Entry</span>
              <strong>{SAMPLE_ALERT.entry}</strong>
            </div>
            <div>
              <span>Stop-loss</span>
              <strong>{SAMPLE_ALERT.stopLoss}</strong>
            </div>
            <div>
              <span>Take-profit</span>
              <strong>{SAMPLE_ALERT.takeProfit}</strong>
            </div>
          </div>

          <p className="alert-card__why">
            <strong>Reason:</strong> {SAMPLE_ALERT.rationale}
          </p>
        </div>
      </div>
    </section>
  )
}
