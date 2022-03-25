import React from 'react'
import Ruba from "../assets/login.jpg"
import Login from "../assets/loginbg.jpg"
const Admin = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${Login})` }}>
                <div className='container-fluid pt-4 mt-4'>
                    <div className='container mt-4 pt-4'>
                        <div className='row mt-4'>
                            <div className='col align-self-center text-center justify-content-md-center'>
                                <div>
                                    <img src={Ruba} />
                                    <div className='custom-padding'>
                                        <div className="form-group">
                                            <input type="email" className="form-control mt-3" placeholder="Enter Your email" />
                                            <input type="password" className="form-control mt-3" placeholder="Enter Your Password" />
                                            <button className='btn btn-success mt-3 custom_padd_btn'>Login</button>
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