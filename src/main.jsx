import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import logo from './assets/logo-black-on-white.ico'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <meta charSet="UTF-8"/>
    <title>Garbot - Your trash companion</title>
    <link rel="icon" type="image/x-icon" href={logo}/>
        <App/>
    </StrictMode>,
)
