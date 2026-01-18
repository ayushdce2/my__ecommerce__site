import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import {useUserDetails} from "../../utility/UserDetailsContext" ;
import Profile from "./Profile";




const AdminHome = () => {
    const[openSidebar,setOpenSidebar]=useState(false);
      const {  Loading } = useUserDetails();
     if(Loading){
        return (<div className=' h-screen bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }
  return (
    <>
   
   
          <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors">
    
            {/* Sidebar */}
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
    
            {/* Main Content */}
            <main className={`  flex-1 `}>
    
              {/* Navbar */}
             <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
    
              {/* Content */}
              <div className={`${openSidebar==true ? "opacity-30 pointer-events-none":"pointer-events-auto"} p-6 space-y-6  h-[calc(100vh-4.5rem)] overflow-auto `}>
    <Routes>
                            <Route path={"/"} element={<Dashboard />}></Route>
                            <Route path={"/profile"} element={<Profile />}></Route>
                            {/* <Route path={"/settings"} element={<Settings />}></Route> */}
                            {/* <Route path={"/attandance"} element={<Attandance/>}></Route> */}
                            {/* <Route path={"/leave"} element={<Leave/>}></Route> */}

                            


                            
                            
                        </Routes>
                
    
              </div>
            </main>
          </div>

   
    </>
  );
};



export default AdminHome;
