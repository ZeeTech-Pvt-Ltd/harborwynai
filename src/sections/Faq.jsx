import FaqList from '../components/FaqList'
import { FAQS } from '../data/content'

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <p>Answers to the questions we hear most often.</p>
        </div>

        <FaqList items={FAQS} />
      </div>
    </section>
  )
}
