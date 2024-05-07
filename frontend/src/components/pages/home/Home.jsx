import React from 'react'
import '../home/home.css'
import Slider from '../../slider/Slider'
import Listing from '../../listing/Listing'

const Home = () => {
  return (
    <>
    <div className='home_container'>
        <div className='slider_component'><Slider/></div>
        <div className='listing_component container'><Listing/></div>
        

    </div>
      
    </>
  )
}

export default Home
