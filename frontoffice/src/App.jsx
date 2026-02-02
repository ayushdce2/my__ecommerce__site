import { useState } from "react";
import {ToastContainer} from "react-toastify";
// import Login from './auth/Login.jsx';
// import Signup from './auth/Signup.jsx';
import {BrowserRouter, Routes, Route, Navigate, Router} from "react-router-dom";
// import RefreshHandler from './utility/RefreshHandler.jsx';
// import {UserRolePermission} from "./utility/UserRolePermission.js";
import NotFound from "./utility/NotFound"
// import HrHome from "./hr/HrHome.jsx";
// import AdminHome from "./admin/pages/AdminHome.jsx";
import {ProductDetailsProvider} from "./utility/ProductDetailsContext.jsx";
import {AppThemeProvider} from "./utility/ThemeContext.jsx";
// import EmployeeHome from './employee/pages/EmpHome.jsx';
// import Unauthorized from "./utility/Unauthorized.jsx"
// import Demo from "../src/employee/pages/demo.jsx"
import Homepage from "./components/Homepage.jsx";
import ProductDetails from "./components/Pages/ProductDetails.jsx";
import CartPage from "./components/Pages/CartPage.jsx";
import CategoryPage from "./components/Pages/CategoryPage.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx"
import HomepageCatProDynamic from "./components/SubComponent/HomepageCatProDynamic.jsx"
import Demo from "./components/Demo.jsx";
function App() {

    // const [isAuthenticated,setisAuthenticated]=useState(false);
    // const PrivateRoute=({element})=>{
    //   return isAuthenticated ? element : <Navigate to="/" />
    // }
 
  return (
    <>

      
      <BrowserRouter>
      {/* <RefreshHandler setisAuthenticated={setisAuthenticated}/> */}
        <Routes>

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/*" element={<ProductDetailsProvider><Homepage/></ProductDetailsProvider>}></Route>
          <Route path="/demo" element={<Demo/>}></Route>
          {/* <Route path="/unauthorized" element={<Unauthorized/>}></Route> */}
          

{/* <Route path="/homepage/category/*" element={<HomepageCatProDynamic/>}/> */}


          
          {/* <Route path={"/employee/*"} element={<PrivateRoute element={<UserDetailsProvider><UserRolePermission roles={["employee"]}><AppThemeProvider><EmployeeHome/></AppThemeProvider></UserRolePermission></UserDetailsProvider>}/>}></Route> */}
          {/* <Route path={"/admin/*"} element={<PrivateRoute element={<UserDetailsProvider><UserRolePermission roles={["admin"]}><AppThemeProvider><AdminHome/></AppThemeProvider></UserRolePermission></UserDetailsProvider>}/>}></Route> */}
    
  
        </Routes>
      </BrowserRouter>

      <ToastContainer/>
    </>
  )
}

export default App
