import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import useMeta from '../hooks/useMeta'
import { BRAND, CONTACT_EMAIL, SITE_URL } from '../data/content'

export default function Contact() {
  useMeta({
    title: `Contact Us — ${BRAND}`,
    canonical: `${SITE_URL}/contact-us`,
    description:
      'Contact Bright Kapitune — questions about the platform, technical assistance or collaborations. Our team is ready to help.',
  })

  return (
    <main className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="eyebrow eyebrow--light">Get in touch</span>
          <h1>Contact Us</h1>
          <p className="contact__lede">
            We value communication and transparency. Whether you have questions about the
            platform, need technical assistance, or want to explore a collaboration — we&apos;re
            here to help.
          </p>

          <p className="contact__hint">
            Fill out the form with your details and our team will get back to you as quickly as
            possible.
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
