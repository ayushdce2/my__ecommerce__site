import React,{createContext, useContext, useEffect, useState} from 'react';
import API from "./axios.jsx";
import { useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from './ToastCustom.jsx';

const UserDetailsContext = createContext();

const UserDetailsProvider  = ({children}) => {
  const navigate = useNavigate();
      const [userProfileDetails,setUserProfileDetails]=useState(null);
      const [Loading,setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [loginAgain,setLoginAgain] = useState(false);
      
    

      const fetchUserProfileDetails = async ()=>{
    try{
      
      const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }
    // const token = localStorage.getItem("token");
    const response = await API.get("/auth/profile",headers);
    const data = response.data;
    if(data.length==0){
      localStorage.removeItem("loggedinuser");
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      setLoginAgain(true);
      setTimeout(() => {
          navigate("/");
      }, 4000);
      
    }else{
      setUserProfileDetails(data);
      setLoading(false);
    }
    
    // console.log(data,"<==useFetchUserDetails",data.length);
  }catch(error){
    // console.log(error, "<=====useFetchUserDetails ERROR");
    setError(error)
              
    localStorage.removeItem("loggedinuser");
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");

    error.status=="403" && handleError(error.response.message)
  }
  }
  useEffect(()=>{
    fetchUserProfileDetails();
  },[])
  
    return (
      <UserDetailsContext.Provider value={{Loading,error,loginAgain, userProfileDetails, refetch : fetchUserProfileDetails}}>
        {children}
      </UserDetailsContext.Provider>
    )
}

const useUserDetails = () => {
  const context = useContext(UserDetailsContext);

  if (!context) {
    throw new Error(
      "useUserDetails must be used inside a <UserDetailsProvider> "
    );
  }

  return context;
}

export default UserDetailsContext;
export {UserDetailsProvider, useUserDetails}