import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Some base styles applied to the root - everything else as a CSS module.
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)