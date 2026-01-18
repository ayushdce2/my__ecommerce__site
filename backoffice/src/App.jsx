import { useState } from "react";
import {ToastContainer} from "react-toastify";
import Login from './auth/Login.jsx';
import Signup from './auth/Signup.jsx';
import {BrowserRouter, Routes, Route, Navigate, Router} from "react-router-dom";
import RefreshHandler from './utility/RefreshHandler.jsx';
import {UserRolePermission} from "./utility/UserRolePermission.js";
import NotFound from "./utility/NotFound"
// import HrHome from "./hr/HrHome.jsx";
import AdminHome from "./admin/pages/AdminHome.jsx";
import {UserDetailsProvider} from "./utility/UserDetailsContext.jsx";
import {AppThemeProvider} from "./utility/ThemeContext.jsx";
import EmployeeHome from './employee/pages/EmpHome.jsx';
import Unauthorized from "./utility/Unauthorized.jsx"
// import Demo from "./Demo.jsx"
function App() {

    const [isAuthenticated,setisAuthenticated]=useState(false);
    const PrivateRoute=({element})=>{
      return isAuthenticated ? element : <Navigate to="/" />
    }
 
  return (
    <>

      
      <BrowserRouter>
      <RefreshHandler setisAuthenticated={setisAuthenticated}/>
        <Routes>

          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/unauthorized" element={<Unauthorized/>}></Route>
          
          {/* <Route path='/demo' element={<Demo/>}></Route> */}

          
          <Route path={"/employee/*"} element={<PrivateRoute element={<UserDetailsProvider><UserRolePermission roles={["employee"]}><AppThemeProvider><EmployeeHome/></AppThemeProvider></UserRolePermission></UserDetailsProvider>}/>}></Route>
          <Route path={"/admin/*"} element={<PrivateRoute element={<UserDetailsProvider><UserRolePermission roles={["admin"]}><AppThemeProvider><AdminHome/></AppThemeProvider></UserRolePermission></UserDetailsProvider>}/>}></Route>
    
  
        </Routes>
      </BrowserRouter>

      <ToastContainer/>
    </>
  )
}

export default App
