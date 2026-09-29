import LegalPage, { LegalSection, ContactNote } from '../components/LegalPage'

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Harborwyn AI Terms of Use - the rules that govern your use of our website and trading platform."
      updated="1 August 2026"
    >
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing or using the Harborwyn AI website and platform, you agree to be bound by
          these Terms of Use. If you do not agree with any part of these terms, you must not use
          our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>
          You must be at least 18 years old and legally able to enter into binding contracts to use
          this platform. You are responsible for ensuring that your use of the platform is lawful
          in your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection heading="3. Account Registration">
        <p>
          When creating an account, you agree to provide accurate and complete information and to
          keep it up to date. You are responsible for maintaining the confidentiality of your login
          credentials and for all activity that occurs under your account.
        </p>
      </LegalSection>

      <LegalSection heading="4. Deposits and Withdrawals">
        <p>
          The minimum deposit is $250. Withdrawals can be requested at any time from your dashboard
          and are typically processed within 24–48 hours. Additional verification may be required
          for security and compliance purposes.
        </p>
      </LegalSection>

      <LegalSection heading="5. Risk Acknowledgment">
        <p>
          Trading in financial markets carries substantial risk, including the possibility of
          losing your entire investment. You acknowledge that your trading decisions are yours
          alone, and that past performance is no guide to future results.
        </p>
      </LegalSection>

      <LegalSection heading="6. Fees">
        <p>
          All applicable fees are displayed transparently before you confirm any transaction. We
          reserve the right to update our fee schedule from time to time; any changes will be
          published on the platform.
        </p>
      </LegalSection>

      <LegalSection heading="7. Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for any unlawful purpose.</li>
          <li>Attempt to gain unauthorised access to our systems.</li>
          <li>Interfere with the operation of the platform or other users' accounts.</li>
          <li>Provide false or misleading information.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="8. Intellectual Property">
        <p>
          All content on this website, including text, graphics, logos and software, is the
          property of Harborwyn AI or its licensors and is protected by intellectual property
          laws. You may not reproduce or distribute it without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection heading="9. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Harborwyn AI shall not be liable for any
          indirect, incidental or consequential losses arising from your use of the platform,
          including trading losses.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to These Terms">
        <p>
          We may amend these Terms of Use at any time. Continued use of the platform after changes
          take effect constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
