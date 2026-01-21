import React, { useState } from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import {useProductDetails} from "../utility/ProductDetailsContext" ;

const NewArrivals = () => {
     const {  Loading,latestProduct } = useProductDetails();
  

              if(Loading){
        return (<div className=' h-screen bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }

    //  console.log(productDetails.all_product,"<==========productDetails",latestProduct)



  return (
    <>
  {
  latestProduct?.length > 0 ?
  latestProduct.filter(item => item.platest === "Yes")
    .map(item => (
                    <div
                      
                      className="bg-white rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group"
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
                    </div>
    )) :(
        <p>No Data Found</p>
    )
}
                  {
                    //         productDetails?.all_product?.length > 0 && productDetails?.all_product?.map((data,index)=>{
                    //             return(
                    //                 <>       <div
                      
                    //   className="bg-white rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group"
                    // >
                    //   <div className="h-40 bg-slate-200 rounded-t-xl flex items-center justify-center">
                    //     <span className="text-slate-400 text-sm">
                    //       Product Image
                    //     </span>
                    //   </div>

                    //   <div className="p-4">
                    //     <h4 className="font-medium mb-1 group-hover:text-indigo-600 transition">
                    //       Modern Product
                    //     </h4>
                    //     <p className="text-sm text-slate-500 mb-3">
                    //       Category
                    //     </p>

                    //     <div className="flex items-center justify-between">
                    //       <span className="font-semibold text-indigo-600">
                    //         $99.00
                    //       </span>

                    //       <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
                    //         <button className="hover:text-red-500">
                    //           <FiHeart />
                    //         </button>
                    //         <button className="hover:text-indigo-600">
                    //           <FiShoppingCart />
                    //         </button>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </div>
                    // </>
                    //             )
                    //         })
                        }
    </>
  )
}

export default NewArrivals