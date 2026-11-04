import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import TrustUs from '../sections/TrustUs'
import ReviewsBand from '../sections/ReviewsBand'
import About from '../sections/About'
import Benefits from '../sections/Benefits'
import Security from '../sections/Security'
import HowItWorks from '../sections/HowItWorks'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
import FinalCta from '../sections/FinalCta'

export const metadata = {
  title: 'Harborwyn AI - Official AI Crypto Trading Platform',
  description:
    'Harborwyn AI - AI-assisted crypto trading made simple. Trade Bitcoin, Ethereum, Solana and more from just $250, automated or manual, around the clock.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <TrustUs />
      <ReviewsBand />
      <About />
      <Benefits />
      <Security />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  )
}
