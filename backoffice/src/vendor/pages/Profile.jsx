import React, { useState, useEffect } from "react";
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';
import { uploadToCloudinary } from "../../utility/cloudinary.js";

import { useUserDetails } from "../../utility/UserDetailsContext";

const Profile = () => {
  const { userProfileDetails,refetch } = useUserDetails();
  const [ApiLoading, setApiLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "",
    phone_number: "",
    company_name: "",
    address: "",
    avatar: null, // string (URL) OR File
  });


  const fetchUserData = ()=>{
    if (userProfileDetails?.length > 0) {
      const user = userProfileDetails[0];

      setProfile({
        name: user.name || "",
        email: user.email || "",
        role: user.userRole || "",
        phone_number: user.phone_number || "",
        company_name: user.company_name || "",
        address: user.address || "",
        avatar: user.avatar || null, // ✅ FIX: load Cloudinary URL
      });
    }
  }
  // Populate data
  useEffect(() => {
    fetchUserData();
  }, [userProfileDetails]);

  console.log(userProfileDetails, "userProfileDetails");

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setProfile((prev) => ({
        ...prev,
        avatar: files[0], // File object
      }));
    } else {
      setProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Submit form (Axios)
  const handleSubmit = (e) => {
    e.preventDefault();

addUsertoDB();

    
  };

   const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }
const addUsertoDB =async()=>{
      setApiLoading(true)
 try {
    const userId = userProfileDetails?.[0]?._id;

    let avatarUrl = profile.avatar;
    let avatarPublicId = profile.avatarPublicId;

    // ✅ CASE 1: New file selected → upload to Cloudinary
    if (profile.avatar && typeof profile.avatar !== "string") {
      const cloud = await uploadToCloudinary(profile.avatar);

      avatarUrl = cloud.secure_url;
      avatarPublicId = cloud.public_id;
    }

    // ✅ CASE 2: Already uploaded image → DO NOTHING (reuse existing)
    // (no upload call happens here)

    const payload = {
      name: profile.name,
      phone_number: profile.phone_number,
      company_name: profile.company_name,
      address: profile.address,
      avatar: avatarUrl,
      avatarPublicId // ✅ important for future updates/deletes
    };
console.log(payload,"<======payload")
    const { data } = await API.put(
      `/auth/update_profile/${userId}`,
      payload,headers
      
    );

    handleSuccess("Profile updated successfully");

    // ✅ sync state with backend response
    setProfile((prev) => ({
      ...prev,
      avatar: data.avatar || avatarUrl,
      avatarPublicId: data.avatarPublicId || avatarPublicId
    }));
    await refetch();
  } catch (error) {
    console.error(error);
    handleError(error)
    alert(error?.response?.data?.message || "Update failed");
  } finally {
    setApiLoading(false);
  }
}

if(ApiLoading){
        return (<div className=' h-screen bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/user/images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }

  return (
    <>
      <div className="p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400">
        <p className=" px-2  font-bold tracking-wider text-2xl text-shadow-2xs">
          Profile
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-4xl">
        <div className="p-1 ">
          <form onSubmit={handleSubmit} className=" ">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                  {console.log(profile,"<================profile")}
                  
                  {profile.avatar ? (
                    <img
                      src={
                        typeof profile.avatar === "string"
                          ? profile.avatar // ✅ Cloudinary URL
                          : URL.createObjectURL(profile.avatar) // ✅ local preview
                      }
                      alt="avatar"
                      className="h-full w-full object-cover rounded-[50%]"
                    />
                  ) : (
                    <span className="text-4xl font-semibold text-slate-500 dark:text-slate-300 capitalize">
                      {profile.name?.charAt(0)}
                    </span>
                  )}

                </div>

                <label className="mt-4 cursor-pointer text-sm text-blue-600 dark:text-blue-400">
                  Change Avatar
                  <input
                    type="file"
                    name="avatar"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Basic Info */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    disabled
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={profile.role}
                    disabled
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    onChange={handleChange}
                    value={profile.phone_number}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    onChange={handleChange}
                    value={profile.company_name}
                    disabled
                    className="cursor-not-allowed w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-600 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mt-6">
              <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                Address
              </label>
              <textarea
                name="address"
                rows="3"
                onChange={handleChange}
                value={profile.address}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Actions */}
            <div className="mt-8 flex justify-end gap-4 items-center">
              <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300 mr-auto">
                Date of Joining:{" "}
                {userProfileDetails?.length > 0 &&
                  new Date(
                    userProfileDetails[0].createdAt
                  ).toLocaleString()}
              </label>

              <button
                type="reset"
                className="rounded-lg border border-slate-300 dark:border-slate-600 px-6 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;