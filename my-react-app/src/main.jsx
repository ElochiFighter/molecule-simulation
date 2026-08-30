import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Compound from './Compound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Compound />
  </StrictMode>,
)
