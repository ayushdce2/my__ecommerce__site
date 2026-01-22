import React from 'react'
import ThemeDarkLight from "../../redux/ThemeDarkLight";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            My Shop
          </Link>

          <div className="hidden md:flex gap-8 font-medium">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            {/* <Link to="/category" className="hover:text-indigo-600 transition">Category</a> */}
            <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="relative">
              <FiSearch className="absolute top-3 left-3 text-slate-400" />
              <input
                className="pl-10 pr-4 py-2 rounded-full border focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Search products..."
              />
            </div> */}
            <Link to={"/cart"} className="relative">
              <FiShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {JSON.parse(localStorage.getItem("my_cart")) != null ? JSON.parse(localStorage.getItem("my_cart")).length : 0}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar