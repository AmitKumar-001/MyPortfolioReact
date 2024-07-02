import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Nav from './components/Header/Nav'
import Nav3 from './components/Header/Nav3'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
        <Header />
        {/* <Nav3 /> */}
        <Outlet />        
        <Footer />
    </>
  )
}

export default Layout