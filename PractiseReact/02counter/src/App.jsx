import { useState } from 'react'
import './App.css'

function App() {
  //type [variableName, functionName] = useState(initialValue)
  const [count, setCount] = useState(5)
  let counter = count;

  //this only change value of the variable but don't reflect in html tag
  // let counter = 5;
  // function addValue() {
  //   counter = counter +1;
  //   console.log(counter);
  // }

  //to view effect of the change everywhere use hook useState
  function addValue(){
    setCount(count+1)
    console.log("counter value:"+counter);
  }
  function removeValue() {
    // setCount(count-1)
    //can do another way
    let newCounter = counter - 1;
    setCount(newCounter);
    console.log("Couunter on removed: "+counter);
  }

  return (
    <>
      <h1>Learning hooks: {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick= {addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>Counter value at footer: {counter} </footer>
    </>
  )
}

export default App
