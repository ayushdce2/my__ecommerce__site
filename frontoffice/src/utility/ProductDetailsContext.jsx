import React,{createContext, useContext, useEffect, useState} from 'react';
import API from "./axios.jsx";
import { useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from './ToastCustom.jsx';

const ProductDetailsContext = createContext();

const ProductDetailsProvider  = ({children}) => {
  const navigate = useNavigate();
      const [productDetails,setProductDetails]=useState(null);
         const[latestProduct,setLatestProduct]=useState(null);
      const [Loading,setLoading] = useState(true);
        const [error, setError] = useState(null);
        // const [loginAgain,setLoginAgain] = useState(false);
      
    

      const fetchProductDetails = async ()=>{
    try{
      

    // const token = localStorage.getItem("token");
    const response = await API.get("/frontoffice/product/view");
    const data = response.data;
    // console.log(data,"<======data")
    if(data.length==0){
      setTimeout(() => {
          navigate("/NoProductFound");
      }, 4000);
      
    }else{
      setProductDetails(data);
      if(data?.all_product?.length > 0){
  const all_latest_product = data.all_product
    .filter(item => item.platest === "Yes");
   setLatestProduct(all_latest_product)
  
}
      setLoading(false);
    }
    
    // console.log(data,"<==useFetchUserDetails",data.length);
  }catch(error){
    // console.log(error, "<=====useFetchUserDetails ERROR");
    setError(error)
              
    // localStorage.removeItem("loggedinuser");
    // localStorage.removeItem("token");
    // localStorage.removeItem("userRole");

    error.status=="403" && handleError(error.response.message)
  }
  }
  useEffect(()=>{
    fetchProductDetails();
  },[])
  
    return (
      <ProductDetailsContext.Provider value={{Loading,error,productDetails, latestProduct}}>
        {children}
      </ProductDetailsContext.Provider>
    )
}

const useProductDetails = () => {
  const context = useContext(ProductDetailsContext);

  if (!context) {
    throw new Error(
      "useProductDetails must be used inside a <ProductDetailsProvider> "
    );
  }

  return context;
}

export default ProductDetailsContext;
export {ProductDetailsProvider, useProductDetails}