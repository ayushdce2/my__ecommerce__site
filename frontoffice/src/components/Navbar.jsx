import React from 'react'
import ThemeDarkLight from "../redux/ThemeDarkLight";

const Navbar = () => {
  return (
    <>
    <nav className="  p-4 flex justify-between items-center">
        <div className="flex space-x-4 text-gray-800 dark:text-gray-100 ">
          <a href="#home" className=" hover:text-gray-600 ">Home</a>
          <a href="#about" className="hover:text-gray-600">About Us</a>
          <a href="#products" className="hover:text-gray-600">Products</a>
        </div>
        <div className='flex gap-3 items-center '>
          <input type='text' placeholder='Product Search . . .' className='border p-2 rounded dark:border-gray-200 dark:text-white'/>
          <ThemeDarkLight/>
          <button className='bg-gray-500 p-3 rounded text-white'>Contact Us</button>
        </div>
            
        
      </nav>
    </>
  )
}

export default Navbar