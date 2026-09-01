import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'intl-tel-input/styles'
import { FORM_ENDPOINT, OFFER_NAME } from '../data/content'

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

const initialFields = { firstName: '', lastName: '', email: '', consent: true }

/**
 * Shared registration form (hero + final CTA), mirroring the
 * gemwealth-holm.com form's rules:
 * - required first/last name, email, valid international phone, consent
 * - honeypot "website" field: bots that fill it get silently dropped
 * - phone auto-detected via ipapi.co, validated with libphonenumber
 * - POSTs JSON {firstName, lastName, email, phone, offerName} with the
 *   phone in full international format
 */
export default function RegistrationForm({ idPrefix = 'reg', title, subtitle }) {
  const navigate = useNavigate()
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState(STATUS.idle)
  const [phoneError, setPhoneError] = useState('')
  const honeypotRef = useRef(null)
  const phoneInputRef = useRef(null)
  const itiRef = useRef(null)

  useEffect(() => {
    if (!phoneInputRef.current) return
    let cancelled = false
    let iti = null
    // Code-split: intl-tel-input (with its utils) loads on demand so it
    // stays out of the initial JS bundle.
    import('intl-tel-input/intlTelInputWithUtils').then(({ default: intlTelInput }) => {
      if (cancelled || !phoneInputRef.current) return
      iti = intlTelInput(phoneInputRef.current, {
        initialCountry: '', // auto-detect via the lookup below
        separateDialCode: true,
        placeholderNumberPolicy: 'AGGRESSIVE', // country-specific example placeholder
        placeholderNumberType: 'MOBILE',
        initialCountryLookup: () =>
          fetch('https://ipapi.co/json/')
            .then((r) => r.json())
            .then((d) => d.country_code || 'au')
            .catch(() => 'au'),
      })
      itiRef.current = iti
      // Order the country selector as: flag → dial code → dropdown arrow.
      const container = phoneInputRef.current.closest('.iti')
      const arrow = container?.querySelector('.iti__arrow')
      const selectedCountry = container?.querySelector('.iti__selected-country')
      if (arrow && selectedCountry) selectedCountry.appendChild(arrow)
    })
    return () => {
      cancelled = true
      iti?.destroy()
      itiRef.current = null
    }
  }, [])

  const setField = (name) => (e) =>
    setFields((f) => ({
      ...f,
      [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot condition: silently drop submissions from bots.
    if (honeypotRef.current?.value) return

    // Phone condition: must be a valid number for the selected country.
    const iti = itiRef.current
    const phone = iti?.getNumber()
    if (!phone || !iti?.isValidNumber()) {
      setPhoneError('Please enter a valid phone number')
      return
    }
    setPhoneError('')

    setStatus(STATUS.loading)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          phone,
          offerName: OFFER_NAME,
        }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setStatus(STATUS.success)
      setFields(initialFields)
      iti?.setNumber('')
      navigate('/thank-you')
    } catch {
      // Endpoint rate-limits to 3 attempts / 5 min per IP.
      setStatus(STATUS.error)
    }
  }

  if (status === STATUS.success) {
    return (
      <div className="form-card" data-reveal>
        <div className="form-success" role="status">
          Thank you! Your registration has been received. Our team will contact you shortly.
        </div>
      </div>
    )
  }

  return (
    <div className="form-card" data-reveal>
      {title && <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
      <form onSubmit={handleSubmit}>
        {/* Honeypot — hidden from real users, bots fill it and get dropped */}
        <input
          ref={honeypotRef}
          className="visually-hidden"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="contact-form__row">
          <label className="contact-form__field">
            <span>First Name *</span>
            <input
              id={`${idPrefix}-first`}
              type="text"
              name="first_name"
              placeholder="John"
              autoComplete="given-name"
              value={fields.firstName}
              onChange={setField('firstName')}
              required
            />
          </label>
          <label className="contact-form__field">
            <span>Last Name *</span>
            <input
              id={`${idPrefix}-last`}
              type="text"
              name="last_name"
              placeholder="Doe"
              autoComplete="family-name"
              value={fields.lastName}
              onChange={setField('lastName')}
              required
            />
          </label>
        </div>

        <label className="contact-form__field">
          <span>Email Address *</span>
          <input
            id={`${idPrefix}-email`}
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={fields.email}
            onChange={setField('email')}
            required
          />
        </label>

        <div className="contact-form__field">
          <span>Phone Number *</span>
          <div className="phone-iti">
            <input
              ref={phoneInputRef}
              id={`${idPrefix}-phone`}
              type="tel"
              name="phone"
              autoComplete="tel"
              aria-label="Phone number"
              required
            />
          </div>
          {phoneError && <span className="phone-error">{phoneError}</span>}
        </div>

        <label className="contact-form__consent">
          <input
            type="checkbox"
            name="reg-consent"
            checked={fields.consent}
            onChange={setField('consent')}
            required
          />
          <span>
            I agree to the <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> and
            understand how my data will be used. *
          </span>
        </label>

        {status === STATUS.error && (
          <div className="form-error" role="alert">
            Something went wrong. Please try again shortly.
          </div>
        )}

        <button className="btn btn--lime btn--block" type="submit" disabled={status === STATUS.loading}>
          {status === STATUS.loading ? 'Submitting…' : 'Open an account'}
        </button>
      </form>
    </div>
  )
}
