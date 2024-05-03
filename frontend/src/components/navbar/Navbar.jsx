import React from 'react'
import '../navbar/navbar.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <div className='navbar_container'>
   <div className='navbar global_flex container'>
        <NavLink to={'/'}>
            <img className='logoImg' src="/image/realestatelogo.png" alt="" />
        </NavLink>
        <ul className='navlinks global_flex'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
            <li><NavLink to={'/login'}>Login</NavLink></li>
            <li><NavLink to={'/register'}>Register</NavLink></li>
        </ul>
    </div>
   </div>
    </>
  )
}

export default Navbar
