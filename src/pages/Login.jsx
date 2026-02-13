import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'


function Login() {
    const [formLogin,setFormLogin] = useState({
        username:"",
        password:""
    })

    const hdlChange = (evt) => {
        const {name, value} = evt.target
        setFormLogin((prev) => ({...prev,[name]:value}))
    }

    const navigate = useNavigate()

    const hdlSubmit = async (evt) => {
        evt.preventDefault()
        console.log('login ja')
        const res = await axios.post("https://drive-accessible-pictures-send.trycloudflare.com/auth/login",formLogin)
        console.log(res.data)
        navigate('/success')
    }

    const loginStyle = "border p-1 px-2 border-gray rounded-md flex justify-center items-center p-3"
  return (
    <div className='bg-pink-100 min-h-screen flex justify-center items-center '>
        <form onSubmit={hdlSubmit} className='bg-pink-200 p-6 rounded-b-md w-full max-w-md flex flex-col'>
            <p className='text-center'>Login</p>
            <label>Username:</label>
            <input 
            type="text"
            className={loginStyle}
            name='username'
            placeholder='username'
            onChange={hdlChange}
            value={formLogin.username}
            >
            </input>
            <label>Password:</label>
            <input
            type="password"
            className={loginStyle}
            name='password'
            placeholder='paaword'
            onChange={hdlChange}
            value={formLogin.password}
            ></input>
            <button className='bg-pink-400 rounded-2xl mt-4 hover:bg-amber-200'>Login</button>
        </form>
    </div>
  )
}

export default Login