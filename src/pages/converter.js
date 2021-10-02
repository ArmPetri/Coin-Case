import React from 'react'
import Navbar from '../components/Navbar'
import MainNavbar from '../components/MainNavbar'
import InfoHeader from '../components/InfoHeader'
import ConverterWidget from '../components/ConverterWidget'
import Footer from '../components/Footer'

export default function Converter () {
  return (
    <>
     <Navbar></Navbar>
     <MainNavbar></MainNavbar>
     <InfoHeader></InfoHeader>
     <ConverterWidget></ConverterWidget>
     <Footer></Footer>
    </>
  )
}
