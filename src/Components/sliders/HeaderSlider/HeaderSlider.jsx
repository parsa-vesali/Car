import React, { useRef, useState } from "react";
import { SliderData } from "../../../datas";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "./HeaderSlider.css";

export default function HeaderSlider() {
  const [sliders, setSliders] = useState(SliderData);

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
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id} className="swiper-slide">
            <img src={slider.srcImg} alt="" className="slider__img" />  
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
