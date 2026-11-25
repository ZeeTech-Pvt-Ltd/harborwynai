import Hero from '../sections/Hero'
import Definition from '../sections/Definition'
import SignalProcess from '../sections/SignalProcess'
import SampleAlert from '../sections/SampleAlert'
import HabitsTable from '../sections/HabitsTable'
import Highlights from '../sections/Highlights'
import Differentiators from '../sections/Differentiators'
import GetStarted from '../sections/GetStarted'
import Markets from '../sections/Markets'
import SignalFeatures from '../sections/SignalFeatures'
import RiskManagement from '../sections/RiskManagement'
import Audience from '../sections/Audience'
import SecurityPricing from '../sections/SecurityPricing'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
import FinalCta from '../sections/FinalCta'

export const metadata = {
  title: 'Harborwyn AI - Turn Market Moves Into Clear Trade Plans',
  description:
    'Harborwyn AI is an AI-assisted trading signals platform that analyzes movements in the crypto, forex, stock and commodity markets and sends you actionable trade alerts, each with a suggested entry, a stop-loss, a take-profit target and the reasoning behind it, so you can choose which opportunities to act on.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Definition />
      <SignalProcess />
      <SampleAlert />
      <HabitsTable />
      <Highlights />
      <Differentiators />
      <GetStarted />
      <Markets />
      <SignalFeatures />
      <RiskManagement />
      <Audience />
      <SecurityPricing />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  )
}
