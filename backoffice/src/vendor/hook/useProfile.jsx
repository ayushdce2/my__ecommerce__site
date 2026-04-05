import { useState } from "react";

const useProfile = ({userProfileDetails}) => {

    const [profile, setProfile] = useState({
    name: userProfileDetails[0].name,
    email: userProfileDetails[0].email,
    role: userProfileDetails[0].userRole,
    phone: "",
    address: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfile({
      ...profile,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  return {handleChange, handleSubmit,profile}
}

export default useProfile