import React from 'react'
import { useState } from 'react'
import MenuContext from './MenuContext';

const MenuContextProvider = ({children}) => {
    const [menuStatus, setMenuStatus] = useState();
  return (
    <MenuContext.Provider value={{menuStatus, setMenuStatus}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider