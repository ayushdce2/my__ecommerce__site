import React,{ useState } from 'react';
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';
import { useEffect } from 'react';

const useAddItem = () => {

    const [product, setProduct] = useState({
    pname: "",
    pprice: "",
    pcategory: "",
    pstock: "",
    pdescription: "",
    pimage: null,
    platest:""
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({
      ...product,
      [name]: files ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // addImagetoCloud();
    addProducttoDB();
  };
// console.log(product?.pimage,"product?.pimage");
//   const imagetobeupload = product.pimage?.File ?? null;
//   console.log(imagetobeupload,"<=====imagetobeupload")
  const addImagetoCloud = async({imagetobeupload})=>{
    const validateFile = (imagetobeupload) => {
    if (!ALLOWED_TYPES.includes(imagetobeupload.type)) {
      return "Only JPG, PNG, WEBP allowed";
    }
    if (imagetobeupload.size > MAX_SIZE) {
      return "File size must be under 2MB";
    }
    return null;
  };

  const validationError = validateFile(imagetobeupload);
    if (validationError) {
      console.log(validationError);
      return;
    }

    const formData = new FormData();
    formData.append("file", imagetobeupload);
    formData.append("upload_preset", "mern_unsigned");

    const cloudRes = await API.post(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      formData
    );

    const cloudData = await cloudRes.data;
    console.log(cloudData,"<=======cloudData")


  }

  const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }
  
  const addProducttoDB =async()=>{
            

console.log(product,"actual product")
            try {
                const response = await API.post("employee/product/add" ,product, headers);
                const data = response.data;
                handleSuccess(data.message);
                
              
              

   
                console.log(response,"response");
                // await refetch();
                // console.log(finalRefetch,"finalRefetch",refetch)
                console.log(data.status,"data.status")
       
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



  return {handleChange, handleSubmit}
}

export default useAddItem