import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home/Home';
import Layout from './components/layout/Layout';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import toast, { Toaster } from 'react-hot-toast';
import SingleListing from './components/listing/SingleListing';
import AdminProtectedRoute from './components/Admin/adminProtectedRoute/AdminProtectedRoute';
import AdminDashboard from './components/Admin/adminDashboard/AdminDashboard';
import CreateRoom from './components/Admin/createRoom/CreateRoom';
import HomeChart from './components/Admin/homeChart/HomeChart';
import ManageProperty from './components/Admin/createRoom/manageProperty/ManageProperty';
import CreateCategory from './components/Admin/createCategory/CreateCategory';
import CreateCategoryPurpose from './components/Admin/createCategoryPurpose/CreateCategoryPurpose';
import RegisterProperty from './components/pages/registerProperty/RegisterProperty';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/single/:id' element={<SingleListing/>}/>
        <Route path='/register-property' element={<RegisterProperty/>}/>
        </Route>

        {/* admin protected route */}
        <Route path='/dashboard' element={<AdminProtectedRoute/>}>
          <Route path='admin' element={<AdminDashboard/>}/>
          <Route path = '/dashboard/admin/createRoom' element={<CreateRoom/>} />
          <Route path='/dashboard/admin/manageProperty' element={<ManageProperty/>}/>
          <Route path='/dashboard/admin/createCategory' element={<CreateCategory/>}/>
          <Route path='/dashboard/admin/createCategoryPurpose' element={<CreateCategoryPurpose/>}/>
          <Route/>
        </Route>



      </Routes>
    </Router>
        <Toaster/>
   
      
    </>
  )
}

export default App
