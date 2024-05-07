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
        </Route>
      </Routes>
    </Router>
        <Toaster/>
   
      
    </>
  )
}

export default App
