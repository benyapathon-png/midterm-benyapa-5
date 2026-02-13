import React from 'react'
import { NavLink } from 'react-router'


function NavBar() {
  return (
    <div className='bg-pink-300 h-12 px-8 flex justify-center items-center shadow-md'>
        <div className='flex gap-7 font-semibold'>
        <NavLink to = "/" className = "hover:text-pink-600">Login</NavLink>
        <NavLink to = "register" className = "hover:text-pink-600">Register</NavLink>
        <NavLink to = "todolist" className = "hover:text-pink-600">Todolist</NavLink>
        </div>
      
    </div>
  )
}

export default NavBar