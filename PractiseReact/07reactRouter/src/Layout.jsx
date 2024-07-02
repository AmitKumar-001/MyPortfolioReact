import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function Layout() {
  return (
    <>
        <Header />
        {/* <div className=' w-full h-96'>
            <Outlet />
        </div> */}
        <Outlet /> 
        {/* outlet Renders the child route's element, if there is one. */}
        {/* if we don't use outlet then other components in route did not appear */}
        <Footer /> 
    </>
  )
}

export default Layout