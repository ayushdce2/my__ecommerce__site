import React from 'react'
import {useUserDetails} from "../../utility/UserDetailsContext" ;
import useProfile from '../hook/useProfile';

const Profile = () => {
    const { userProfileDetails } = useUserDetails();
    // console.log(userProfileDetails,"userProfileDetails")
    const {handleChange, handleSubmit, profile} = useProfile({userProfileDetails});
  return (
    <>
    <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs'>Profile</p>
    </div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-4xl">
    
<div className='p-1 '>
        {/* Profile Card */}
      <form
        onSubmit={handleSubmit}
        className=" "
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
              {profile.avatar ? (
                <img
                  src={URL.createObjectURL(profile.avatar)}
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-4xl font-semibold text-slate-500 dark:text-slate-300">
                  {profile.name.charAt(0)}
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
                name="phone"
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
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
            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Your address..."
          />
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-end gap-4 items-center">
           
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300 mr-auto">
            Date of Joining: {new Date(userProfileDetails[0].createdAt).toLocaleString()}
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
  )
}

export default Profile