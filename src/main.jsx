import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import JobDetails from "./pages/JobDetails"
import PostJob from "./pages/PostJob"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([{
  path:"/",element:<App/>
},
{
  path:"/jobdetails/:id",element:<JobDetails/>
},{
  path:"/postjob",element:<PostJob/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
