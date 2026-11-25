import Icon from '../components/Icon'
import { HABITS } from '../data/content'

// Section 5 - Trading With vs Without Harborwyn AI. Verbatim.
export default function HabitsTable() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Trading With vs Without Harborwyn AI</h2>
        </div>

        <div className="habits-table" data-reveal>
          <div className="habits-table__head">
            <span>Without Harborwyn AI</span>
            <span>With Harborwyn AI</span>
          </div>
          {HABITS.map(({ without, withSignal }) => (
            <div className="habits-table__row" key={without}>
              <span>{without}</span>
              <span className="habits-table__with">
                <Icon name="check" size={16} strokeWidth={2.5} />
                {withSignal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
