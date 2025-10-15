import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import about_me from './jsx/about_me.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <about_me />
    </BrowserRouter>
  </StrictMode>
)
