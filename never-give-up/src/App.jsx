import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Header/Navigation'
import Nav from './components/Header/Nav'
import About from './components/About/About'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import { ThemeProvider } from './context/theme'

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<div className='h-screen text-center text-white sm:text-7xl'>Not defined yet</div> }/>
    </Route>
  )
);

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () =>{
    setThemeMode('dark')
  }

  const lightTheme = () =>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }),[themeMode]

  return (
    <>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      {/* <div className="bg-fixed bg-center bg-cover bg-no-repeat h-auto w-auto bg-[url(https://cdn.sapphire.microsoftapp.net/webapps/wallpapers/static/in/20221206_india_754_pr.jpg)] sm:bg-[url(./src/assets/Images/1.jpg)]">  */}
      <div className="bg-fixed bg-center bg-cover bg-no-repeat h-full w-auto bg-teal-400 dark:bg-slate-600"> 

      {/* <div className=' bg-no-repeat bg-cover' style={{backgroundImage:"url(https://cdn.sapphire.microsoftapp.net/webapps/wallpapers/static/in/20221206_india_1170_pr.jpg)"}}> */}
      <RouterProvider router={routers}/>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
