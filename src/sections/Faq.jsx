import FaqList from '../components/FaqList'
import { FAQS } from '../data/content'

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>FAQs</h2>
        </div>

        <FaqList items={FAQS} />
      </div>
    </section>
  )
}
