import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import useHomeBanner from "../hook/useHomeBanner";

const Banner = () => {

  const {allBanner,loading}=useHomeBanner();
if(loading){
        return (<div className=' h-full bg-gradient-to-b from-blue-400 to-indigo-200 text-gray-200 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' loading="lazy"/> <p className='font-bold text-3xl text-black text-shadow-2xs'>Loading</p></div>)
    }
    console.log(allBanner[0]?.pimage,"<==============allBanner")
  return (
    <>
  
      <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className=" overflow-hidden"
    >
      {
        loading ? <p>Loading</p> :
        allBanner.length == 0 ? <p>No Banner Found</p> : allBanner?.map((data,index)=>{
        return(<SwiperSlide>
        <div className="h-[75vh]  flex items-center justify-center ">
          <img src={data.pimage} className='object-cover w-full h-full' loading="lazy"/>
        </div>
      </SwiperSlide>)
      }
      )
      }
      

      {/* <SwiperSlide>
        <div className="h-[70vh] bg-blue-400 dark:bg-blue-800 flex items-center justify-center text-white text-3xl">
          Banner 2
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[70vh] bg-blue-400 dark:bg-blue-800 flex items-center justify-center text-white text-3xl">
          Banner 3
        </div>
      </SwiperSlide> */}
    </Swiper>
    
    </>
  )
}

export default Banner