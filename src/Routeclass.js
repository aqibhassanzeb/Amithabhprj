import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'
import { auth } from './Firebase'
import Home from './components/home/Home';
import ProtectedRoutes from './ProtectedRoutes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAuth } from './redux/features/UserSlice';

const Routeclass = () => {





  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Admin />} />
        {/* <Route element={<ProtectedRoutes />}> */}

        <Route path='/home' element={<Home />} />
        {/* </Route> */}

      </Routes>

    </div>
  )
}

export default Routeclass