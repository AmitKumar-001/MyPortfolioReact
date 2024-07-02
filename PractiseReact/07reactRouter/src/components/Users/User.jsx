import React from 'react'
import { useParams } from 'react-router-dom'
//useParam takes data from link


function User() {
    const {userid} = useParams()
  return (
    <div className=' bg-orange-500 text-black text-3xl text-center'>
        User : {userid} 
    </div>
  )
}

export default User