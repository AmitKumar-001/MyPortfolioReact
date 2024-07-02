import React from 'react'

const Background = () => {
  return (
    <nav className= 'bg-red-400'>
        {/* //w-auto mr-96 ml-96 mb-2  */}
        <div className= 'flex flex-wrap justify-center inset-x-0 bg-slate-600 rounded-3xl gap-3'>
            <button className= 'bg-gray-600'>Green</button>
            <button>Red</button>
            <button>Black</button>
            <button>White</button>
        </div>
    </nav>
  )
}

export default Background