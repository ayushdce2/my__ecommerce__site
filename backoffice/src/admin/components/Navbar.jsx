import {useContext } from 'react';
import {

  FaBell,
  FaMoon,
  FaSun,
  FaBars

} from "react-icons/fa";
import  AppThemeContext  from "../../utility/ThemeContext";
import {useUserDetails} from "../../utility/UserDetailsContext" ;


const Navbar = (props) => {
    const{setOpenSidebar,openSidebar}=props;
   const { darkMode, toggleTheme } = useContext(AppThemeContext);
   const { userProfileDetails } = useUserDetails();
  return (
    <>
     <header className="bg-gray-100 dark:bg-gray-800 shadow flex justify-between items-center p-4">
        <div className='md:hidden' onClick={()=>{setOpenSidebar(!openSidebar)}} >
            <FaBars className='text-2xl text-gray-800 dark:text-gray-100'/>
        </div>
                    <h1 className="capitalize text-xl font-semibold text-gray-700 dark:text-gray-200">
                     {userProfileDetails[0].userRole} Dashboard
                    </h1>
        
                    <div className="flex items-center gap-4">
                      {/* Dark Mode Toggle */}
                      <button
                        onClick={toggleTheme}
                        className="text-gray-600 dark:text-gray-300 transition hover:scale-110 cursor-pointer"
                      >
                        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                      </button>
        
                      {/* <FaBell className="text-gray-600 dark:text-gray-300 cursor-pointer transition hover:text-blue-600 hover:scale-110" /> */}
        
                      <div className="capitalize p-2 rounded bg-blue-500 text-white flex items-center justify-center cursor-pointer font-semibold hover:ring-2 hover:ring-blue-400">
                        Hi, {userProfileDetails[0].name}
                      </div>
                    </div>
                  </header>

    
    </>
  )
}

export default Navbar