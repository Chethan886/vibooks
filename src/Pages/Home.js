import Carousel from '../Components/Carousel';
import Cards from '../Components/Cards';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React from 'react'
import UploadPage from './UploadPage';
export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <br></br>
      <Carousel/>
      <div className='home1'>
    <Cards />
    <UploadPage/>
    </div>
    <Footer/>
    </div>
  )
}