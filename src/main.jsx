import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// Enable reveal animations only once the app JS runs — the prerendered
// shell stays fully visible until then so FCP/LCP paint early.
document.documentElement.classList.add('js')

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// The home page ships prerendered markup in index.html — hydrate it so
// the static nodes (and their early LCP paint) are reused. Any other
// route renders fresh.
if (window.location.pathname === '/' || window.location.pathname === '') {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
