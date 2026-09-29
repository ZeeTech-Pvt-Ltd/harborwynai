import LegalPage, { LegalSection, ContactNote } from '../components/LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Read the Harborwyn AI Privacy Policy - how we collect, use and protect your personal information."
      updated="1 August 2026"
    >
      <LegalSection heading="1. Who We Are">
        <p>
          This Privacy Policy sets out how Harborwyn AI ("we", "us", "our") collects, uses and
          safeguards your personal information when you use our website and platform. Protecting
          your privacy in line with applicable data protection laws is central to how we operate.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>The types of information we collect include:</p>
        <ul>
          <li>Contact details you provide when registering, such as your name, email address and phone number.</li>
          <li>Account and transaction data generated as you use the platform.</li>
          <li>Technical data such as IP address, browser type and device information.</li>
          <li>Communications you send to our support team.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>Your information is used to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Process transactions and deliver platform functionality.</li>
          <li>Improve our services and your experience.</li>
          <li>Meet legal and regulatory obligations.</li>
          <li>Send service communications and, with your consent, marketing materials.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Data Security">
        <p>
          Your data is guarded with SSL 256-bit encryption, hardened server infrastructure and
          strict access controls. Passwords are stored using one-way encryption and are never
          visible to our staff. While we take every reasonable precaution, no method of
          transmitting data over the internet can be completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="5. Sharing Your Information">
        <p>
          We never sell your personal information. Data may be shared with trusted service
          providers who help us operate the platform, and with authorities where the law requires
          it. Every third party we work with is bound by confidentiality obligations.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies">
        <p>
          Cookies and similar technologies help our website remember your preferences, understand
          how the site is used and improve your experience. You can manage cookies through your
          browser settings.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          You can access, correct or delete the personal information we hold about you, and opt
          out of marketing communications at any time. To exercise these rights, reach out to our
          support team.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to This Policy">
        <p>
          This Privacy Policy may be updated from time to time. The latest version is always
          available on this page, with the most recent revision date shown above.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
