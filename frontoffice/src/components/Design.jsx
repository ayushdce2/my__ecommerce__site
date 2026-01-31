import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";

import Banner from './SubComponent/Banner';
import Footer from "./SubComponent/Footer";
import OurCategoryBanner from './SubComponent/OurCategoryBanner';
import AllProducts from './SubComponent/AllProducts';
import NewArrivals from './SubComponent/NewArrivals';
import Navbar from './SubComponent/Navbar';
import CategorySidebar from "./SubComponent/CategorySidebar";
import HomepageCategoryProducts from "./SubComponent/HomepageCategoryProducts";


const App = () => {
  return (
    
    <>
    



    <div className=" min-h-screen ">

      {/* NAVBAR */}
      <Navbar/>

      {/* HERO BANNER */}
      <section className="">
        
        <Banner/>
       
      </section>

      {/* FEATURE SLIDER */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-1 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Fast Delivery", "Premium Quality", "Secure Payment"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-[#0B1F33] rounded-xl shadow hover:shadow-lg p-6 text-center transition hover:-translate-y-1"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-300">{item}</h3>
                <p className="text-sm text-gray-100">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )
          )}
        </div>
      </section>

   <div className='mb-5'></div>
        <OurCategoryBanner/>

      {/* MAIN CONTENT */}
      <section className="">
        {/* <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6 '> */}
        <div className='max-w-7xl mx-auto px-6 py-16 flex justify-between items-start gap-6 '>
        {/* SIDEBAR */}
        {/* {col-span-12 md:col-span-3} */}
        <aside className="w-[22%] bg-[#0B1F33] text-gray-300 rounded-xl shadow p-6 space-y-4">
          
          <CategorySidebar/>
          

          {/* <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl p-4 mt-6">
            <h4 className="font-semibold mb-1">Summer Sale Banner</h4>
            <p className="text-sm opacity-90">
              Up to 40% off
            </p>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl p-4 mt-6">
            <h4 className="font-semibold mb-1">Summer Sale Banner</h4>
            <p className="text-sm opacity-90">
              Up to 40% off
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl p-4 mt-6">
            <h4 className="font-semibold mb-1">Summer Sale Banner</h4>
            <p className="text-sm opacity-90">
              Up to 40% off
            </p>
          </div> */}
        </aside>

        {/* PRODUCTS */}
        {/* {col-span-12 md:col-span-9} */}
        <div className="w-[75%] space-y-12 ">

<HomepageCategoryProducts />
              
            
        </div>
        </div>
      </section>

      <Footer/>
    </div>

    </>
  );
}

export default App;
