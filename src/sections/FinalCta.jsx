import Link from 'next/link'

// Section 16 - Final CTA. Verbatim from the content doc.
export default function FinalCta() {
  return (
    <section className="hero cta-final" id="register-final">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />

      <div className="container hero__inner cta-final__inner" data-reveal>
        <div>
          <h2 className="cta-final__heading">
            Make Your Next Trade a <span className="accent">Smarter One</span>
          </h2>
          <p className="hero__sub">
            Let Harborwyn AI handle the research while you stay in charge of the decisions. Sign
            up today and start receiving clear, explained trade plans.
          </p>

          <div className="cta-final__actions">
            <a className="btn btn--lime" href="#register">
              Join Harborwyn AI Today
            </a>
            <Link className="btn btn--ghost" href="/contact-us">
              Contact Us
            </Link>
          </div>

          <p className="cta-final__micro">Takes about 2 minutes · No cost to join</p>
        </div>
      </div>
    </section>
  )
}
