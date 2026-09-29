// Generates public/og-image.png (1200x630) for Harborwyn AI.
// Run: node scripts/rasterize-og.mjs
// Uses the site palette: slate #0a2540, lime #34d399.
import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs'

const W = 1200
const H = 630

const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600;700&family=Manrope:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { width: ${W}px; height: ${H}px; background: #0a2540; overflow: hidden; position: relative; }
      .glow1 {
        position: absolute; top: -180px; right: -140px; width: 560px; height: 560px; border-radius: 50%;
        background: radial-gradient(circle, rgba(14, 116, 144, 0.45) 0%, rgba(64, 112, 255, 0) 70%);
      }
      .glow2 {
        position: absolute; bottom: -220px; left: -140px; width: 560px; height: 560px; border-radius: 50%;
        background: radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, rgba(154, 230, 0, 0) 70%);
      }
      .coin {
        position: absolute; width: 92px; height: 92px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 26px; color: #0a2540;
      }
      .coin--btc { top: 96px; right: 120px; background: #f7931a; transform: rotate(8deg); }
      .coin--eth { top: 150px; right: 260px; background: #8a92b2; transform: rotate(-6deg); }
      .coin--sol { top: 250px; right: 110px; background: #9945ff; transform: rotate(4deg); }
      .coin--usdt { top: 400px; right: 300px; background: #26a17b; transform: rotate(-4deg); }
      .content { position: absolute; left: 90px; top: 96px; width: 780px; }
      .badge {
        display: inline-flex; align-items: center; gap: 12px; padding: 10px 22px; border-radius: 999px;
        background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.14);
        font-family: 'Manrope', sans-serif; font-size: 20px; font-weight: 600; color: #34d399; letter-spacing: 0.4px;
      }
      .badge .dot { width: 10px; height: 10px; border-radius: 50%; background: #34d399; }
      h1 { margin-top: 34px; font-family: 'Epilogue', sans-serif; font-size: 88px; font-weight: 700; color: #ffffff; line-height: 1.05; }
      h1 span { color: #34d399; }
      .sub { margin-top: 22px; font-family: 'Manrope', sans-serif; font-size: 26px; font-weight: 500; color: #a8bccd; }
      .points { margin-top: 30px; display: flex; gap: 18px; }
      .point {
        display: flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 10px;
        background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
        font-family: 'Manrope', sans-serif; font-size: 18px; font-weight: 600; color: #ffffff;
      }
      .check { color: #34d399; font-weight: 700; }
      .footer {
        position: absolute; bottom: 40px; left: 90px; display: flex; align-items: center; gap: 16px;
        font-family: 'Manrope', sans-serif; font-size: 20px; font-weight: 600; color: #9fb8cc;
      }
      .footer svg { flex-shrink: 0; }
      .rule { position: absolute; left: 90px; right: 90px; bottom: 92px; height: 2px; background: rgba(255, 255, 255, 0.08); }
    </style>
  </head>
  <body>
    <div class="glow1"></div>
    <div class="glow2"></div>
    <div class="coin coin--btc">B</div>
    <div class="coin coin--eth">E</div>
    <div class="coin coin--sol">S</div>
    <div class="coin coin--usdt">T</div>
    <div class="content">
      <div class="badge"><span class="dot"></span>AI-ASSISTED CRYPTO TRADING</div>
      <h1>Harborwyn <span>AI</span></h1>
      <div class="sub">Trade Bitcoin, Ethereum, Solana and more from $250 - automated or manual, on your terms.</div>
      <div class="points">
        <div class="point"><span class="check">✓</span> Smart market analysis</div>
        <div class="point"><span class="check">✓</span> Regulated broker partners</div>
        <div class="point"><span class="check">✓</span> Open 24/7</div>
      </div>
    </div>
    <div class="rule"></div>
    <div class="footer"><svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true"><g stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"><line x1="32" y1="20.5" x2="13" y2="14"/><line x1="32" y1="20.5" x2="20.5" y2="4.5"/><line x1="32" y1="20.5" x2="32" y2="1.5"/><line x1="32" y1="20.5" x2="43.5" y2="4.5"/><line x1="32" y1="20.5" x2="51" y2="14"/></g><rect x="25.5" y="17.5" width="13" height="9.5" rx="2.5" fill="#34d399"/><rect x="29" y="20" width="6" height="4.5" rx="1" fill="#ffffff"/><polygon points="21.5,30.5 42.5,30.5 41,53 23,53" fill="#ffffff"/><rect x="29.5" y="43.5" width="5.5" height="9.5" rx="2.75" fill="#0a2540"/><g stroke="#34d399" stroke-width="2.4" stroke-linecap="round" fill="none"><path d="M8 57.5 Q14 55.3 20 57.5 T32 57.5 T44 57.5 T56 57.5"/><path d="M12 61 Q18 58.8 24 61 T40 61 T56 61"/></g></svg>harborwynai.io</div>
  </body>
</html>`

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })
await page.goto(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`)
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(400)
await page.screenshot({ path: 'public/og-image.png' })
await browser.close()
console.log('Wrote public/og-image.png')
