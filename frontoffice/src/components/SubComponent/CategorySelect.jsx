import React from "react";
import useOurCategoryBanner from "../hook/useOurCategoryBanner";
import { Link, useLocation, useNavigate} from "react-router-dom";



const CategorySelect = () => {
      const { pathname } = useLocation();
      const navigate = useNavigate();
    const{allCategories,loading}=useOurCategoryBanner();
    if(loading){
        return (<div className='  bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[1rem]' loading="lazy"/> <p className='font-bold text-lg text-black text-shadow-2xs'>Loading</p></div>)
    }
    if(allCategories.length <= 0){
      return "No Category Found"
    }
    const categoryNavigator =(e)=>{
        console.log(e.target.value);
        if(e.target.value){
            navigate(`/mainCategory/${e.target.value}`)
        }else{
            navigate("/");
        }
    }
  return (
    <div className="relative">
      <select
        
        onChange={categoryNavigator}
        className="
          w-full px-4 py-2 pr-10
          rounded
          bg-[#0b1c2d]
          border border-gray-700
          text-white
          focus:outline-none
          focus:border-orange-500  active:border-orange-500 outline-none
          appearance-none
          cursor-pointer
          text-sm
        "
      >
        <option value="" >
          Select Category
        </option>
        {allCategories?.map(
            (data,index) => (
                <option>
              <Link to={`/mainCategory/${data.categoryname}`}
                key={data._id}
                className={`${pathname=='/mainCategory/'+data.categoryname ? "bg-[#f75002] text-[#0B1F33]" : "bg-[#0b1c2d]"} flex items-center justify-between p-3 rounded-lg hover:bg-[#f75002] hover:text-[#0B1F33] cursor-pointer transition capitalize mb-2`}
              >
                {data.categoryname}
              </Link>
              </option>
            )
          )}

        {/* {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className=""
          >
            {opt.label}
          </option>
        ))} */}
      </select>

      {/* Custom Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        ▼
      </div>
    </div>
  );
};

export default CategorySelect;
