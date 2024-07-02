import { useState } from 'react'

import './App.css'
import Bg from './components/Bg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bg />
    </>
  )
}

export default App
