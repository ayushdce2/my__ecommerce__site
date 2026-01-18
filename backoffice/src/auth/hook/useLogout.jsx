import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../../utility/ToastCustom.jsx';
import { useUserDetails } from "../../utility/UserDetailsContext.jsx";
import API from '../../utility/axios.jsx';

const useLogout = () => {

  // const [loggedInUser,setloggedInUser]=useState("");

  const navigate = useNavigate();

  // useEffect(()=>{
  //   const storedUser = localStorage.getItem("loggedinuser");
  //   setloggedInUser(storedUser);
  // });
  const { userProfileDetails } = useUserDetails();

  


  const handleLogout = async () => {
    const _id = userProfileDetails[0]._id;
    const email = userProfileDetails[0].email;


    try {
      // console.log(email, "email")
      const res = await API.post("/auth/logout", {_id,email});
      const resJson = await res.data;
      // console.log(resJson,"<----------------resposne LOCAL");
      const { message, success, error, name, userRole } = resJson;
      // console.log(message,success,error,jwtToken,name, userRole)

      if (success) {
        handleSuccess(message);
        localStorage.removeItem("loggedinuser");
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }


    } catch (error) {
      console.log(error);
    }








  }





  return { handleLogout }
}



export default useLogout