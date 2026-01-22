

import { Routes,Route } from "react-router-dom"
import Design from "./Design"
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import CategoryPage from "./Pages/CategoryPage"


const Homepage = () => {

     

    
   



  return (
    <>
<div className='   dark:bg-gray-900 transition-colors duration-500'>
    

    
    <Routes>
      
      <Route path="/*" element={<Design/>}></Route>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/mainCategory/:categoryname" element={<CategoryPage/>}/>
      
      

    </Routes>
    
</div>
    
    
    </>
  )
}

export default Homepage