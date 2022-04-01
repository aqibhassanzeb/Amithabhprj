import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Admin from './components/Admin';
import { auth } from './Firebase'
import { userAuth } from './redux/features/UserSlice';
const user = localStorage.getItem('Token')
// console.log(user)
const ProtectedRoutes = () => {


    return (
        user ? <Outlet /> : <Admin />
    )
}

export default ProtectedRoutes