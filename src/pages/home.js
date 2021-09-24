import React from 'react'
import Navbar from '../components/Navbar'
import MainNavbar from '../components/MainNavbar'
import InfoHeader from '../components/InfoHeader'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <>
     <Navbar></Navbar>
     <MainNavbar></MainNavbar>
     <InfoHeader></InfoHeader>
     <Footer></Footer>
    </>
  )
}