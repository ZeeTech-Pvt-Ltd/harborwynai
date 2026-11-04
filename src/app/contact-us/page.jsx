import Link from 'next/link'
import Icon from '../../components/Icon'
import RegistrationForm from '../../components/RegistrationForm'
import { CONTACT_EMAIL } from '../../data/content'

export const metadata = {
  title: 'Contact Harborwyn AI - Get Expert Support & Assistance',
  description:
    'Contact Harborwyn AI - questions about the platform, technical assistance or collaborations. Our team is ready to help.',
  alternates: { canonical: '/contact-us' },
}

export default function Contact() {
  return (
    <main className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact Harborwyn AI</h1>
          <p className="contact__lede">
            We believe in open communication and transparency. A question about the platform, a
            technical issue, or a collaboration idea - whatever it is, we&apos;re here to help.
          </p>

          <div className="contact-cards">
            <a className="contact-card" href={`mailto:${CONTACT_EMAIL}`}>
              <span className="contact-card__icon" aria-hidden="true">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <strong>Email us</strong>
                <small>{CONTACT_EMAIL}</small>
              </span>
            </a>
            <div className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <Icon name="clock" size={20} />
              </span>
              <span>
                <strong>24/7 support</strong>
                <small>Help is never more than a message away.</small>
              </span>
            </div>
            <Link className="contact-card" href="/faqs">
              <span className="contact-card__icon" aria-hidden="true">
                <Icon name="headset" size={20} />
              </span>
              <span>
                <strong>Visit FAQs</strong>
                <small>Instant answers to the most common questions.</small>
              </span>
            </Link>
          </div>

          <p className="contact__hint">
            Share your details in the form and our team will get back to you as quickly as
            possible. The Harborwyn AI support team can assist with account setup, deposits and
            withdrawals, platform features, security settings and anything else you need to trade
            with confidence.
          </p>
        </div>

        <RegistrationForm
          idPrefix="contact"
          title="Get in touch"
          subtitle="Fill out the form with your details and our team will get back to you as quickly as possible."
        />
      </div>
    </main>
  )
}
