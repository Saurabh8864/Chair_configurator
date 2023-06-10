import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfiguratorProvider } from './components/context/Configurator'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ConfiguratorProvider>
    <App />
    </ConfiguratorProvider>
   
  </React.StrictMode>,
)
