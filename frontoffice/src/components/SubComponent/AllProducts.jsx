import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import {useProductDetails} from "../../utility/ProductDetailsContext" ;
import {Link} from "react-router-dom";

const AllProducts = () => {
    const {  Loading,productDetails } = useProductDetails();

         if(Loading){
        return (<div className=' h-full bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' loading="lazy" /> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }

    //  console.log(productDetails.all_product,"<==========productDetails")

// console.log(productDetails.all_product[4].pimage,"<=========productDetails")
  return (
    <>
    
                        {
                            productDetails && productDetails?.all_product?.map((data,index)=>{
                                return(
                                    <>
                                    <Link to={`/product/${data._id}`}
                      
                      className="bg-white rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group p-2"
                    >
                                     <div className="h-40  rounded-t-xl flex items-center justify-center">
                        <div className="h-full w-full">
                          <img src={data.pimage} className='object-cover h-full w-full rounded-xl' loading="lazy"/>
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-medium mb-1 group-hover:text-indigo-600 transition">
                          {data.pname}
                        </h4>
                        <p className="text-sm text-slate-500 mb-3">
                          {data.pcategory}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-indigo-600">
                            Rs. {data.pprice}
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
                                    </>
                                )
                            })
                        }
                     
                    
    </>
  )
}

export default AllProducts