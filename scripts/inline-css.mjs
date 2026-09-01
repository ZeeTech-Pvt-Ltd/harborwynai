// Postbuild: inlines the compiled CSS into dist/index.html so the
// stylesheet never blocks first paint (no render-blocking request).
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const dist = 'dist'
const htmlPath = join(dist, 'index.html')
let html = readFileSync(htmlPath, 'utf8')

const cssFile = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.css'))
const css = readFileSync(join(dist, 'assets', cssFile), 'utf8')

// Only replace the Vite-built stylesheet link (href="/assets/...css"),
// leaving the Google Fonts links untouched.
html = html.replace(
  /<link[^>]*href="\/assets\/[^"]*\.css"[^>]*\/?>/g,
  `<style>${css}</style>`
)

writeFileSync(htmlPath, html)
console.log(`inlined ${cssFile} (${(css.length / 1024).toFixed(1)} KB) into index.html`)
