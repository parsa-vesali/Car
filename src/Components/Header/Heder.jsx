import "./Header.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
export default function Heder() {
  return (
    <div className="swiper-container">
      <Swiper
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide"> 
        <img src="./img/slider-2.jpg" alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"> 
        <img src="./img/slider-3.jpg" alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"> 
        <img src="./img/slider-4.jpg" alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"> 
        <img src="./img/slider-5.jpg" alt="" className="slider__img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
