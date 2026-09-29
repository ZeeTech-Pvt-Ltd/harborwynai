import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'
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

export default function Home() {
  useMeta({
    title: 'Harborwyn AI - Official AI Crypto Trading Platform',
    description:
      'Harborwyn AI - the AI-assisted crypto trading platform. Trade Bitcoin, Ethereum, Solana and more from $250, with automated or manual execution.',
    canonical: `${SITE_URL}/`,
  })
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <About />
      <Benefits />
      <ReviewsBand />
      <TrustUs />
      <Testimonials />
      <Security />
      <Faq />
      <FinalCta />
    </>
  )
}
