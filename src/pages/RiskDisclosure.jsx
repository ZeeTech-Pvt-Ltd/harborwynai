import LegalPage, { LegalSection, ContactNote } from '../components/LegalPage'

export default function RiskDisclosure() {
  return (
    <LegalPage
      title="Risk Disclosure"
      description="Harborwyn AI Risk Disclosure - trading financial markets carries substantial risk and is not suitable for every investor."
      updated="1 August 2026"
    >
      <LegalSection heading="General Risk Warning">
        <p>
          Trading in financial markets - cryptocurrencies, equities, forex, commodities, precious
          metals and CFDs included - carries substantial risk and is not suitable for every
          investor. You may lose some or all of the capital you commit. Never trade with money
          you cannot afford to lose.
        </p>
      </LegalSection>

      <LegalSection heading="Market Volatility">
        <p>
          Financial markets can be highly volatile, with prices moving quickly and unpredictably.
          Past performance is not a reliable indicator of future results, and no automated system
          - AI-driven analysis included - can guarantee profits or remove risk.
        </p>
      </LegalSection>

      <LegalSection heading="Leverage and CFDs">
        <p>
          Leveraged products such as CFDs magnify gains and losses alike. Even a small market
          movement can move your balance sharply. Make sure you fully understand leverage before
          trading these instruments.
        </p>
      </LegalSection>

      <LegalSection heading="No Financial Advice">
        <p>
          Nothing on this website or platform is financial, investment or legal advice. Content is
          provided for general information only. You alone are responsible for your trading
          decisions, and you may wish to seek independent professional advice.
        </p>
      </LegalSection>

      <LegalSection heading="Technology Risks">
        <p>
          Although we use industry-leading security measures - SSL 256-bit encryption and cold
          storage among them - no system is entirely immune to technical failure, cyber attack or
          human error. Safeguarding your account credentials remains your responsibility.
        </p>
      </LegalSection>

      <LegalSection heading="Your Responsibility">
        <p>
          Before you trade, take stock of your financial situation, experience and risk tolerance.
          Trade only with capital you can afford to lose, and seek independent advice whenever you
          are in doubt.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
