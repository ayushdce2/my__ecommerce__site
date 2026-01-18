import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const ProductSlide = () => {
  return (
    <>
    
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className=" overflow-hidden"
    >
      <SwiperSlide>
        <div className="h-64 bg-blue-400 dark:bg-blue-800 flex items-center justify-center text-white text-3xl">
          Product Slide 1
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-64 bg-blue-400 dark:bg-blue-800 flex items-center justify-center text-white text-3xl">
          Product Slide  2
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-64 bg-blue-400 dark:bg-blue-800 flex items-center justify-center text-white text-3xl">
          Product Slide  3
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default ProductSlide