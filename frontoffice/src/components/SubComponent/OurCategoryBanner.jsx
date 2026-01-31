import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import useOurCategoryBanner from "../hook/useOurCategoryBanner";
import { Link } from 'react-router-dom';

const OurCategoryBanner = () => {
  const{allCategories,loading}=useOurCategoryBanner();
  // console.log(allCategories,"allCategories");
   if(loading){
        return (<div className=' h-full bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' loading="lazy"/> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }
    if(allCategories.length <= 0){
      return "No Data Found"
    }
    // console.log(allCategories,"<===============category allCategories")
  return (<>
  
  <section className=" py-16 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1F33] mb-12 headingfont p-3 rounded-sm">
          Our Category
        </h2>

        {/* BANNER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {
    allCategories?.slice(0, 6)?.map((data,index)=>{
      // return  
      return(
        <>
 <div
              
              className="relative flex items-center justify-center  group  h-52 md:h-40 rounded-lg overflow-hidden border border-slate-400/40 hover:border-indigo-500 transition"
            >
              <div className='absolute bg-[#0B1F33] opacity-50 inset-0 z-10'>

              </div>
              <p className='text-3xl text-gray-100 font-bold relative z-20  rounded-xl p-2 headingfont'>{data.categoryname}</p>
              {/* IMAGE PLACEHOLDER */}
              <div className="absolute z-0 inset-0 bg-cover" style={{ backgroundImage: `url(${data.pimage})` }}/>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#0B1F33]/0 group-hover:bg-[#0B1F33]/50 transition-all duration-1000  ease-in-out flex items-center justify-center z-30">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center transition-all  ease-in-out">
                  <h3 className="text-lg font-semibold mb-2">
                    {data.description}
                  </h3>
                  <Link to={"/mainCategory/"+data.categoryname} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-full font-medium hover:scale-105 transition relative z-20">
                    View Products <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
             
            
          
        </>
      )
    })
  }
           
        
        </div>
        {allCategories?.length > 6 && (<>
          <div className='flex justify-center mt-5'>
            <button type="button" class="cursor-pointer text-gray-300 bg-[#0B1F33] hover:bg-[#0B1F33]/90 focus:ring-4 focus:ring-[#0B1F33]/50  border border-transparent focus:outline-none font-medium leading-5 rounded-xl text-sm px-4 py-2.5 text-center dark:focus:ring-[#2557D6]/50 hover:scale-105 transition">
Explore More
</button>
          </div>
          </>)}
      </div>
    </section>

    </>
  )
}

export default OurCategoryBanner