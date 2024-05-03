import React from 'react'
import '../register/register.css'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import {useFormik} from 'formik';

const Register = () => {

    //validation schema using yup
    const validationSchema = Yup.object({
        name : Yup.string().required('Name is required'),
        email : Yup.string().required("Email is required"),
        password : Yup.string().required("Password is required").min(6, "Password must be at least 6 character")
    })

    //formik hok for form management
    const formik = useFormik({
        initialValues: {
            name : '',
            email: '',
            password : '',
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
                    <img className='registerImg' src="/image/login.png" alt="login image" />
                </div>
                <div className="register_right">
                    <h2>Welcome to Real Estate</h2>
                    <p>Register Your Account</p>

                    <form className='form'>
                        <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="text" name="name" id="" placeholder='Enter Your Name' />
                        {formik.touched.name && formik.errors.name && <p className='errors'>{formik.errors.name}</p>}
                        <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="email" name="email" id="" placeholder='Enter Your Email' />
                        {formik.touched.email && formik.errors.email && <p className='errors'>{formik.errors.email}</p>}
                        <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" name="password" id="" placeholder='Enter Your Password'/>
                        {formik.touched.password && formik.errors.password && <p className='errors'>{formik.errors.password}</p>}
                        <button className='register_btn'>Register</button>
                    </form>
                    <p className='accountPara'>Already have an account? <Link to={'/login'}>Login Here</Link></p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Register
