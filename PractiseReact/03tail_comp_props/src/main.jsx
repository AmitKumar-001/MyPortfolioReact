import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './component/Card'
import Background from './component/Background.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Background /> */}
    <App />
    <Card username="Amit"/>
    <Card />
    <Card positioon='web developer'/>
  </React.StrictMode>,
)
