import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(15)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  
  const generatePassword = useCallback(() =>{ //read about useCallBack
    //console.log("in generatePasword")
    let pass= " "
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"

    if(numberAllowed){
      str += "0987654321"
      // console.log("number allowed")
    }
    if(charAllowed){
      str += "!@#$%^&*()_+"
      // console.log("char allowed")
    }
    
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1) //ye samajhana hai
      pass += str.charAt(char)
      //console.log("generating password at char: "+i)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
    //console.log("in useEffect");
  }, [length, numberAllowed, charAllowed])

  return (
    <>      
    <div className=' bg-gray-800 text-orange-500 max-w-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 '>
      <h1 className=' text-white text-center my-3'>Password Generator</h1>
      <div className=' flex shadow overflow-hidden rounded-lg mb-4'>
        <input type="text"
          value={password}
          className='w-full py-1 px-3'
          placeholder='Password'
          readOnly
        />
        <button
        className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1'>
          <input type="range" name="" id="" 
           min={6}
           max={100}
           value={length}
           className=' cursor-pointer'
           onChange={ (event) => {setLength(event.target.value)
            console.log(event.target.value);
           }} //ye samaghana hai???
          />
          <label htmlFor="length">Lenght: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="" id="" 
           defaultChecked={numberAllowed} //ye samaghena hai >> ye true or false
           onChange={() => {
            setNumberAllowed((previous) => !previous)
           }} 
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="" id="" 
           defaultChecked={charAllowed}
           onChange={() => {
            setCharAllowed((previous) => !previous)
           }} 
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
