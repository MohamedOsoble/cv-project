import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx'
import General from './components/general.jsx'
import generateForm from './components/generator.jsx'
import Education from './components/education.jsx'
import Work from './components/work.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
