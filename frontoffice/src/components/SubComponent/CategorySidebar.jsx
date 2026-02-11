import React from 'react'
import useOurCategoryBanner from "../hook/useOurCategoryBanner";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import { IoMenu,IoCloseSharp  } from "react-icons/io5";
import { Route,Routes,Link, useLocation } from "react-router-dom";
import HomepageCategoryProducts from "./HomepageCategoryProducts";



const CategorySidebar = (props) => {
   let {handleSidebar,sidebar,setSidebar} = props.sidebar;
    const{allCategories,loading}=useOurCategoryBanner();
     const { pathname } = useLocation();

     
   if(loading){
        return (<div className='  bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' loading="lazy"/> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }
    if(allCategories.length <= 0){
      return "No Category Found"
    }
      // console.log(allCategories[0]?._id,"allCategories");
  return (
    <><div className='bg-[#0B1F33] text-gray-300 rounded-xl shadow p-6'>
    <h3 className="font-semibold text-lg mb-3 headingfont relative">
      <span>All Categories</span>
<IoCloseSharp  className="text-3xl text-gray-800 rounded absolute top-0 right-[-2.7rem]  md:hidden bg-gray-300" onClick={handleSidebar}/>
    </h3>
    <div className='overflow-y-auto max-h-[88vh] md:max-h-[75vh] pr-2'>
    <Link to="/" 
                
                className={`${pathname=="/" ? "bg-[#f75002] text-gray-100" : ""} mb-2 flex items-center justify-between p-3 rounded-lg hover:bg-[#f75002] hover:text-[#0B1F33] cursor-pointer transition`} >
                All Products
                <FiChevronRight />
              </Link>
              
    {allCategories?.map(
            (data,index) => (
              <Link to={`/homepageCategory/${data.categoryname}`}
                key={data._id}
                className={`${pathname=='/homepageCategory/'+data.categoryname ? "bg-[#f75002] text-[#0B1F33]" : ""} flex items-center justify-between p-3 rounded-lg hover:bg-[#f75002] hover:text-[#0B1F33] cursor-pointer transition capitalize mb-2`}
              >
                {data.categoryname}
                <FiChevronRight />
              </Link>
            )
          )}




         </div>
         </div>
    </>
    
  )
}

export default CategorySidebar