import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Temporary: import GSAP disable utility before App mounts
import './utils/disableGsap'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
