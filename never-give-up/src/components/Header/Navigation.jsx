import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({navName, linkto}) {
    return (
        <li className=' hover:bg-gray-700 hover:text-white md:text-3xl'>
            {navName}
        </li>
    )
}

export default Navigation