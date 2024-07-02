import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Header/Nav'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' mb-5 bg-black text-white' style={{backgroundImage:"url(./src/assets/Images/2.jpg)", backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
      <Nav />
      <div className=' '> hello</div>
      <About />
      
    </div>
  )
}

export default App
