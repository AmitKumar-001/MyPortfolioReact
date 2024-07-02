How to make Router in other  file/folder the below code written in main.jsx
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

    </Route>
  )
)

issue to make nested links like /about/contact

another way also to fetch data (send request to url and fetch data) like in Github.jsx time is 05:25