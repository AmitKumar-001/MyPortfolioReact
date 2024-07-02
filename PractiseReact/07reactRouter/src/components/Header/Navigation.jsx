import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navigation({
    navName,
    linkto
}) { 
    return (
            <li>
                <NavLink to={linkto}
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-1 
                    ${isActive  ? " text-orange-700" :" text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                {navName}
                </NavLink>
            </li>
  )
}

export default Navigation