import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";

import Banner from './Banner';
import Footer from "./Footer";
import OurCategoryBanner from './OurCategoryBanner';
import AllProducts from './AllProducts';
import NewArrivals from './NewArrivals';
import Navbar from './Navbar';

const App = () => {
  return (
    
    <>
    



    <div className=" min-h-screen text-slate-800">

      {/* NAVBAR */}
      <Navbar/>

      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        {/* <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Modern Essentials
          </h2>
          <p className="max-w-xl mx-auto text-indigo-100 mb-8">
            Premium quality products curated for your lifestyle.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </button>
        </div> */}
        <Banner/>
       
      </section>

      {/* FEATURE SLIDER */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-1 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Fast Delivery", "Premium Quality", "Secure Payment"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition hover:-translate-y-1"
              >
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-sm text-slate-500">
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
      <section className="bg-slate-100">
        <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6 '>

        {/* SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 bg-white rounded-xl shadow p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-2">Categories</h3>
          {["Electronics", "Fashion", "Home", "Accessories"].map(
            (cat, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 cursor-pointer transition"
              >
                {cat}
                <FiChevronRight />
              </div>
            )
          )}

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
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl p-4 mt-6">
            <h4 className="font-semibold mb-1">Summer Sale Banner</h4>
            <p className="text-sm opacity-90">
              Up to 40% off
            </p>
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="col-span-12 md:col-span-9 space-y-12 ">


              <div >
                <h3 className="text-xl font-bold mb-6">New Arrivals</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

<NewArrivals/>

                    
                  
                </div>
              </div>
                            <div >
                <h3 className="text-xl font-bold mb-6">All Products</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                    <AllProducts/>

                                        
                  
                </div>
              </div>
            
        </div>
        </div>
      </section>

      <Footer/>
    </div>

    </>
  );
}

export default App;
