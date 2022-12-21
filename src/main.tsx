import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Test from "./templates/test"
import './index.css'
import './css/tail.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>,
)
