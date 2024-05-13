import React from 'react';
import '../homeChart/homeChart.css';
import Box4 from './boxes/Box4';
import Box3 from './boxes/Box3';
import Box2 from './boxes/Box2';
import Box1 from './boxes/Box1';

const HomeChart = () => {
  return (
    <>
    <div className='admin_Grid_container'>
        <div className='charts chartBox1'><Box1/></div>
        <div className='charts chartBox2'><Box2/></div>
        <div className='charts chartBox3'> <Box3/></div>
        <div className='charts chartBox4'><Box4/></div>
        <div className='charts chartBox5'>box5</div>
        <div className='charts chartBox6'>box6</div>
        <div className='charts chartBox7'>box7</div>

        
    </div>
      
    </>
  )
}

export default HomeChart
