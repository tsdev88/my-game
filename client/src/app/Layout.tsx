import React from 'react'
import Navbar from '../widgets/Navbar/Navbar'
import { Outlet } from 'react-router'

export default function Layout():React.JSX.Element {
  return (
    
    <>
    <Navbar />
    <Outlet />
    </>

  )
}
