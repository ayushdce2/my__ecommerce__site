import React from 'react'
import {useUserDetails} from "../../utility/UserDetailsContext" ;

const Profile = () => {
    const { userProfileDetails } = useUserDetails();
    // console.log(userProfileDetails,"userProfileDetails")
  return (
    <>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
    <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs'>Profile</p>
    </div>
<div className='p-1'>
    <div className=' py-2  flex items-center gap-2'>
<p className='  text-gray-500 dark:text-gray-300 py-2  text-lg'>Full Name: </p>
<p className='dark:text-gray-500'>{userProfileDetails[0].name}</p>
    </div>
    <div className=' py-2  flex items-center gap-2'>
<p className='  text-gray-500 dark:text-gray-300 py-2  text-lg'>Email: </p>
<p className='dark:text-gray-500'>{userProfileDetails[0].email}</p>
    </div>
    <div className=' py-2  flex items-center gap-2'>
<p className='  text-gray-500 dark:text-gray-300 py-2  text-lg'>Date of Joining: </p>
<p className='dark:text-gray-500'>{new Date(userProfileDetails[0].createdAt).toLocaleString()}</p>
    </div>
    <div className=' py-2  flex items-center gap-2'>
<p className='  text-gray-500 dark:text-gray-300 py-2  text-lg'>Role: </p>
<p className='dark:text-gray-500'>{userProfileDetails[0].userRole}</p>
    </div>
    </div>
</div>
    
    </>
  )
}

export default Profile