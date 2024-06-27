import '../footer/footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { Link, NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

  const openNepalTechWebsite = () => {
    window.open('https://www.nepaltechinnov.com', '_blank');
  }
  
  

  return (
    <>
    <div className='footerContainer'> 
    <div className='container'>
        <div className='footer'>
          <div className='quick_link'>
            <h3>Quick Links</h3>
            <ul className='links'>
              <li><NavLink to={'/about'}>About</NavLink></li> 
              <li><NavLink to={'/test'}>Why Us?</NavLink></li>              
              <li><NavLink to={'/test'}>page</NavLink></li>
              <li><NavLink to={'/test'}>page</NavLink></li>
            </ul>
            
          </div>
          <div className='contact_info'>
            <h3>Contact Info</h3>
            <ul className='links'>
              <li><p><FaMapMarkerAlt/>Khumaltar,Lalitpur,Nepal</p></li>
              <li><p><MdEmail/> info@realEstate.com.np</p></li>
              <li><p><FaPhoneAlt/>+977000000</p></li>
            </ul>
          </div>
          <div className='social_media'>
            <h3>Social Media</h3>
            <p>Stay connected with us through social media.</p>
            <ul className='icons'>
            <Link to="https://www.facebook.com/" target="_blank"> <FaSquareFacebook /></Link>
            <Link to="https://www.instagram.com" target="_blank"> <FaSquareInstagram /></Link>
              <p><FaTwitterSquare/></p>              
            </ul>
          </div>
        </div>
    </div>

    <div className='copyrightContainer'>
    <div className='powredByNepalTech container'>
        <h4  onClick={openNepalTechWebsite}>Powered By <span className='nepal'>Nepal</span> <span className='tech'>Tech</span></h4>
      </div>
      <div className='copyrightContent container'>
      <h4> &copy; 2024 By RealEstate || All Right Reserved</h4>  
      </div>
     
    </div>
    </div>
      
    </>
  )
}

export default Footer
