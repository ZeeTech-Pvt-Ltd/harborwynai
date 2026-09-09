import LegalPage, { LegalSection, ContactNote } from '../components/LegalPage'

export default function RiskDisclosure() {
  return (
    <LegalPage
      title="Risk Disclosure"
      description="Bright Kapitune Risk Disclosure - trading financial markets carries substantial risk and is not suitable for every investor."
      updated="1 August 2026"
    >
      <LegalSection heading="General Risk Warning">
        <p>
          Trading in financial markets - including cryptocurrencies, equities, forex, commodities,
          precious metals and CFDs - carries substantial risk and is not appropriate for every
          investor. You may lose some or all of the capital you put in. You should never trade with
          money you cannot afford to lose.
        </p>
      </LegalSection>

      <LegalSection heading="Market Volatility">
        <p>
          Financial markets can be highly volatile. Prices can move rapidly and unpredictably,
          and past performance is not a reliable indicator of future results. No automated
          system, including AI-driven analysis, can guarantee profits or eliminate risk.
        </p>
      </LegalSection>

      <LegalSection heading="Leverage and CFDs">
        <p>
          Leveraged products such as CFDs amplify both gains and losses. A relatively small market
          movement can have a large impact on your balance. You should fully understand how
          leverage works before trading such instruments.
        </p>
      </LegalSection>

      <LegalSection heading="No Financial Advice">
        <p>
          Nothing on this website or platform constitutes financial, investment or legal advice.
          Content is provided for general information only. You are solely responsible for your
          trading decisions and should consider seeking independent professional advice.
        </p>
      </LegalSection>

      <LegalSection heading="Technology Risks">
        <p>
          While we employ industry-leading security measures, including SSL 256-bit encryption and
          cold storage, no system is entirely immune to technical failure, cyber attack or human
          error. You are responsible for safeguarding your own account credentials.
        </p>
      </LegalSection>

      <LegalSection heading="Your Responsibility">
        <p>
          Before trading, carefully assess your financial situation, experience level and
          risk tolerance. Trade only with capital you can afford to lose, and seek independent
          advice if you are in any doubt.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
