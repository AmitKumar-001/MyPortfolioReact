import { useEffect, useState } from 'react'
import './App.css'
import { InputBox } from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amountToConvert, setAmountToconvert] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState('usd')
  const [currencyTo, setCurrencyTo] = useState('inr')

  // const optionsOfCurrency = ['USD', 'INR', 'gbp']
  // function convert(){
  //   console.log("Converting...");
  //   setConvertedAmount(amountToConvert * 50)
  // }

  const currencyInfo = useCurrencyInfo(currencyFrom)
  const optionsOfCurrency = Object.keys(currencyInfo)
  const convert = () =>{
    console.log("Converting...");
    console.log("1 "+currencyFrom.toUpperCase()+" = "+currencyInfo[currencyTo]+" "+currencyTo.toUpperCase());
    setConvertedAmount(amountToConvert * currencyInfo[currencyTo])
    console.log("Converted Amount: "+convertedAmount);
    console.log("Amount to convert: "+amountToConvert);
  }

  const swap = () =>{
    console.log("Swaping...");
    setConvertedAmount(amountToConvert)
    console.log("Converted Amount: "+convertedAmount);
    setAmountToconvert(convertedAmount)
    console.log("Amount to convert: "+amountToConvert);
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
  }         

  return (
    <>
      <div className=' w-full h-screen flex flex-wrap
       justify-center items-center bg-cover bg-no-repeat'
       style={{backgroundImage: `url(https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox 
                  label='From'
                  amount={amountToConvert}
                  onAmountChange={(amount) => setAmountToconvert(amount)}
                  currencyOptions={optionsOfCurrency}
                  onCurrencyChange={(currency) => setCurrencyFrom(currency)}
                  selectedCurrency={currencyFrom}
                />  
              </div>

              <div className='relative w-full h-0.5'>
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
                  Swap
                </button>
              </div>

              <div className='w-full mb-1'> 
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  amountChangeDisabled
                  currencyOptions={optionsOfCurrency}
                  onCurrencyChange={(currency) => setCurrencyTo(currency)}
                  selectedCurrency={currencyTo}
                />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >
                Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App