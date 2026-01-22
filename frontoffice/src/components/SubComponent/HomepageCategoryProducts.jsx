import React from 'react'


import { Route,Routes,  } from "react-router-dom";
import HomepageCategoryProductsLatestALL from "./HomepageCategoryProductsLatestALL";
import HomepageCatProDynamic from "./HomepageCatProDynamic";
// import ProductDetails from "../Pages/ProductDetails"


const HomepageCategoryProducts = () => {

       
  return (
    <>
    
    
     <Routes>
          
            <Route 
      path={"/"} 
      element={<HomepageCategoryProductsLatestALL />}
    ></Route>
 
      {/* {
      allCategories?.map((data,index)=>{ */}
       <Route

      path={`/homepageCategory/:categoryname`} 
      element={<HomepageCatProDynamic />}
    ></Route>
      {/* })
      } */}
      
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      {/* <Route path="/cart" element={<CartPage />} /> */}
      {/* <Route path="/category/" element={<CategoryPage/>}/> */}

    </Routes>
    </>
  )
}

export default HomepageCategoryProducts