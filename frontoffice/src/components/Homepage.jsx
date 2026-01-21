import React,{useState,useEffect} from 'react';

import Design from "./Design"
import Navbar from './Navbar';
import Banner from './Banner';
import ProductSlide from "./ProductSlide";
import NewProducts from  "./NewProducts"
import Footer from './Footer';


const Homepage = () => {

     

    
   



  return (
    <>
<div className='   dark:bg-gray-900 transition-colors duration-500'>
    {/* <Navbar/>
    <Banner/>
    <div className='h-5'></div>
    <ProductSlide/>
    <NewProducts/>
    <Footer/> */}

    <Design/>
    
</div>
    
    
    </>
  )
}

export default Homepage