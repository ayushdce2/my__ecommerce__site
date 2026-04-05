import { useState } from "react";
import { uploadToCloudinary } from "../../utility/cloudinary";
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';
import { useAppTheme } from "../../utility/ThemeContext";

const useAddBanner = () => {

  const { apiloading, setApiLoading } = useAppTheme();

    const [banner, setBanner] = useState({
    title: "",
    subtitle: "",
    link: "",
    status: "active",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBanner({
      ...banner,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(banner,"<========banner");
    sendBannerToDB(banner);
  };

const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }

  const sendBannerToDB =async (banner)=>{

    setApiLoading(true)
        console.log(banner,"actual product")
                console.log(banner.image,"<=======pimage")
      const cloud = await uploadToCloudinary(banner.image);
      banner.pimage= cloud.secure_url;
      banner.imgPublicId= cloud.public_id
    
                try {
                  
                    const response = await API.post("employee/banner/add" ,banner, headers);
                    const data = response.data;
                    handleSuccess(data.message);
                    
                  
                  
    
       
                    console.log(response,"response");
                    // await refetch();
                    // console.log(finalRefetch,"finalRefetch",refetch)
                    console.log(data.status,"data.status")
           setApiLoading(false)
                } catch (error) {
                    console.log(error, "error", error.status);
                    // error.status=="500" && handleError(error.response.data.error.codeName)
                    error.status=="400" && handleError(error.response.data.message);
                    error.status=="403" && handleError(error.response.data.error.details[0].message);
                    error.status=="422" && handleError(error.response.data.message);
                    error.status=="409" && handleError(error.response.data.message);
                    error.status=="400" && handleError(error.response.data.error.details[0].message);
                    setApiLoading(false)
                    
                }
   

  // API



  }
  return {handleChange,handleSubmit}
}

export default useAddBanner