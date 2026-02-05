import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
    {/* FOOTER */}
    
    <footer className="bg-slate-950 text-slate-400">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Company Info */}
        <div>
          
           <div className='w-20 mb-1'>
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
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
           
            <li>
              <Link to="/privacypolicy" className="hover:text-orange-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/orderguide" className="hover:text-orange-500 transition">
                Order Guide
              </Link>
            </li>
          
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