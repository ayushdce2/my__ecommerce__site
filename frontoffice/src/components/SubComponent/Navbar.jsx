import { useState } from "react";
import ThemeDarkLight from "../../redux/ThemeDarkLight";
import {
  FiSearch,
  FiShoppingCart
} from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import CategorySidebar from "./CategorySidebar"

import { Link,useNavigate  } from "react-router-dom";

const Navbar = (props) => {
  let {handleSidebar,sidebar,setSidebar} = props.sidebar;
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

    const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
console.log(query,"<=========query")
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
    <nav className=" shadow-sm sticky top-0 z-50 bg-[#0B1F33]">
        <div className="md:max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-5 ">
          <Link to="/" className="text-2xl font-bold text-indigo-600 headingfont">
            {/* My Shop */}
            <div className='w-24'>
              <img src='/assets/logo.png' className='w-full h-full object-contain' />
            </div>
          </Link>

          <div className="flex gap-8 font-medium ">
            <Link to="/" className="hover:text-[#f75002] transition headingfont text-gray-300 font-bold">Home</Link>
            {/* <Link to="/category" className="hover:text-indigo-600 transition">Category</a> */}
            <Link to="/about" className="hover:text-[#f75002] transition headingfont text-gray-300 font-bold">About</Link>
            <Link to="/contact" className="hover:text-[#f75002] transition headingfont text-gray-300 font-bold">Contact</Link>
          </div>

          <div className="flex items-center gap-4 mx-auto md:m-0">
            <div className={`${sidebar== true ? "block" : "hidden"} absolute h-screen bottom-0 top-0 left-0 z-50  md:w-[22%] bg-[#0B1F33] text-gray-300 rounded-xl shadow p-6 space-y-4`}>
              <CategorySidebar sidebar={props.sidebar}/>
            </div>
            <IoMenu className="text-4xl text-gray-200 md:hidden " onClick={handleSidebar}/>
            <form className="relative" onSubmit={handleSearch}>
              
              <input
                className="pr-10 pl-4 py-2 rounded-full border-2 border-gray-300 focus:ring-1 text-gray-300 focus:ring-indigo-500 outline-none"
                placeholder="Search products..."
                value={query}
        onChange={(e) => setQuery(e.target.value)}
              />
              <FiSearch className="absolute top-3 right-3 text-slate-400 cursor-pointer" onClick={handleSearch} />
            </form>
            <Link to={"/cart"} className="relative">
              <FiShoppingCart size={22} color='#fff' />
              <span className="absolute -top-2 -right-2 bg-[#f64905] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
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