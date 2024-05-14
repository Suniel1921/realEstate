import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const Box1 = () => {
    const [totalLandCount, setTotalLandCount] = useState([]);

    const getTotalLandCount = async ()=>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/totalLand`)
            // console.log(response)
            if(response.data.success){
                setTotalLandCount(response.data.totalLand);
            }
            else{
                toast.error('something went wrong');
            }
            
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.message);
            }
            else{
                toast.error("something went wrong")
            }
            
        }
    }

    useEffect(()=>{
        getTotalLandCount();
    },[])


  return (
    <>
    <div className="box2_container">
    <div className="box2">
        <h3>Total Land</h3>
        <div className="userCountBg">
          <h2 className="userCount">{totalLandCount}</h2>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Box1




