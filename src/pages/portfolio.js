import React from 'react'
import Navbar from '../components/Navbar'
import MainNavbar from '../components/MainNavbar'
import InfoHeader from '../components/InfoHeader'
import PortfolioMainSection from '../components/PortfolioMainSection'
import Footer from '../components/Footer'


export default function Portfolio () {
  return (
    <>
     <Navbar></Navbar>
     <MainNavbar></MainNavbar>
     <InfoHeader></InfoHeader>
     <PortfolioMainSection></PortfolioMainSection>
     <Footer></Footer>
    </>
  )
}