import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ToDoList from '../pages/ToDoList'
import Success from '../pages/Success'

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children: [
            {
                index:true,
                element:<Login />
            },
            {
                path:'register',
                element:<Register />
            },
            {
                path:'todolist',
                element:<ToDoList />
            },
            {
                path:'success',
                element:<Success />
            },
        ]
    }
])

export default router