import React from 'react'
import '../navbar/navbar.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthGlobally } from '../../context/AuthContext';
import toast from 'react-hot-toast';


const Navbar = () => {

  const [auth, setAuth] = useAuthGlobally();
  const navigate = useNavigate();

  //Function to handle user logou
  const handleLogout = ()=>{
    setAuth({...auth, user: null, token : ''});
    localStorage.removeItem('token');
    toast.success("Logout successfully");
    navigate('/login')
  }

  return (
    <>
   <div className='navbar_container'>
   <div className='navbar global_flex container'>
        <NavLink to={'/'}>
            <img className='logoImg' src="/image/realestatelogo.png" alt="" />
        </NavLink>
       
        {
          auth.user ? (
           <>
            <div className='loggedInuser_container'>
            <h3>Hi ! {auth.user.name}</h3>
            <p className='logoutButton' onClick={handleLogout}>Logout</p>
            </div>
           </>

           
          ) : (
            <ul className='navlinks global_flex'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
            <li><NavLink to={'/login'}>Login</NavLink></li>
            <li><NavLink to={'/register'}>Register</NavLink></li>
        </ul>

          )
        }
    </div>
   </div>
    </>
  )
}

export default Navbar
