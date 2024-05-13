import React from 'react';
import { useAuthGlobally } from '../../../../context/AuthContext';
import '../boxes/box4.css'


const Box4 = () => {
    const [auth, setAuth] = useAuthGlobally();

  return (
    <>
    <div className='box4_container'>
        <div className='user'>
            <img className='adminUserImg' src="/image/adminUser.png" alt="" />
        <h2>Welcome Back , <span>{auth?.user?.name}</span></h2>
        <h3>Congratulations 🎉</h3>
        <p>Your website has reached done 72% 🤩 more interactvie today.Check your new raising badge in your profile.</p>
        </div>

    </div>
      
    </>
  )
}

export default Box4
