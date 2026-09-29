import { Link } from 'react-router-dom'
import Logo from './Logo'
import { BRAND, CONTACT_EMAIL } from '../data/content'

// Mirrors the header menu (Home is covered by the logo link)
const PLATFORM_LINKS = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faqs' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Risk Disclosure', to: '/risk-disclosure' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p>
              {BRAND} is an online trading platform for traders everywhere - pairing a broad range
              of markets with AI-assisted tools built to make trading accessible to all.
            </p>
            <div className="site-footer__contact">
              <span>Contact us:</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="site-footer__col">
            <h3>Platform</h3>
            <ul>
              {PLATFORM_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h3>Legal</h3>
            <ul>
              {LEGAL_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="site-footer__risk">
          Risk Disclosure: Trading financial markets carries substantial risk and is not suitable
          for everyone. Prices can fall as quickly as they rise, and you may lose some or all of
          your invested capital. Past performance does not guarantee future results. This website
          provides general information only and does not constitute financial advice. Always do
          your own research and consider seeking independent professional advice before trading.
        </p>

        <div className="site-footer__bottom">
          <span>© 2026 {BRAND}. All rights reserved.</span>
          <span>Trading carries risk. Invest only what you can afford to lose.</span>
        </div>
      </div>
    </footer>
  )
}
