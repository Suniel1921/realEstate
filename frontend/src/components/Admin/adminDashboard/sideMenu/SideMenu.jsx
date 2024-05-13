import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaUserPlus } from "react-icons/fa";
import '../sideMenu/sidemenu.css'

const SideMenu = () => {
  return (
    <>
    <div className='sideMenu_container'>
        <div className="sideItems">
            <Link to={'/'} className='listItems'>
                <FaHome/>
                <span>Home</span>
            </Link>
            <Link to={'/dashboard/admin'} className='listItems'>
                <FaHome/>
                <span>Analytics</span>
            </Link>
            <Link to={'/dashboard/admin/createRoom'} className='listItems'>
                <FaHome/>
                <span>Add Property</span>
            </Link>
            <Link to={'/dashboard/admin/manageProperty'} className='listItems'>
                <FaHome/>
                <span>Manage Property</span>
            </Link>
        </div>

    </div>
      
    </>
  )
}

export default SideMenu
