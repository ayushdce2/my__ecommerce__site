import React from 'react';
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';
import { useEffect,useState } from 'react';

const useOurCategoryBanner = () => {

    const [allCategories,setAllCategories]=useState(null);
    const [loading,setLoading]=useState(true)

    
  const getAllCategories =async ()=>{


            try {
                const response = await API.get("/frontoffice/product/category/view");
                const data = response.data;
                handleSuccess(data.message);
                
              
              

   
                // console.log(response,"category response",response.data.all_category);
                // await refetch();
                // console.log(finalRefetch,"finalRefetch",refetch)
                // console.log(data.all_category,"data.status");
                setAllCategories(data.all_category)
                setLoading(false)
       
            } catch (error) {
                console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                error.status=="400" && handleError(error.response.data.message);
                error.status=="403" && handleError(error.response.data.error.details[0].message);
                error.status=="422" && handleError(error.response.data.message);
                error.status=="409" && handleError(error.response.data.message);
                error.status=="400" && handleError(error.response.data.error.details[0].message);
                
            }
}

useEffect(()=>{
  getAllCategories();
},[])

  return {allCategories,loading}
}

export default useOurCategoryBanner
