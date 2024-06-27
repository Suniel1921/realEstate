import React from 'react'
import '../login/login.css'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import {useFormik} from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthGlobally } from '../../../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuthGlobally();

    //validation schema using yup
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required"),
        password : Yup.string().required("Password is required"),
    })


    //formik hook form management
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values)=>{
            try {
                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/login`, values);
                // const response = await axios.post("http://localhost:3000/api/v1/auth/login", values);
                if (response && response.data && response.data.success) {
                    // Update authentication state upon successful login
                    setAuth({ user: response.data.user, token: response.data.token });

                    localStorage.setItem('token', JSON.stringify(response.data));
                    toast.success(response.data.message);
                    formik.resetForm();
                    navigate('/');
                } else {
                    toast.error(response?.data?.message || "Something went wrong");
                }
                
            } catch (error) {
                if (error.response) {
                    toast.error(error.response?.data?.message);
                } else {
                    toast.error("Something went wrong");
                }
            }

        }
    })



  return (
    <div className='register_container'>
    <div className='container'>
        <div className='register global_flex'>
            <div className="register_left">
                <img className='registerImg' src="/image/login2.png" alt="login image" onDragStart={(e)=>e.preventDefault()} />
            </div>
            <div className="register_right">
                <h2>Welcome Back</h2>
                <p>Login Your Account</p>

                <form className='form' onSubmit={formik.handleSubmit}>
                    <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="email" name="email" id="" placeholder='Enter Your Email' />
                    {formik.touched.email && formik.errors.email && <p className='errors'>{formik.errors.email}</p>}
                    <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" name="password" id="" placeholder='Enter Your Password'/>
                    {formik.touched.password && formik.errors.password && <p className='errors'>{formik.errors.password}</p>}
                    <button type='submit' className='register_btn'>Login</button>
                </form>
                <p className='accountPara'>Don't have an account? <Link to={'/register'}>Create Here</Link></p>
            </div>
        </div>
    </div>
  
</div>
  )
}

export default Login
