import LegalPage, { LegalSection, ContactNote } from '../components/LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Read the Bright Kapitune Privacy Policy - how we collect, use and protect your personal information."
      updated="1 August 2026"
    >
      <LegalSection heading="1. Who We Are">
        <p>
          This Privacy Policy explains how Bright Kapitune ("we", "us", "our") collects, uses and
          protects your personal information when you use our website and platform. We are
          committed to protecting your privacy in accordance with applicable Australian privacy
          laws.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We collect the following types of information:</p>
        <ul>
          <li>Contact details you provide when registering, such as your name, email address and phone number.</li>
          <li>Account and transaction data generated through your use of the platform.</li>
          <li>Technical data such as IP address, browser type and device information.</li>
          <li>Communications you send to our support team.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>We use your information to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Process transactions and provide platform functionality.</li>
          <li>Improve our services and user experience.</li>
          <li>Comply with legal and regulatory obligations.</li>
          <li>Send service communications and, with your consent, marketing materials.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Data Security">
        <p>
          We protect your data using SSL 256-bit encryption, secure server infrastructure and
          strict access controls. Passwords are stored using one-way encryption and are never
          visible to our staff. While we take every reasonable precaution, no method of
          transmission over the internet is completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="5. Sharing Your Information">
        <p>
          We do not sell your personal information. We may share data with trusted service
          providers who help us operate the platform, and with authorities where required by law.
          All third parties are bound by confidentiality obligations.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies">
        <p>
          Our website uses cookies and similar technologies to remember your preferences,
          understand how the site is used and improve your experience. You can control cookies
          through your browser settings.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          You have the right to access, correct or delete the personal information we hold about
          you, and to opt out of marketing communications at any time. To exercise these rights,
          contact our support team.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The latest version will always be
          available on this page, with the date of the most recent revision shown above.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
