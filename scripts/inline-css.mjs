// Postbuild: inlines the compiled CSS and the Google Fonts CSS into
// dist/index.html so neither stylesheet blocks first paint and the hero
// headline paints with the real font as soon as the woff2 arrives.
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const dist = 'dist'
const htmlPath = join(dist, 'index.html')
let html = readFileSync(htmlPath, 'utf8')

// 1) Inline the app CSS (only the Vite-built link, keep other links).
const cssFile = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.css'))
const css = readFileSync(join(dist, 'assets', cssFile), 'utf8')
html = html.replace(
  /<link[^>]*href="\/assets\/[^"]*\.css"[^>]*\/?>/g,
  `<style>${css}</style>`
)

// 2) Inline the Google Fonts CSS so fonts apply as early as possible.
const fontsCss = await fetch(
  'https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap',
  { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0 Safari/537.36' } }
).then((r) => r.text())

if (fontsCss) {
  html = html.replace(
    /<link[^>]*href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*\/?>/g,
    (match) => match.replace(/rel="preload" as="style"/, '') === match ? match : ''
  )
  // simpler: strip all googleapis stylesheet/preload links, then inject one <style>
  html = html.replace(/<link[^>]*fonts\.googleapis\.com[^>]*\/?>/g, '')
  html = html.replace('</head>', `  <style>${fontsCss}</style>\n  </head>`)
}

writeFileSync(htmlPath, html)
console.log(`inlined ${cssFile} + fonts CSS into index.html`)
