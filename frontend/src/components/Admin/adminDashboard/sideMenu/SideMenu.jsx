import React from 'react';
import { Link } from 'react-router-dom';
// import { FaHome } from 'react-icons/fa'; 
import '../sideMenu/sidemenu.css';

const SideMenu = () => {
  return (
    <div className='sideMenu_container'>
      <div className="sideItems">
        <Link to={'/'} className='listItems'>
          {/* <FaHome /> */}
          <span>Home</span>
        </Link>
        <Link to={'/dashboard/admin'} className='listItems'>
          {/* <FaHome /> */}
          <span>Analytics</span>
        </Link>
        <Link to={'/dashboard/admin/createRoom'} className='listItems'>
          {/* <FaHome /> */}
          <span>Add Property</span>
        </Link>
        <Link to={'/dashboard/admin/manageProperty'} className='listItems'>
          {/* <FaHome /> */}
          <span>Manage Property</span>
        </Link>
        <Link to={'/dashboard/admin/createCategory'} className='listItems'>
          {/* <FaHome /> */}
          <span>Create Category</span>
        </Link>
        <Link to={'/dashboard/admin/createCategoryPurpose'} className='listItems'>
          {/* <FaHome /> */}
          <span>Create Category Purpose</span>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
