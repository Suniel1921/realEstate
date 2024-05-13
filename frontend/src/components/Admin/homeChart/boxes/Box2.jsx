import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Box2 = () => {
    const [totalFlatCount, setTotalFlatCount] = useState([]);

    const getTotalFlatCount = async ()=>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/totalFlat`)
            // console.log(response)
            if(response.data.success){
                setTotalFlatCount(response.data.totalFlat);
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
        getTotalFlatCount();
    },[])


  return (
    <>
    <div className="box2_container">
    <div className="box2">
        <h3>Total Flat</h3>
        <div className="userCountBg">
          <h2 className="userCount">{totalFlatCount}</h2>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Box2
