import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const GuestLayout = () => {
    const {token} = useStateContext()
    if (token) {
        <Navigate to = '/' />
        
    }
  return (
    
        <Outlet/>
    
  
  )
}

export default GuestLayout