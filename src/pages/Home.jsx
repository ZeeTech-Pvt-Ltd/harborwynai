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
    title: 'Bright Kapitune — Official Crypto Trading Platform Australia',
    description:
      "Bright Kapitune — Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
    canonical: `${SITE_URL}/`,
  })
  return (
    <>
      <Hero />
      <Stats />
      <ReviewsBand />
      <About />
      <Benefits />
      <TrustUs />
      <Security />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
