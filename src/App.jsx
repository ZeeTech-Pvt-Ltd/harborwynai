import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import useReveal from './hooks/useReveal'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'
import Faqs from './pages/Faqs'
import AboutUs from './pages/AboutUs'
import HowItWorks from './pages/HowItWorks'
import Features from './pages/Features'
import Reviews from './pages/Reviews'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import RiskDisclosure from './pages/RiskDisclosure'

// Scroll to top on route change; anchor navigation is handled natively.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useReveal()
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/risk-disclosure" element={<RiskDisclosure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
