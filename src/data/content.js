// Central content for the Bright Kapitune site.
// All copy is original phrasing; brand facts (stats, rating, deposit
// minimum) are kept as supplied. Testimonials and legal copy are
// template text — review/replace before launch.

export const BRAND = 'Bright Kapitune'

export const SITE_URL = 'https://bright-kapitune-au.com'

export const CONTACT_EMAIL = 'support@bright-kapitune-au.com'

export const FORM_ENDPOINT = 'https://meridianc-au.com/homeMailAction.php'
export const OFFER_NAME = 'BrightKapitune-Site'

// Header menu. `to` renders a router link, `href` a home-page anchor.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faqs' },
]

export const STATS = [
  { value: '4m+', label: 'Members worldwide' },
  { value: '98+', label: 'Countries covered' },
  { value: '65+', label: 'Currencies supported' },
  { value: '24/7', label: 'Always-on trading' },
  { value: '$500m+', label: 'Deposits processed' },
]

// Partner logo wall renders public/assets/img/svg/partner-1..8.svg
// (taken from the reference site — swap in real partner marks before launch).

export const ABOUT_CARDS = [
  {
    title: 'Smart Market Analysis',
    text: 'A built-in analysis engine keeps an eye on global markets around the clock and highlights setups worth your attention.',
    icon: 'chip',
  },
  {
    title: 'Fast Order Execution',
    text: 'The moment you confirm a trade, your order goes through — no queues, no friction, no waiting around.',
    icon: 'bolt',
  },
  {
    title: 'A Dashboard That Makes Sense',
    text: 'Your balance, performance and history in one clean view, designed for everyday people rather than trading desks.',
    icon: 'gauge',
  },
]

export const BENEFITS = [
  {
    title: 'Made for Beginners',
    text: 'You don’t need a finance background. The platform holds your hand from sign-up through to your first trade.',
    icon: 'smile',
  },
  {
    title: 'Committed to Compliance',
    text: 'Bright Kapitune is operated with a strong focus on meeting the regulatory standards expected by Australian users.',
    icon: 'shield',
  },
  {
    title: 'Start Small',
    text: 'Open an account and get going with a minimum deposit of just 347 A$ — perfect for testing the waters.',
    icon: 'coins',
  },
  {
    title: 'Clear, Upfront Fees',
    text: 'Every cost is itemised before you commit to anything. What you see is exactly what you pay.',
    icon: 'receipt',
  },
  {
    title: 'Trade Around the Clock',
    text: 'Markets move at all hours — and so can you, from any device, wherever you are.',
    icon: 'clock',
  },
  {
    title: 'Support Close to Home',
    text: 'A friendly, Australia-based support team is ready to help whenever you have a question.',
    icon: 'headset',
  },
]

export const SECURITY_FEATURES = [
  {
    title: 'Bank-Grade Data Encryption',
    text: 'Every connection to our servers is protected with 256-bit SSL encryption — the same standard the banks rely on.',
    icon: 'lock',
  },
  {
    title: 'Offline Asset Storage',
    text: 'The vast majority of funds — 98% — are held in cold storage, kept fully disconnected from the internet.',
    icon: 'vault',
  },
  {
    title: 'Two-Step Login Protection',
    text: 'Add an extra verification step to every sign-in so your account stays yours alone.',
    icon: 'key',
  },
  {
    title: '24/7 Activity Monitoring',
    text: 'Automated systems watch every account around the clock and flag anything that looks unusual.',
    icon: 'eye',
  },
  {
    title: 'Unreadable Passwords',
    text: 'Credentials are stored using one-way hashing — even our own staff can never see your password.',
    icon: 'fingerprint',
  },
  {
    title: 'Hardened Infrastructure',
    text: 'The platform runs on audited, battle-tested technology already trusted by millions worldwide.',
    icon: 'server',
  },
]

export const STEPS = [
  {
    title: 'Sign Up',
    text: 'Create your free account in minutes — just your name, email and phone number.',
  },
  {
    title: 'Deposit Funds',
    text: 'Top up with 347 A$ or more using a card, bank transfer or e-wallet.',
  },
  {
    title: 'Start Trading',
    text: 'Trade BTC, SOL, USDT and more — manually or on autopilot.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'James C.',
    location: 'Sydney',
    initials: 'JC',
    returnPct: '+18.2%',
    quote:
      'I had zero trading experience when I signed up. The platform walked me through everything, and within weeks I was seeing consistent results.',
  },
  {
    name: 'Olivia R.',
    location: 'Melbourne',
    initials: 'OR',
    returnPct: '+15.6%',
    quote:
      'The dashboard is genuinely easy to use — it feels more like online banking than trading software. Withdrawals have been quick and painless.',
  },
  {
    name: 'Ethan W.',
    location: 'Brisbane',
    initials: 'EW',
    returnPct: '+19.1%',
    quote:
      'The analysis engine surfaced opportunities I would never have found on my own. It runs in the background while I focus on my day job.',
  },
  {
    name: 'Sophie T.',
    location: 'Perth',
    initials: 'ST',
    returnPct: '+14.3%',
    quote:
      'What sold me was the transparency. Every fee is shown upfront, and the local support team actually answers the phone.',
  },
  {
    name: 'Liam B.',
    location: 'Adelaide',
    initials: 'LB',
    returnPct: '+16.8%',
    quote:
      'I started with the minimum deposit just to test the waters. Six months later it has become a steady part of my monthly income.',
  },
  {
    name: 'Charlotte M.',
    location: 'Gold Coast',
    initials: 'CM',
    returnPct: '+17.4%',
    quote:
      'Round-the-clock access fits my schedule perfectly. I check in on my phone in the morning and let the automated trading handle the rest.',
  },
]

export const BAND_QUOTES = [
  {
    quote: 'Signed up on a Tuesday, made my first trade by Friday. Genuinely impressed.',
    author: 'Daniel K. — Sydney',
  },
]

export const FAQS = [
  {
    q: 'How do I get started with Bright Kapitune?',
    a: 'Open a free account, add funds, and you can begin right away. Trade on your own terms, or switch on the built-in analysis engine that scans the markets and acts on the settings you choose. Your money and your settings stay under your control at all times.',
  },
  {
    q: 'How is my money protected?',
    a: 'Several safeguards work together: 256-bit SSL encryption on every connection, 98% of funds held in offline cold storage, two-step login verification, and round-the-clock monitoring for unusual activity. Passwords are stored using one-way hashing, so nobody — including our staff — can ever read them.',
  },
  {
    q: 'How quickly can I withdraw my funds?',
    a: 'You can request a withdrawal from your dashboard at any time. Most requests are completed within 24–48 hours, and funds are returned to the payment method you originally used where possible.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. Any cost attached to a transaction is shown to you clearly before you confirm it. If a fee applies, you will see the exact amount first — every single time.',
  },
  {
    q: 'Do I need any experience to use the platform?',
    a: 'None at all. The interface was designed for first-timers, the minimum deposit is just 347 A$, and the analysis engine plus built-in guides help you build confidence step by step.',
  },
  {
    q: 'Which markets can I access?',
    a: 'You can trade across a broad range of instruments from one account, including shares, currencies (forex), commodities, precious metals, CFDs and cryptocurrencies.',
  },
]

export const RATING = {
  score: '4.7',
  reviews: 189,
}

// Dedicated FAQs page — original phrasing, modeled on the reference
// site's /faq page (Here to Help + quick answers + 8-question list).
export const FAQS_PAGE = [
  {
    q: 'What is Bright Kapitune and how does it work?',
    a: 'Bright Kapitune is an AI-supported trading platform that runs continuously — scanning markets, spotting potential opportunities and placing trades automatically based on the settings you choose. You can use automated trade management or switch to manual mode whenever you like.',
  },
  {
    q: 'How does Bright Kapitune keep my funds and data secure?',
    a: 'Security is built into every layer of the platform. Your personal data is protected with recognised encryption and account authentication, and financial transactions go through established payment providers. Your trades, signals and balance updates are shown clearly so you can always see what is happening on your account.',
  },
  {
    q: 'Can I request a withdrawal at any time?',
    a: 'Yes — you can request a withdrawal whenever you like, subject to account checks, available funds and your payment provider’s processing requirements. Your balance stays visible at all times, and processing times may vary by provider.',
  },
  {
    q: 'Are there any fees or costs?',
    a: 'Any fee information is displayed clearly before you proceed. There is no registration fee, though other charges may apply depending on the service or payment method. To get started you’ll need a minimum deposit of 347 A$ — payment methods may include credit cards, bank transfers and PayPal.',
  },
  {
    q: 'Do I need experience to start?',
    a: 'No. The platform is designed for newcomers and experienced traders alike. In automated mode, the AI handles market scanning, signal generation and trade execution based on your settings — or switch to manual mode whenever you want full control.',
  },
  {
    q: 'Do I need to monitor the platform constantly?',
    a: 'No. Bright Kapitune can continuously analyse live charts, trends and patterns, reducing the need for constant monitoring. The automated system manages activity based on your chosen settings, though it’s still wise to review your account regularly.',
  },
  {
    q: 'What can I trade?',
    a: 'Bright Kapitune gives you access to a range of markets, which may include cryptocurrencies such as Bitcoin and Ethereum, forex, shares, commodities, precious metals and CFDs.',
  },
  {
    q: 'How do I contact support?',
    a: 'You can reach our support team any time from the Contact Us page, or email us directly at support@bright-kapitune-au.com. We’re happy to help with questions about your account, deposits, withdrawals or the platform itself.',
  },
]

// About Us page — original phrasing, modeled on the reference /about page.
export const ABOUT_FEATURES = [
  {
    title: 'AI-supported market analysis',
    text: 'Automated market analysis and trade management tools help you make more informed decisions.',
    icon: 'chip',
  },
  {
    title: 'Clear account controls',
    text: 'Encryption measures and straightforward account settings help safeguard your information.',
    icon: 'shield',
  },
  {
    title: 'Support in your language',
    text: 'Friendly help for account and platform questions, whenever you need it.',
    icon: 'headset',
  },
]

export const STORY_STEPS = [
  {
    title: 'Getting started',
    text: 'A fintech team set out to make crypto trading simpler to understand and manage.',
  },
  {
    title: 'First launch',
    text: 'The platform launched with a carefully selected range of cryptocurrencies and a streamlined account experience.',
  },
  {
    title: 'Building our community',
    text: 'As user interest grew, we kept improving the platform and the support experience.',
  },
  {
    title: 'Expanding access',
    text: 'Availability now extends across multiple markets, with payment options and security controls varying by region.',
  },
  {
    title: 'Today',
    text: 'Account management, market analysis and automated trade management come together in one place.',
  },
]

export const VALUES = [
  {
    title: 'Accessibility',
    text: 'Making crypto trading tools easier to access, understand and manage.',
    icon: 'gauge',
  },
  {
    title: 'Transparency',
    text: 'Clear account controls, transparent platform information and straightforward user journeys.',
    icon: 'eye',
  },
  {
    title: 'Innovation',
    text: 'AI-supported and algorithmic tools that help you analyse markets and manage trading activity.',
    icon: 'chip',
  },
  {
    title: 'Responsibility',
    text: 'Clear service standards and transparent risk communication, helping you make informed trading decisions.',
    icon: 'shield',
  },
]

export const FAQ_QUICK_CARDS = [
  {
    title: 'New to trading?',
    text: 'The AI-supported tools can handle selected tasks automatically, while you stay in control of every setting.',
  },
  {
    title: 'Questions about your funds?',
    text: 'Withdraw from your available balance whenever you like — any charges and transaction details are shown before you confirm.',
  },
  {
    title: 'Unsure what to trade?',
    text: 'Let the AI analyse selected markets — including Bitcoin, Ethereum, forex, shares and commodities — and flag opportunities for you.',
  },
]
