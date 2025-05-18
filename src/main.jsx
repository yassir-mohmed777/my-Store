import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
