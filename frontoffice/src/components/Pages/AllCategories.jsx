import { useState } from "react";
import useOurCategoryBanner from "../hook/useOurCategoryBanner";
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../SubComponent/Navbar";
import Footer from "../SubComponent/Footer";

const ITEMS_PER_PAGE = 9;

const AllCategories = () => {

  const [currentPage, setCurrentPage] = useState(1);
 const{allCategories,loading}=useOurCategoryBanner();
  console.log(allCategories,"allCategories");
   if(loading){
        return (<div className=' h-full bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' loading="lazy"/> <p className='font-bold text-3xl text-shadow-2xs'>Loading</p></div>)
    }
    if(allCategories.length <= 0){
      return "No Data Found"
    }
  const totalPages = Math.ceil(allCategories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCategories = allCategories.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
     <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* ALL CATEGORIES SECTION */}
  
        <section className="bg-slate-100 grow">
            <div className="bg-[#0B1F33]/90 h-48 flex items-center justify-center text-white text-2xl font-semibold">
        All Categories
      </div>
          <div className="max-w-7xl mx-auto p-4">
  
            

            {/* CATEGORY GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {
                 currentCategories?.map((data,index)=>{
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

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 bg-slate-800 text-white rounded-md disabled:opacity-40"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === i + 1
                      ? "bg-orange-500 text-white"
                      : "bg-slate-300 text-slate-900"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 bg-slate-800 text-white rounded-md disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </section>
   <Footer />
    </div>
    </>
  );
};

export default AllCategories;
