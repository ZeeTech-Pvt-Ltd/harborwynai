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
          Using the Harborwyn AI website and platform means you accept these Terms of Use in full.
          If any part of these terms is not acceptable to you, please do not use our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>
          To use this platform you must be at least 18 years old and legally able to enter into
          binding contracts. It is your responsibility to ensure that using the platform is lawful
          where you live.
        </p>
      </LegalSection>

      <LegalSection heading="3. Account Registration">
        <p>
          When you create an account, you agree to provide accurate, complete information and to
          keep it current. You are responsible for keeping your login credentials confidential and
          for all activity that takes place under your account.
        </p>
      </LegalSection>

      <LegalSection heading="4. Deposits and Withdrawals">
        <p>
          The minimum deposit is $250. You can request a withdrawal from your dashboard at any
          time; most requests are processed within 24-48 hours. Additional verification may be
          needed for security and compliance.
        </p>
      </LegalSection>

      <LegalSection heading="5. Risk Acknowledgment">
        <p>
          Trading in financial markets carries substantial risk, up to and including the loss of
          your entire investment. You acknowledge that your trading decisions are your own, and
          that past performance is no guide to future results.
        </p>
      </LegalSection>

      <LegalSection heading="6. Fees">
        <p>
          All applicable fees are shown transparently before you confirm any transaction. Our fee
          schedule may be updated from time to time; any changes will be published on the
          platform.
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
          All content on this website - text, graphics, logos and software - belongs to Harborwyn
          AI or its licensors and is protected by intellectual property laws. You may not
          reproduce or distribute it without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection heading="9. Limitation of Liability">
        <p>
          To the fullest extent the law permits, Harborwyn AI is not liable for indirect,
          incidental or consequential losses arising from your use of the platform, including
          trading losses.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to These Terms">
        <p>
          These Terms of Use may be amended at any time. Continuing to use the platform after
          changes take effect means you accept the revised terms.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
