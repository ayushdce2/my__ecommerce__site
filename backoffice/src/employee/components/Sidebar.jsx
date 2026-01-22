import {
  FaUsers,
  FaUserTie,
  FaMoneyCheckAlt,
  FaSignOutAlt,
  FaTachometerAlt,
  FaClipboardList,
  FaCog,
  FaBars,
  FaTimes,
  FaUser
} from "react-icons/fa";
import useLogout from '../../auth/hook/useLogout';
import { Link, useLocation } from "react-router-dom";



const Sidebar = (props) => {
  const { openSidebar, setOpenSidebar } = props;
  const { handleLogout } = useLogout();
   const { pathname } = useLocation();
  return (
    <>
      <aside className={`${openSidebar == true ? "w-64 absolute inset-0 z-1" : "w-0"} overflow-hidden md:w-64 shrink-0 bg-gradient-to-b from-blue-400 to-indigo-200 text-white  flex md:flex flex-col transition-all duration-300 dark:from-blue-700 darak:to-indigo-500`} >
        <div className="p-6 text-4xl font-bold flex items-center gap-2 justify-between ">
          <div className="flex">
            {/* <FaUserTie /> */}
            <span className="text-2xl">My Shop</span>
          </div>
          <div className="bg-gray-800  rounded-full p-1 md:hidden ">
            <FaTimes className="text-2xl " onClick={() => { setOpenSidebar(!openSidebar) }} />


          </div>

        </div>

        <nav className="flex-1 px-4 space-y-2">
          <Link to="/employee" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all  hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaTachometerAlt /> Dashboard
          </Link>
          {/* <Link to="" className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaUsers /> Add Banner
          </Link> */}
          <Link to="/employee/addCategory" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee/addCategory" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaMoneyCheckAlt /> Add Category
          </Link>
           <Link to="/employee/addItem" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee/addItem" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaClipboardList /> Add Product
          </Link>
          
          <Link to="/employee/addBanner" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee/addBanner" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaMoneyCheckAlt /> Add Banner
          </Link>
         <Link to="/employee/viewItem" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee/viewItem" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaClipboardList /> View Product
          </Link>
          <Link to="/employee/viewCategory" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee/viewCategory" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaClipboardList /> View Category
          </Link>
          
          
          <Link to="/employee/settings" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee/settings" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaCog /> Settings
          </Link>
                    <Link to="/employee/profile" onClick={() => { setOpenSidebar(false) }} className={`${pathname=="/employee/profile" && "bg-white/20"} flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 hover:bg-white/20 hover:translate-x-1 `}>
            <FaUser /> Profile
          </Link>
         
        </nav>

        <div className="p-4">
          <button onClick={handleLogout} className=" cursor-pointer flex items-center gap-2 w-full bg-red-500 py-2 rounded-lg justify-center transition hover:bg-red-600 hover:shadow-lg">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>


    </>
  )
}

export default Sidebar