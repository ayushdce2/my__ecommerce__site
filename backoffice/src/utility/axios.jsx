import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL 
    // || "https://emp-mgmt-mern.onrender.com/api" || "http://localhost:5000/api",
    // 
});
// console.log(import.meta.env,"ayush");

export default API;
