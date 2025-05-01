import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CadastroVendedor } from './pages/CadastroVendedores.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
