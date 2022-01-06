import React from 'react'
import Navbar from '../components/Navbar'
import MainNavbar from '../components/MainNavbar'
import InfoHeader from '../components/InfoHeader'
import Coins from '../components/Coins'
import Footer from '../components/Footer'

export default function Converter () {
  return (
    <>
      <Navbar></Navbar>
      <MainNavbar></MainNavbar>
      <InfoHeader></InfoHeader>
        <Coins></Coins>
      <Footer></Footer>
    </>
  )
}