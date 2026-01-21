import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import useOurCategoryBanner from "./hook/useOurCategoryBanner";

const OurCategoryBanner = () => {
  const{allCategories,loading}=useOurCategoryBanner();
  console.log(allCategories,"allCategories");
   if(loading){
        return (<div className=' h-full bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }
    if(allCategories.length <= 0){
      return "No Data Found"
    }
  return (<>
  
  <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Our Category
        </h2>

        {/* BANNER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {
    allCategories?.map((data,index)=>{
      // return  
      return(
        <>
 <div
              
              className="relative flex items-center justify-center  group bg-slate-300 h-52 md:h-60 rounded-lg overflow-hidden border border-slate-400/40 hover:border-indigo-500 transition"
            >
              <p className='text-3xl text-white relative z-10'>{data.categoryname}</p>
              {/* IMAGE PLACEHOLDER */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-500" />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/70 transition flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center transition">
                  <h3 className="text-lg font-semibold mb-2">
                    {data.description}
                  </h3>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-full font-medium hover:scale-105 transition">
                    View Products <FiArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
        </>
      )
    })
  }
           
        
        </div>
      </div>
    </section>

    </>
  )
}

export default OurCategoryBanner