import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";

import Banner from './Banner';
import ProductSlide from "./ProductSlide";
import ProductSlide1 from './ProductSlide1';

const App = () => {
  return (
    
    <>
    



    <div className=" min-h-screen text-slate-800">

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">
            Techbit
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <a className="hover:text-indigo-600 transition">Home</a>
            <a className="hover:text-indigo-600 transition">About</a>
            <a className="hover:text-indigo-600 transition">Categories</a>
            <a className="hover:text-indigo-600 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <FiSearch className="absolute top-3 left-3 text-slate-400" />
              <input
                className="pl-10 pr-4 py-2 rounded-full border focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Search products..."
              />
            </div>
            <button className="relative">
              <FiShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </div>
        </div>
      </nav>

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
        <ProductSlide1/>

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

          {["New Arrivals", "Best Sellers", "All Products"].map(
            (section, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-6">{section}</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group"
                    >
                      <div className="h-40 bg-slate-200 rounded-t-xl flex items-center justify-center">
                        <span className="text-slate-400 text-sm">
                          Product Image
                        </span>
                      </div>

                      <div className="p-4">
                        <h4 className="font-medium mb-1 group-hover:text-indigo-600 transition">
                          Modern Product
                        </h4>
                        <p className="text-sm text-slate-500 mb-3">
                          Category
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-indigo-600">
                            $99.00
                          </span>

                          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
                            <button className="hover:text-red-500">
                              <FiHeart />
                            </button>
                            <button className="hover:text-indigo-600">
                              <FiShoppingCart />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm">
          © 2025 Techbeat. All rights reserved.
        </div>
      </footer>
    </div>

    </>
  );
}

export default App;
