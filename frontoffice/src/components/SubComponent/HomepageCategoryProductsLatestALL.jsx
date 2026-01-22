import React from 'react'
import AllProducts from './AllProducts';
import NewArrivals from './NewArrivals';

const HomepageCategoryProductsLatestALL = () => {
  return (
    <>
    
    <div >
                <h3 className="text-xl font-bold mb-6">New Arrivals</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

<NewArrivals/>

                    
                  
                </div>
              </div>
                            <div >
                <h3 className="text-xl font-bold mb-6">All Products</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                    <AllProducts/>

                                        
                  
                </div>
              </div>
    </>
  )
}

export default HomepageCategoryProductsLatestALL