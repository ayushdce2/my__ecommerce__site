import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "my_ecom_site");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/diuhckuxe/image/upload",
      data
    );


    return res.data; 
  } catch (error) {
   
    if (error.response && error.response.data && error.response.data.error) {
      // throw new Error(`Upload failed: ${error.response.data.error.message}`);
      return{success:false, error:error.response.data.error.message}
      
    } else {
      // throw new Error(`Upload failed: ${error.message}`);
      return{success:false, error:error.message}
    }
    
  }
};
