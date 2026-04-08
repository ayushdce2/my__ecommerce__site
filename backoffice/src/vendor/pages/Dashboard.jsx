import react,{useState,useEffect} from "react"
import {
  FaUsers,
  FaUserTie,
  FaMoneyCheckAlt,
  FaCalendarAlt
} from "react-icons/fa";
import { useAppTheme } from "../../utility/ThemeContext";
import API from '../../utility/axios';
// import { data } from "react-router-dom";


const Dashboard = () => {

  
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
      
        const [products, setProducts] = useState([]);

  const headers = {
          headers: {
              "Authorization": localStorage.getItem("token"),
          }
      }
  
    const fetchCategories = async () => {
      setLoading(true);

      try {
          
        const { data } = await API.get(`/vendor/main/category/view`, headers);
      //   console.log(data,"<==========data")
        setCategories(data.categories);
        // console.log(data,"<==data")
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        
      }
    };
  
    const fetchProducts = async () => {
      
    setLoading(true);

   

    




const res = await API.get(
  `vendor/product/view`,
  headers
);
const data = res.data;

   

    setProducts(data.data);
    
    setLoading(false);
    // console.log(products,"<==============my products",data.data)
  };

    useEffect(() => {
      fetchCategories();
      fetchProducts();
    }, []);
    console.log(products ,"<==")
  return (
    <>
    
    {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  
  {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : categories.length === 0 ? (
          <div className={`bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Categories</p>
        <h2 className="text-3xl font-bold">0</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaUsers />}</div>
    </div>
  </div>
        ) : (
          <div className={`bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Categories</p>
        <h2 className="text-3xl font-bold">{categories.length}</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaUsers />}</div>
    </div>
  </div>
        )}
 

  {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : categories.length === 0 ? (
           <div className={`bg-gradient-to-r from-red-500 to-pink-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Active Categories</p>
        <h2 className="text-3xl font-bold">0</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaUserTie />}</div>
    </div>
  </div>
        ) : (
          <div className={`bg-gradient-to-r from-red-500 to-pink-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Active Categories</p>
        <h2 className="text-3xl font-bold">{categories.filter(item=>{
          return item.status=="Active"
        }).length}</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaUserTie />}</div>
    </div>
  </div>
        )}
            
  {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : products.length === 0 ? (
          <div className={`bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Products</p>
        <h2 className="text-3xl font-bold">{products.length}</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaCalendarAlt />}</div>
    </div>
  </div>
        ) : (
<div className={`bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Products</p>
        <h2 className="text-3xl font-bold">{products.length}</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaCalendarAlt />}</div>
    </div>
  </div>
        )}
  
  
  {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : products.length === 0 ? (
          <div className={`bg-gradient-to-r from-green-500 to-emerald-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Products Stock</p>
        <h2 className="text-3xl font-bold">
          
  {products.reduce((total, item) => {
    
    return total + Number(item.pstock)
  }, 0)}
</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaMoneyCheckAlt />}</div>
    </div>
  </div>
        ) : (
<div className={`bg-gradient-to-r from-green-500 to-emerald-500 text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">Total Products Stock</p>
        <h2 className="text-3xl font-bold">
          
  {products.reduce((total, item) => {
    
    return total + Number(item.pstock)
  }, 0)}
</h2>
      </div>
      <div className="text-4xl opacity-80">{<FaMoneyCheckAlt />}</div>
    </div>
  </div>
        )}
              
                </div>
    
                {/* Recent Product */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                     Recent Products
                  </h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center py-10 text-slate-400">No data found</p>
        ) : (
        
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          {products.slice(-3).map((data,index)=>{
            return (
              <li className="p-2 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:pl-4">
    ✔ {data.pname}
  </li>
            )
          })}
        
                  
                     
  

                  </ul>
                
        )}
                     
  
  

                  </ul>
                </div>

                {/* Recent category */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                     Recent Category
                  </h2>
                  {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : categories.length === 0 ? (
          <p className="text-center py-10 text-slate-400">No data found</p>
        ) : (
        
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          {categories.slice(-3).reverse().map((data,index)=>{
            return (
              <li className="p-2 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:pl-4">
    ✔ {data.categoryname}
  </li>
            )
          })}
        
                  
                     
  

                  </ul>
                
        )}
   </div>
    
    </>
  )
}

export default Dashboard