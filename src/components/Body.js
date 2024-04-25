import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Books from "./Books"
const Body = () => {
  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Books/>
    },
    
  ])
  return (
    <div >
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body