import React from 'react'
import SideMenu from './sideMenu/SideMenu';
import '../adminDashboard/adminDashboard.css';
import HomeChart from '../homeChart/HomeChart';


const AdminDashboard = () => {
  return (
    <>
   <div className='sideMenuContainer'>
           
            <div className='sidemenu'><SideMenu/></div>
            <div className='homeChart'><HomeChart/></div>
        
            
        </div>
        
      
    </>
  )
}

export default AdminDashboard
