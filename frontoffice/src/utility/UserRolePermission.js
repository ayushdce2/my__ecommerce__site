import { useNavigate } from 'react-router-dom';
import {useUserDetails} from "./UserDetailsContext.jsx";

export const UserRolePermission = ({ roles, children }) => {
   const navigate = useNavigate();
const { Loading } = useUserDetails();
  if(Loading) return "Loading. Wait Checking Permissions";
// console.log(userProfileDetails,"userProfileDetails");


    const currentUserRole  = localStorage.getItem("userRole");

  if (!roles.includes(currentUserRole)) {
    return navigate("/unauthorized" ,{replace:false}) ;
  }
 

  return children;
};
