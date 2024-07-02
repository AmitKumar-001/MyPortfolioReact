import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/About/Contact.jsx'
import Github, {githubInfoLoader} from './components/About/Github.jsx'
import User from './components/User/User.jsx'
// import Github, {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={<Layout />}>
      <Route exact path='' element={<Home />}/>
      {/* <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} /> */}
      <Route exact path='about' element={<About />} >
        <Route exact path='contact' element={<Contact />} />
      </Route>
      <Route exact path='user/' element={<User />} >
        <Route exact path=':userid' element={<User />} />
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)