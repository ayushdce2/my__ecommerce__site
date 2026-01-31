import React from 'react'
import AllProducts from './AllProducts';
import NewArrivals from './NewArrivals';

const HomepageCategoryProductsLatestALL = () => {
  return (
    <>
    
    <div >
                <h3 className="text-xl font-bold mb-6 flex justify-between items-center text-[#0B1F33]">New Arrivals
                  <span>
                    <a href='#' className='text-sm bg-[#0B1F33] hover:bg-[#0B1F33]/90 text-gray-300 p-2 rounded-sm'>View All</a>
                  </span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

<NewArrivals/>

                    
                  
                </div>
              </div>
                            <div >
                <h3 className="text-xl font-bold mb-6 text-[#0B1F33]">All Products</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                    <AllProducts/>

                                        
                  
                </div>
              </div>
    </>
  )
}

export default HomepageCategoryProductsLatestALL