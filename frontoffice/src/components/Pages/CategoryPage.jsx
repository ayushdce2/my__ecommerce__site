// import React from 'react'
// import Navbar from '../SubComponent/Navbar'
// import Footer from '../SubComponent/Footer'


// import { useParams } from "react-router-dom";
// import {
//   FiSearch,
//   FiShoppingCart,
//   FiHeart,
//   FiChevronRight,
// } from "react-icons/fi";
// import {useProductDetails} from "../../utility/ProductDetailsContext" ;
// import {Link} from "react-router-dom";

// const CategoryPage = () => {
//     const { CategoryName } = useParams();
// console.log(CategoryName,"<============id");
//  const {  Loading,productDetails } = useProductDetails();
  

//               if(Loading){
//         return (<div className=' h-full bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
//     }
//     console.log(productDetails.all_product,"<=productDetails")
//     return (
//     <>
//     <div className="flex flex-col h-screen">
//     <Navbar/>
//        <div className='grow'>
//                 <h3 className="text-xl font-bold mb-6">New Arrivals</h3>

//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//       {
//       productDetails?.all_product?.length > 0 ?
//       productDetails?.all_product?.filter(item => item.pcategory === CategoryName)
//         .map(item => (
//                         <Link to={`/product/${item._id}`}
                          
//                           className="bg-white rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group"
//                         >
//                           <div className="h-40 bg-slate-200 rounded-t-xl flex items-center justify-center">
//                             <span className="text-slate-400 text-sm">
//                               Product Image
//                             </span>
//                           </div>
    
//                           <div className="p-4">
//                             <h4 className="font-medium mb-1 group-hover:text-indigo-600 transition">
//                               {item.pname}
//                             </h4>
//                             <p className="text-sm text-slate-500 mb-3">
//                               {item.pcategory}
//                             </p>
    
//                             <div className="flex items-center justify-between">
//                               <span className="font-semibold text-indigo-600">
//                                 Rs. {item.pprice}
//                               </span>
    
//                               <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
//                                 <button className="hover:text-red-500">
//                                   <FiHeart />
//                                 </button>
//                                 <button className="hover:text-indigo-600">
//                                   <FiShoppingCart />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//         )) :(
//             <p>No Data Found</p>
//         )
//     }
//     </div>
//     </div>
//     <Footer/>
//     </div>
//     </>
//   )
// }

// export default CategoryPage


import React, { useState } from "react";
import Navbar from "../SubComponent/Navbar";
import Footer from "../SubComponent/Footer";

import { useParams, Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiHeart,
} from "react-icons/fi";

import { useProductDetails } from "../../utility/ProductDetailsContext";

const ITEMS_PER_PAGE = 10;

const CategoryPage = () => {
  const { categoryname } = useParams();
  const { Loading, productDetails } = useProductDetails();

  const [currentPage, setCurrentPage] = useState(1);

  if (Loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-indigo-200">
        <img src="/images/loading.gif" className="w-20" />
        <p className="font-bold text-3xl text-white mt-4">Loading</p>
      </div>
    );
  }

  const filteredProducts =
    productDetails?.all_product?.filter(
      (item) => item.pcategory === categoryname
    ) || [];

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Banner */}
      <div className="bg-blue-500 h-48 flex items-center justify-center text-white text-2xl font-semibold">
        {categoryname}
      </div>

      {/* Main Content */}
      {/* <div className="grow max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6"> */}
        {/* Sidebar */}
        {/* <aside className="bg-white rounded-xl shadow-sm p-4 h-fit">
          <h3 className="font-semibold mb-4">Categories</h3>

          <ul className="space-y-2 text-sm">
            {["All Products", "Shoes", "Electronics"].map((item) => (
              <li
                key={item}
                className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer ${
                  item === categoryname
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-blue-50"
                }`}
              >
                {item}
                <span>›</span>
              </li>
            ))}
          </ul>

        
          <div className="mt-6 space-y-3">
            <div className="bg-blue-500 text-white rounded-lg p-3 text-sm">
              <p className="font-semibold">Summer Sale</p>
              <p>Up to 40% off</p>
            </div>
            <div className="bg-indigo-500 text-white rounded-lg p-3 text-sm">
              <p className="font-semibold">Special Offer</p>
              <p>Limited Time</p>
            </div>
          </div>
        </aside> */}

        {/* Products */}
        {/* <section className="lg:col-span-3"> */}
         
<div className="grow p-6">
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-6 px-3 md:max-w-4/5 mx-auto">
                {paginatedProducts.map((item) => (
                  <Link
                    to={`/product/${item._id}`}
                    key={item._id}
                    className="bg-white rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group "
                  >
                    <div className="h-40 bg-slate-200 rounded-t-xl flex items-center justify-center">
                      <span className="text-slate-400 text-sm">
                        Product Image
                      </span>
                    </div>

                    <div className="p-4">
                      <h4 className="font-medium mb-1 group-hover:text-indigo-600 transition">
                        {item.pname}
                      </h4>
                      <p className="text-sm text-slate-500 mb-3">
                        {item.pcategory}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-indigo-600">
                          Rs. {item.pprice}
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
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10 space-x-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          currentPage === page
                            ? "bg-blue-500 text-white"
                            : "bg-white border hover:bg-blue-50"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">No Data Found</p>
          )}
          </div>
        {/* </section> */}
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default CategoryPage;
