import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     let authToken = localStorage.getItem('Token')

    //     if (authToken) {
    //         navigate('/home')
    //     } else if (!authToken) {
    //         navigate('/')
    //     }

    // }, [])

    const User = useSelector(state => state.Authuser)
    console.log(User)

    return (
        < div >

            Well come to Home
        </div >
    )
}

export default Home