
import { useState } from "react";
import { Routes,Route } from "react-router-dom"
import Design from "./Design"
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import CategoryPage from "./Pages/CategoryPage"
import SearchResults from "./Pages/SearchResults";
import AllCategories from "./Pages/AllCategories"
import Navbar from './SubComponent/Navbar';
import Footer from "./SubComponent/Footer";

const Homepage = () => {

     
  const [sidebar,setSidebar] = useState(false)
    const handleSidebar = ()=>{
    setSidebar(prev=>!prev)
  }
  let sidebar_props = {handleSidebar:handleSidebar,sidebar:sidebar,setSidebar:setSidebar}
  console.log(sidebar,"<=========design");
    
   



  return (
    <>
<div className='   dark:bg-gray-900 transition-colors duration-500'>
    
    <div className=" min-h-screen ">

      {/* NAVBAR */}
      <Navbar sidebar={sidebar_props}/>

    
    <Routes>
      
      <Route path="/*" element={<Design sidebar={sidebar_props}/>}></Route>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/mainCategory/:categoryname" element={<CategoryPage/>}/>
      <Route path="/search" element={<SearchResults/>} />
      <Route path="/all_categories" element={<AllCategories/>} />
      
      

    </Routes>

          <Footer/>
    </div>
</div>
    
    
    </>
  )
}

export default Homepage