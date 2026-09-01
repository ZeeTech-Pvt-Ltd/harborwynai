import Icon from '../components/Icon'
import { BAND_QUOTES, RATING } from '../data/content'

// Blue band mirroring the live site's "Many users trust Bright Kapitune" section
export default function ReviewsBand() {
  return (
    <section className="band has-coins">
      <img className="coin coin--usdt" src="/assets/img/coins/tether-r-320.png" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <img className="coin coin--bnb" src="/assets/img/coins/bnb-l-320.png" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <div className="container band__inner" data-reveal>
        <div>
          <h2>Trusted by a growing community</h2>
          <p>
            Rated {RATING.score} out of 5 across {RATING.reviews} verified reviews, with new
            members joining every day. Here is what Australian traders are saying.
          </p>
          <div className="rating" style={{ marginTop: 24 }}>
            <span className="rating__stars" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} name="star" size={22} />
              ))}
            </span>
            <span className="rating__score">{RATING.score}/5</span>
            <span style={{ opacity: 0.8, fontSize: 14 }}>{RATING.reviews} reviews</span>
          </div>
        </div>

        <div className="band__aside">
          {BAND_QUOTES.map(({ quote, author }) => (
            <figure className="band-quote" key={author}>
              <p>“{quote}”</p>
              <figcaption className="band-quote__meta">
                <span>{author}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Icon name="check" size={15} strokeWidth={2.5} />
                  Verified member
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
