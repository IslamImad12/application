import React from 'react'
import Navbar from '../Nav/Navbar'
import Home from '../Home'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return <>
     <Navbar/>
     <Outlet/>
     <Footer/>
  </>
}
