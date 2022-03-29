import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'
import UserAuthcontext from './components/UserAuthcontext'
import { auth } from './Firebase'
const Routeclass = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(email,password)
   const handleSubmit=()=>{
    //    console.log('clicked')
       signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
          toast.success("Successfull login")
          console.log(userCredential)
          localStorage.setItem("Token",userCredential._tokenResponse.idToken)
           // ...
         })
         .catch((error) => {
             toast.error("Please Enter Value")
           console.log(error.message)
         });
   }
    
  return (
    <div>
        <ToastContainer />
       <Routes>
          <Route path='/' element={<Admin email={email}password={password} handleSubmit={()=>handleSubmit()}
          setEmail={setEmail} setPassword={setPassword} />}/> 
         
        </Routes>

    </div>
  )
}

export default Routeclass