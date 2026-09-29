import { Link } from 'react-router-dom'
import { BRAND } from '../data/content'

// dark = rendered on the light page background
export default function Logo({ dark = false }) {
  return (
    <Link to="/" className={`logo${dark ? ' logo--dark' : ''}`} aria-label={`${BRAND} home`}>
      <span className="logo__mark">
        <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
          <g stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="32" y1="20.5" x2="13" y2="14" />
            <line x1="32" y1="20.5" x2="20.5" y2="4.5" />
            <line x1="32" y1="20.5" x2="32" y2="1.5" />
            <line x1="32" y1="20.5" x2="43.5" y2="4.5" />
            <line x1="32" y1="20.5" x2="51" y2="14" />
          </g>
          <rect x="25.5" y="17.5" width="13" height="9.5" rx="2.5" fill="#34d399" />
          <rect x="29" y="20" width="6" height="4.5" rx="1" fill="#ffffff" />
          <polygon points="21.5,30.5 42.5,30.5 41,53 23,53" fill="#ffffff" />
          <rect x="29.5" y="43.5" width="5.5" height="9.5" rx="2.75" fill="#0a2540" />
          <g stroke="#34d399" strokeWidth="2.4" strokeLinecap="round" fill="none">
            <path d="M8 57.5 Q14 55.3 20 57.5 T32 57.5 T44 57.5 T56 57.5" />
            <path d="M12 61 Q18 58.8 24 61 T40 61 T56 61" />
          </g>
        </svg>
      </span>
      {BRAND}
    </Link>
  )
}
