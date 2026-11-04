import Link from 'next/link'
import Icon from '../../components/Icon'

export const metadata = {
  title: 'Thank You for Registering with Harborwyn AI Platform',
  description: 'Thank you for registering with Harborwyn AI. Our team will contact you shortly.',
  alternates: { canonical: '/thank-you' },
}

export default function ThankYou() {
  return (
    <main className="hero thank-you">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="container thank-you__inner">
        <span className="thank-you__check" aria-hidden="true">
          <Icon name="check" size={40} strokeWidth={2.5} />
        </span>
        <h1>
          Thank <span className="accent">You!</span>
        </h1>
        <p className="hero__sub thank-you__sub">
          We have received your registration. A member of our team will contact you shortly to
          help you get started.
        </p>
        <Link href="/" className="btn btn--lime">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
