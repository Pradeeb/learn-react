import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { myTheme } from './Theam.js'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>
)
