import React, { useState } from 'react'
import API from "../../utility/axios.jsx";
import {handleSuccess,handleError } from "../../utility/ToastCustom.jsx";
import { useNavigate } from 'react-router-dom';

const useSignup = () => {

    const navigate = useNavigate();

    const [signupAllData, setSignupAllData]=useState({email:"",password:""});

    const signupFormData = (e)=>{
        setSignupAllData((prev)=>({...prev,[e.target.name]:e.target.value}));
        // console.log(signupAllData)
    }

    const signupSubmit = async (e)=>{
        e.preventDefault();
        if(signupAllData.name==="" || signupAllData.email==="" || signupAllData.password==="" ){
            return handleError("All fields required")
         }
        // console.log(signupAllData);
        try{
            const res = await API.post("/auth/signup",signupAllData);
            const resJson = await res.data;
            console.log(resJson,"<----------------resposne LOCAL");

            resJson.success == true && handleSuccess(resJson.message);

                    setTimeout(() => {
                       navigate("/");
                    }, 1000);


        }catch(error){
            // console.log(error);
            error.status == "400" && (handleError(error.response.data.error.details[0].message));
            error.status == "409" && (handleError(error.response.data.message));
        }
        
    }
    
    return {signupFormData,signupSubmit}
}

export default useSignup