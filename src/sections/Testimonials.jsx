import { useEffect, useRef, useState } from 'react'
import Icon from '../components/Icon'
import { TESTIMONIALS } from '../data/content'

const GAP = 20 // matches .testimonials__track gap in global.css
const AUTOPLAY_MS = 5000

export default function Testimonials() {
  const trackRef = useRef(null)
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)
  const [perView, setPerView] = useState(1)
  const [paused, setPaused] = useState(false)

  // Cards-per-view depends on the viewport breakpoints, so measure it
  // and keep the page count in sync on resize.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      const card = track.querySelector('.testimonial')
      if (!card) return
      const step = card.getBoundingClientRect().width + GAP
      const visible = Math.max(1, Math.round(track.clientWidth / step))
      setPerView(visible)
      setPages(Math.ceil(TESTIMONIALS.length / visible))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(track)
    return () => ro.disconnect()
  }, [])

  // Keep the active dot in sync with manual swipes/scrolls.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const card = track.querySelector('.testimonial')
      if (!card) return
      const step = card.getBoundingClientRect().width + GAP
      const i = Math.round(track.scrollLeft / (step * perView))
      setPage(Math.min(Math.max(0, i), pages - 1))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [perView, pages])

  // Auto-advance by one view, wrapping back to the start; paused on hover.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const card = track.querySelector('.testimonial')
      if (!card) return
      const step = card.getBoundingClientRect().width + GAP
      const maxScroll = track.scrollWidth - track.clientWidth
      const atEnd = track.scrollLeft >= maxScroll - 4
      const next = atEnd ? 0 : Math.min(track.scrollLeft + step * perView, maxScroll)
      track.scrollTo({ left: next, behavior: 'smooth' })
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, perView])

  const goTo = (index) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.testimonial')
    if (!card) return
    const step = card.getBoundingClientRect().width + GAP
    const maxScroll = track.scrollWidth - track.clientWidth
    const target = Math.min(Math.max(0, index), pages - 1)
    const left = target === pages - 1 ? maxScroll : target * step * perView
    track.scrollTo({ left, behavior: 'smooth' })
  }

  const stepPage = (dir) => {
    const next = page + dir
    goTo(next < 0 ? pages - 1 : next >= pages ? 0 : next)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Success stories</span>
          <h2>Stories from our community</h2>
          <p>Verified feedback from Harborwyn AI members across the globe.</p>
        </div>

        <div
          className="testimonials__viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonials__track" ref={trackRef}>
            {TESTIMONIALS.map(({ name, location, initials, returnPct, quote }) => (
              <article className="testimonial" key={name}>
                <div
                  className="testimonial__head"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span className="testimonial__stars" aria-label="5 star rating">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="star" size={16} filled />
                    ))}
                  </span>
                  <span className="testimonial__badge">
                    <Icon name="check" size={13} strokeWidth={2.5} />
                    Confirmed user
                  </span>
                </div>

                <p>“{quote}”</p>

                <div className="testimonial__author">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {initials}
                  </span>
                  <div>
                    <div className="testimonial__name">{name}</div>
                    <div className="testimonial__loc">{location}</div>
                  </div>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      fontSize: 16,
                    }}
                  >
                    {returnPct}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonials__controls">
            <button
              className="testimonials__arrow"
              type="button"
              aria-label="Previous testimonials"
              onClick={() => stepPage(-1)}
            >
              <Icon name="arrowLeft" size={18} strokeWidth={2.4} />
            </button>

            <div className="testimonials__dots" role="tablist" aria-label="Testimonial pages">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={page === i}
                  aria-label={`Go to testimonials page ${i + 1}`}
                  className={`testimonials__dot${page === i ? ' testimonials__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <button
              className="testimonials__arrow"
              type="button"
              aria-label="Next testimonials"
              onClick={() => stepPage(1)}
            >
              <Icon name="arrowRight" size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
