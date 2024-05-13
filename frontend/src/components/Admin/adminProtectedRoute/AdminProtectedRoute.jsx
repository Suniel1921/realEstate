// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Outlet } from 'react-router-dom';
// import Loading from '../../loading/Loading';
// import { useAuthGlobally } from '../../../context/AuthContext';

// const AdminProtectedRoute = () => {
//     const [ok, setOk] = useState(false);
//     const [auth, setAuth] = useAuthGlobally();

//     useEffect(()=>{
//         const authCheck = async ()=>{
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/admin`,{

//                     headers: {
//                         Authorization: `Bearer ${auth.token}`
//                     }
//                 });
//                 if(response.data.ok){
//                     setOk(true);                    
//                 }
//                 else{
//                     setOk(false);
//                 }
                
//             } catch (error) {
//                 console.log(`Error while Checking authentication: ${error}`)
//                 setOk(false);
                
//             }
//         }
//         if(auth?.token){
//             authCheck();
//         }


//     },[auth?.token])


//   return ok ? <Outlet/> : <Loading/>
// }

// export default AdminProtectedRoute





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../../loading/Loading';
import { useAuthGlobally } from '../../../context/AuthContext';

const AdminProtectedRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuthGlobally();

    useEffect(()=>{
        const authCheck = async () => {
            try {
                const token = auth?.token;
                if (!token) return; 
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/admin`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setOk(response.data.ok); 
            } catch (error) {
                console.log(`Error while Checking authentication: ${error}`);
                setOk(false);
            }
        }
        authCheck();
    },[auth?.token])

    return ok ? <Outlet/> : <Loading/>;
}

export default AdminProtectedRoute;
