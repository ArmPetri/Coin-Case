import React from 'react'
import Navbar from '../components/Navbar'
import MainNavbar from '../components/MainNavbar'
import InfoHeader from '../components/InfoHeader'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <>
     <Navbar></Navbar>
     <MainNavbar></MainNavbar>
     <InfoHeader></InfoHeader>
     <MainSection></MainSection>
     <Footer></Footer>
    </>
  )
}