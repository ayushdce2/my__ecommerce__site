import React from 'react';
import {Link} from "react-router-dom";
import { FaUserTie, FaEnvelope, FaLock } from "react-icons/fa";
import useLogin from './hook/useLogin.jsx';
import PingServer from "../utility/PingServer.js";

const Login = () => {

  const {latency,loadingserver} = PingServer();
  const {loginFormData,loginSubmit} = useLogin();
    // console.log(loadingserver,"loadingserver");
if(loadingserver){
  return "Wait Server is loading. . . . ."
}
// console.log(latency,"latency");
  return (
    <>
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-200">
      
      <div className="w-[90%] md:w-full max-w-md bg-[#fff] rounded-2xl shadow-2xl p-8">
        
        {/* Icon + Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-400 text-white p-4 rounded-full mb-3">
            <FaUserTie size={28} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 headingfont">HRMS Login</h1>
          <p className="text-sm text-gray-500">
            Welcome! Login Here
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5 mb-5" onSubmit={loginSubmit}>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-400 rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-300">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 focus:outline-none text-gray-500 "
                name='email'
                onChange={loginFormData}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 ">
              Password
            </label>
            <div className="flex items-center border border-gray-400 rounded-lg text-gray-500 px-3 focus-within:ring-2 focus-within:ring-blue-300">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 focus:outline-none"
                name='password'
                onChange={loginFormData}
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          {/* <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-gradient-to-b from-blue-400 to-blue-300 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
        <p className='text-center text-gray-500'>Don't have account <Link to="/signup" className='text-blue-400'>Create Account</Link></p>

        {/* Footer */}
     
      </div>
    </div>



      

     

   
    </>
  )
}

export default Login