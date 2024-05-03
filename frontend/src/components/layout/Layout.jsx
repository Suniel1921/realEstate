import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <>
    <div>
        <div className=''><Navbar/></div>
        <Outlet/>
        <div className='container'><Footer/></div>
    </div>
      
    </>
  )
}

export default Layout
