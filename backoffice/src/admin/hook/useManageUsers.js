import React from 'react'
import { useEffect, useState } from "react";
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';

const useManageUsers = () => {
    const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading,setLoading]=useState(true)

  const LIMIT = 5;

  useEffect(() => {
    fetchUsers();
  }, [search, sort, page]);

  const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }

  const fetchUsers = async () => {
    try{
    const res = await API.get(`/admin/viewallusers?search=${search}&sort=${sort}&page=${page}&limit=${LIMIT}`,headers)
    const data = await res.data;
    console.log(data,"<======data")
    setUsers(data.users);
    setTotalPages(data.pagination.pages, totalPages);
    setLoading(false)
    }catch(error){
        console.log(error,"<==error")
    }
  }

  const changeUserStatus =async (e,user)=>{
    setLoading(true)
    console.log(e.target.value,"<================e.target.value",user);

    const dataTobeupdated = {
        "value":e.target.value,
        "userID":user
    }

    try{
    const res = await API.put("/admin/updateusers",dataTobeupdated,headers);
    const data = await res.data;
    console.log(data,"<======data")
    fetchUsers();
    }catch(error){
        console.log(error,"<==error")
    }
  }


  return {search, sort, users, page, loading,setSort, setSearch,setPage, changeUserStatus}
}

export default useManageUsers