import { useState } from "react";

const useAddBanner = () => {

    const [banner, setBanner] = useState({
    title: "",
    subtitle: "",
    link: "",
    status: "active",
    position: "homepage",
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
    console.log(banner);
  };

  return {handleChange,handleSubmit}
}

export default useAddBanner