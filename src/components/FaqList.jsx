'use client'

import { useState } from 'react'
import Icon from './Icon'

// Shared FAQ accordion used by the home section and the FAQs page.
export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map(({ q, a }, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={q}>
            <button
              className="faq-item__q"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              {q}
              <Icon name="plus" size={20} strokeWidth={2.2} />
            </button>
            {isOpen && <p className="faq-item__a">{a}</p>}
          </div>
        )
      })}
    </div>
  )
}
