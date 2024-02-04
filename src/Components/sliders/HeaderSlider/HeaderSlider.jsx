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
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id} className="swiper-slide">
            <img src={slider.srcImg} alt="slide" className="slider__img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
