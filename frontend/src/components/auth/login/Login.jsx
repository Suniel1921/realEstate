import React from 'react'
import '../login/login.css'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import {useFormik} from 'formik';

const Login = () => {

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
                
            } catch (error) {
                
            }

        }
    })



  return (
    <div className='register_container'>
    <div className='container'>
        <div className='register global_flex'>
            <div className="register_left">
                <img className='registerImg' src="/image/login2.png" alt="login image" />
            </div>
            <div className="register_right">
                <h2>Welcome Back</h2>
                <p>Login Your Account</p>

                <form className='form'>
                    <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="email" name="email" id="" placeholder='Enter Your Email' />
                    {formik.touched.email && formik.errors.email && <p className='errors'>{formik.errors.email}</p>}
                    <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" name="password" id="" placeholder='Enter Your Password'/>
                    {formik.touched.password && formik.errors.password && <p className='errors'>{formik.errors.password}</p>}
                    <button className='register_btn'>Login</button>
                </form>
                <p className='accountPara'>Don't have an account? <Link to={'/register'}>Register Here</Link></p>
            </div>
        </div>
    </div>
  
</div>
  )
}

export default Login
