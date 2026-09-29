import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import useMeta from '../hooks/useMeta'
import { CONTACT_EMAIL, SITE_URL } from '../data/content'

export default function Contact() {
  useMeta({
    title: 'Contact Harborwyn AI - Get Support & Assistance',
    canonical: `${SITE_URL}/contact-us`,
    description:
      'Contact Harborwyn AI - questions about the platform, technical assistance or collaborations. Our team is ready to help.',
  })

  return (
    <main className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="eyebrow eyebrow--light">Get in touch</span>
          <h1>Contact Harborwyn AI</h1>
          <p className="contact__lede">
            We believe in open communication and transparency. A question about the platform, a
            technical issue, or a collaboration idea - whatever it is, we&apos;re here to help.
          </p>

          <p className="contact__hint">
            Share your details in the form and our team will get back to you as quickly as
            possible. The Harborwyn AI support team can assist with account setup, deposits and
            withdrawals, platform features, security settings and anything else you need to trade
            with confidence.
          </p>

          <div className="contact__help">
            <span>Need immediate help?</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Icon name="mail" size={17} />
              {CONTACT_EMAIL}
            </a>
          </div>
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
