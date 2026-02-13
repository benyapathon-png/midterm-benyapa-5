import React from 'react'


function Register() {

   const registerStyle = "border p-1 px-2 border-gray rounded-md flex justify-center items-center p-3"
  return (
    <div className='bg-pink-100 min-h-screen flex justify-center items-center'>
    <form>
    <p className='text-center'>Register</p>
    <label>Username</label>
    <input
    type="text"
    className={registerStyle}
    name='username'
    placeholder='username'
    />
    <label>Password</label>
    <input 
    type="text"
    className={registerStyle}
    name='password'
    placeholder='password'/>

    <label>Cofirm Password</label>
    <input 
    type="text"
    className={registerStyle}
    name='confirmPassword' 
    placeholder='confirm password'/>

    </form>
    Register
    </div>
  )
}

export default Register