import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ruba from "../assets/login.jpg"
import Login from "../assets/loginbg.jpg"
import { auth } from '../Firebase';
import { userAuth } from '../redux/features/UserSlice';
const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(email,password)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleSubmit = () => {
        //    console.log('clicked')
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Successfull login")
                console.log(userCredential)
                dispatch(userAuth(userCredential._tokenResponse.idToken))
                localStorage.setItem("Token", userCredential._tokenResponse.idToken)

                navigate('/home')

            })
            .catch((error) => {
                toast.error("Please Enter Value")
                console.log(error.message)
            });
    }
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
                                                onChange={(e) => setEmail(e.target.value)} value={email} />
                                            <input type="password" className="form-control mt-3" placeholder="Enter Your Password"
                                                onChange={(e) => setPassword(e.target.value)} value={password} />
                                            <button onClick={handleSubmit} className='btn btn-success mt-3 custom_padd_btn'>Login</button>
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