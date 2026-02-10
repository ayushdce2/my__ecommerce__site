import React from 'react'
import { Link, useLocation  } from "react-router-dom";
import useOurCategoryBanner from "../hook/useOurCategoryBanner";

const Footer = () => {
  const { pathname } = useLocation();
  const{allCategories,loading}=useOurCategoryBanner();
   if(loading){
        return (<div className='  bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[1rem]' loading="lazy"/> <p className='font-bold text-lg text-black text-shadow-2xs'>Loading</p></div>)
    }
    // if(allCategories.length <= 0){
    //   return "No Category Found"
    // }
  return (
    <>
    
    {/* FOOTER */}
    
    <footer className="bg-slate-950 text-slate-400">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Company Info */}
        <div>
          
           <div className='w-20 mb-1 bg-white p-[0.3rem] rounded'>
              <img src='/assets/logo.png' className='w-full h-full object-contain' />
            </div>
          <p className="text-sm leading-relaxed mb-4">
            Wholesalio is a modern e-commerce platform offering premium products,
            fast delivery, and secure payments — all in one seamless experience.
          </p>
       
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
            </li>
            
            <li>
              <Link to="/faq" className="hover:text-orange-500 transition">
                FAQs
              </Link>
            </li>
               <li>
              <Link to="/orderguide" className="hover:text-orange-500 transition">
                Order Guide
              </Link>
            </li>
             <li>
              <Link to="/privacypolicy" className="hover:text-orange-500 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Categories
          </h4>
          <ul className="space-y-2 text-sm">
           
            
         {allCategories?.slice(0,5)?.map(
                     (data,index) => (
                         <li>
                       <Link to={`/mainCategory/${data.categoryname}`}
                         key={data._id}
                         className={`${pathname=='/mainCategory/'+data.categoryname ? "text-[#f75002] text-[#0B1F33]" : ""} flex items-center justify-between  rounded-lg hover:text-[#f75002] hover:text-[#0B1F33] cursor-pointer transition capitalize mb-2`}
                       >
                         {data.categoryname}
                       </Link>
                       </li>
                     )
                   )}
          
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              📍 India
            </li>
            <li>
              📧 email@wholesalio.com
            </li>
            <li>
              📞 +91 98765 43210
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © 2026 WholeSalio. All rights reserved.
          </p>
          <p className="text-slate-500 mt-2 md:mt-0">
            Designed with ❤️ by Advik Techbeat
          </p>
        </div>
      </div>

    </footer>
    </>
  )
}

export default Footer