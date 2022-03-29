import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ruba from "../assets/login.jpg"
import Login from "../assets/loginbg.jpg"
import { useUserAuth } from './UserAuthcontext';
const Admin = ({email,password,handleSubmit,setEmail,setPassword}) => {
    
   
    return (
        <>
            <div >
                <div className='container-fluid pt-4 mt-4'>
                    <div className='container mt-4 pt-4' >
                    <ToastContainer />
                        <div className='row mt-4'>
                            <div className='col align-self-center text-center justify-content-md-center'>
                                <div>
                                    <img src={Ruba} />
                                    <div className='custom-padding'>
                                        <div className="form-group">
                                            <input type="email" className="form-control mt-3" placeholder="Enter Your email"
                                            onChange={(e) => setEmail( e.target.value)} />
                                            <input type="password" className="form-control mt-3" placeholder="Enter Your Password"
                                            onChange={(e) => setPassword( e.target.value)}/>
                                            <button  onClick={handleSubmit} className='btn btn-success mt-3 custom_padd_btn'>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Admin;