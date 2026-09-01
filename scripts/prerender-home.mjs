// Prerenders the Home route to static markup (must match the client's
// initial render exactly so hydrateRoot can reuse the nodes).
import { createRequire } from 'module'
import { createServer } from 'vite'

const require = createRequire(import.meta.url)
const React = require('react')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router')

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

const { default: App } = await server.ssrLoadModule('/src/App.jsx')

const html = renderToString(
  React.createElement(StaticRouter, { location: '/' }, React.createElement(App))
)

console.log(html)
await server.close()
