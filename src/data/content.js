// Central content for the Harborwyn AI site.
// All copy is original phrasing; brand facts (stats, rating, deposit
// minimum) are kept as supplied. Testimonials and legal copy are
// template text - review/replace before launch.

export const BRAND = 'Harborwyn AI'

export const SITE_URL = 'https://harborwynai.io'

export const CONTACT_EMAIL = 'support@harborwynai.io'

export const FORM_ENDPOINT = 'https://meridianc-au.com/homeMailAction.php'
export const OFFER_NAME = 'HarborwynAI-Site'

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
// (taken from the reference site - swap in real partner marks before launch).

export const ABOUT_CARDS = [
  {
    title: 'Smart Market Analysis',
    text: 'A built-in scanning engine tracks global markets around the clock and flags the setups most worth a closer look.',
    icon: 'chip',
  },
  {
    title: 'Fast Order Execution',
    text: 'Once you confirm a trade, the platform sends it straight to your partnered broker - no waiting rooms, no delays.',
    icon: 'bolt',
  },
  {
    title: 'A Dashboard That Makes Sense',
    text: 'Balances, history and live positions in one clean screen, built for everyday users instead of trading desks.',
    icon: 'gauge',
  },
]

export const BENEFITS = [
  {
    title: 'Made for Beginners',
    text: 'No finance degree required. The platform guides you from your first sign-in all the way to your first trade.',
    icon: 'smile',
  },
  {
    title: 'Committed to Compliance',
    text: 'Every trade is executed through partnered, regulated brokers, and the platform is run with a firm focus on meeting regulatory standards.',
    icon: 'shield',
  },
  {
    title: 'Start Small',
    text: 'Get started with a minimum deposit of just $250 - enough to test the waters without stretching yourself.',
    icon: 'coins',
  },
  {
    title: 'Clear, Upfront Fees',
    text: 'Costs are itemised before you commit. What you see on screen is exactly what you pay - nothing more.',
    icon: 'receipt',
  },
  {
    title: 'Trade Around the Clock',
    text: 'Markets never sleep, and neither does your access - trade from any device, anywhere, at any hour.',
    icon: 'clock',
  },
  {
    title: 'Help Whenever You Need It',
    text: 'A friendly support desk is staffed 24/7, so help is never more than a message away.',
    icon: 'headset',
  },
]

export const SECURITY_FEATURES = [
  {
    title: 'Bank-Grade Data Encryption',
    text: 'Every connection to our servers uses 256-bit SSL encryption - the same standard the banks rely on.',
    icon: 'lock',
  },
  {
    title: 'Offline Asset Storage',
    text: 'The vast majority of funds - 98% - sit in cold storage, kept completely disconnected from the internet.',
    icon: 'vault',
  },
  {
    title: 'Two-Step Login Protection',
    text: 'Add an extra verification layer to every sign-in so your account stays yours alone.',
    icon: 'key',
  },
  {
    title: '24/7 Activity Monitoring',
    text: 'Automated systems watch every account day and night and flag anything that looks out of the ordinary.',
    icon: 'eye',
  },
  {
    title: 'Unreadable Passwords',
    text: 'Credentials are stored as one-way hashes - even our own staff can never see your password.',
    icon: 'fingerprint',
  },
  {
    title: 'Hardened Infrastructure',
    text: 'The platform runs on battle-tested, audited technology already trusted by millions worldwide.',
    icon: 'server',
  },
]

export const STEPS = [
  {
    title: 'Sign Up',
    text: 'Create your free account in a couple of minutes - all you need is a name, email and phone number.',
  },
  {
    title: 'Deposit Funds',
    text: 'Add $250 or more via card, bank transfer or e-wallet.',
  },
  {
    title: 'Start Trading',
    text: 'Trade BTC, ETH, SOL, BNB, USDT and more - let the AI manage it or drive manually.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'James C.',
    location: 'London, UK',
    initials: 'JC',
    returnPct: '+18.2%',
    quote:
      'I joined with zero trading experience. The platform explained everything step by step, and within weeks I was seeing steady, consistent results.',
  },
  {
    name: 'Olivia R.',
    location: 'Toronto, Canada',
    initials: 'OR',
    returnPct: '+15.6%',
    quote:
      'The dashboard honestly feels more like online banking than trading software. Withdrawals have been quick and completely painless.',
  },
  {
    name: 'Ethan W.',
    location: 'New York, USA',
    initials: 'EW',
    returnPct: '+19.1%',
    quote:
      'The analysis engine keeps finding opportunities I would have missed on my own. It works quietly in the background while I focus on my day job.',
  },
  {
    name: 'Sophie T.',
    location: 'Berlin, Germany',
    initials: 'ST',
    returnPct: '+14.3%',
    quote:
      'Transparency is what won me over. Every fee is shown upfront, and the 24/7 support team actually answers the phone.',
  },
  {
    name: 'Liam B.',
    location: 'Dubai, UAE',
    initials: 'LB',
    returnPct: '+16.8%',
    quote:
      'I began with the minimum deposit just to try it out. Six months on, it has become a regular part of my monthly income.',
  },
  {
    name: 'Charlotte M.',
    location: 'Singapore',
    initials: 'CM',
    returnPct: '+17.4%',
    quote:
      'Round-the-clock access suits my schedule perfectly. I glance at my phone in the morning and let the automated trading handle the rest.',
  },
]

export const BAND_QUOTES = [
  {
    quote: 'I signed up on a Tuesday and placed my first trade by Friday. Genuinely impressed.',
    author: 'Daniel K. - London',
  },
]

export const FAQS = [
  {
    q: 'How do I get started with Harborwyn AI?',
    a: 'Sign up for a free account, add funds, and you can trade straight away. Run things yourself, or switch on the built-in analysis engine, which scans the markets and acts according to the settings you choose. Your funds and your settings always stay under your control.',
  },
  {
    q: 'How is my money protected?',
    a: 'Several safeguards work together: 256-bit SSL encryption on every connection, 98% of funds held in offline cold storage, two-step login verification, and around-the-clock monitoring for unusual activity. Passwords are stored using one-way hashing, so nobody - not even our staff - can ever read them.',
  },
  {
    q: 'How quickly can I withdraw my funds?',
    a: 'You can request a withdrawal from your dashboard whenever you like. Most requests are completed within 24-48 hours, and funds are returned to the payment method you originally used wherever possible.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. Any cost attached to a transaction is shown clearly before you confirm it. If a fee applies, you will always see the exact amount first.',
  },
  {
    q: 'Do I need any experience to use the platform?',
    a: 'None whatsoever. The interface was built for first-timers, the minimum deposit is just $250, and the analysis engine plus built-in guides help you build confidence one step at a time.',
  },
  {
    q: 'Which markets can I access?',
    a: 'From a single account you can trade a broad mix of instruments, including shares, currencies (forex), commodities, precious metals, CFDs and cryptocurrencies.',
  },
]

export const RATING = {
  score: '4.7',
  reviews: 189,
}

// Dedicated FAQs page - original phrasing, modeled on the reference
// site's /faq page (Here to Help + quick answers + 8-question list).
export const FAQS_PAGE = [
  {
    q: 'What is Harborwyn AI and how does it work?',
    a: 'Harborwyn AI is an AI-supported trading platform that works continuously - scanning markets, spotting potential opportunities and placing trades automatically through partnered, regulated brokers, all according to the settings you choose. Prefer manual? Switch modes whenever you like.',
  },
  {
    q: 'How does Harborwyn AI keep my funds and data secure?',
    a: 'Security runs through every layer of the platform. Personal data is protected with recognised encryption and account authentication, and transactions flow through established payment providers. Trades, signals and balance updates are displayed clearly, so you can always see exactly what is happening on your account.',
  },
  {
    q: 'Can I request a withdrawal at any time?',
    a: 'Yes - you can request a withdrawal whenever you like, subject to account checks, available funds and your payment provider’s processing requirements. Your balance stays visible at all times, and processing times can vary by provider.',
  },
  {
    q: 'Are there any fees or costs?',
    a: 'Fee information is always displayed before you proceed. Registration is free and there is no platform commission, though broker spreads and other charges may apply depending on the service or payment method. Getting started requires a minimum deposit of $250 - payment methods may include credit cards, bank transfers and PayPal.',
  },
  {
    q: 'Do I need experience to start?',
    a: 'No. The platform suits newcomers and experienced traders alike. In automated mode the AI handles market scanning, signal generation and trade execution based on your settings - or switch to manual mode for full control.',
  },
  {
    q: 'Do I need to monitor the platform constantly?',
    a: 'No. Harborwyn AI continuously analyses live charts, trends and patterns, which cuts down the need for constant monitoring. The automated system manages activity based on your chosen settings, though a regular review of your account is still wise.',
  },
  {
    q: 'What can I trade?',
    a: 'Through partnered brokers you get access to a range of markets, which may include cryptocurrencies such as Bitcoin, Ethereum, Solana, BNB and USDT, as well as forex, shares, commodities, precious metals and CFDs.',
  },
  {
    q: 'How do I contact support?',
    a: 'Reach our support team any time from the Contact Us page, or email us directly at support@harborwynai.io. We’re glad to help with anything from accounts and deposits to withdrawals and platform questions.',
  },
]

// About Us page - original phrasing, modeled on the reference /about page.
export const ABOUT_FEATURES = [
  {
    title: 'AI-supported market analysis',
    text: 'Automated analysis and trade-management tools help you make better-informed decisions.',
    icon: 'chip',
  },
  {
    title: 'Clear account controls',
    text: 'Encryption safeguards and simple account settings help keep your information protected.',
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
    text: 'A fintech team set out to make crypto trading simpler to understand and easier to manage.',
  },
  {
    title: 'First launch',
    text: 'The platform went live with a carefully chosen range of cryptocurrencies and a streamlined account experience.',
  },
  {
    title: 'Building our community',
    text: 'As the user base grew, so did the platform - and the support experience kept improving alongside it.',
  },
  {
    title: 'Expanding access',
    text: 'Availability now spans multiple markets, with payment options and security controls that vary by region.',
  },
  {
    title: 'Today',
    text: 'Account management, market analysis and automated trade management now come together in one place.',
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
    text: 'Clear account controls, open platform information and straightforward user journeys.',
    icon: 'eye',
  },
  {
    title: 'Innovation',
    text: 'AI-supported and algorithmic tools that help you analyse markets and manage your trading.',
    icon: 'chip',
  },
  {
    title: 'Responsibility',
    text: 'Clear service standards and honest risk communication, so you can trade with your eyes open.',
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
    text: 'Withdraw from your available balance whenever you like - charges and transaction details appear before you confirm.',
  },
  {
    title: 'Unsure what to trade?',
    text: 'Let the AI analyse selected markets - Bitcoin, Ethereum, forex, shares, commodities and more - and flag opportunities for you.',
  },
]
