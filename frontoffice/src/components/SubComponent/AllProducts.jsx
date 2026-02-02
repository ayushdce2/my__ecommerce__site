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
                            productDetails && productDetails?.all_product?.slice(0, 7).map((data,index)=>{
                                return(
                                    <>
                                    <Link to={`/product/${data._id}`}
                      
                      className="bg-[#0B1F33] rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group p-2"
                    >
                                     <div className="h-40  rounded-t-xl flex items-center justify-center">
                        <div className="h-full w-full">
                          <img src={data.pimage} className='object-cover h-full w-full rounded-xl' loading="lazy"/>
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-medium mb-1 text-gray-300 group-hover:text-gray-400 transition">
                          {data.pname}
                        </h4>
                        <p className="text-sm text-slate-500 mb-3">
                          {data.pcategory}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-[#fd5900]">
                            Rs. {data.pprice}
                          </span>

                          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
                            <button className="">
                              <FiHeart className='group-hover:text-[#fd5900]'/>
                            </button>
                            <button className="">
                              <FiShoppingCart className='group-hover:text-[#fd5900]'/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>       
                    {(index === 6) && (
                      <div className=" bg-[#0B1F33] rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 group p-2">
                      <Link to={"/mainCategory/all_product"} className='flex items-center justify-center h-full text-[#fd5900] hover:text-[#fd5900]/90 text-lg' >
                                     
                                     
                      View All
                    </Link>
                    </div>
                  )}              
                                    </>
                                )
                            })
                        }
                     
                    
    </>
  )
}

export default AllProducts