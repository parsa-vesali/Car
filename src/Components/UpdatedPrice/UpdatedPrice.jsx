import React, { useState } from "react";
import { brandDatas } from "../../datas";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./UpdatedPrice.css";

export default function UpdatedPrice() {
  const [Datas, setDatas] = useState(brandDatas);
  return (
    <>
      <div className="updatedPrice">
        <div className="updatedPrice__header">
          <h2 className="updatedPrice__title">قیمت روز خودرو</h2>
          <span className="updatedPrice__icon">
            <ShowChartIcon />
          </span>
        </div>
        <div className="updatedPrice__slider">
          <Swiper
            slidesPerView={2}
            spaceBetween={100}
            centeredSlides={true}
            className="mySwiper"
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
            loop={true}
            breakpoints={{
              526: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: { 
                slidesPerView: 3,
              },
              992: { 
                slidesPerView: 3,
              },
            }}
          >
            {Datas.map((data) => (
              <SwiperSlide className="updatedPrice__slide">
                <span className="updatedPrice__slide-icon">{data.logoSvg}</span>
                <h2 className="updatedPrice__slide-title">{data.title}</h2>
                <div className="updatedPrice__slide-price-icon">
                <span className="updatedPrice__slide-price">{data.price}ت</span>
                <span className="updatedPrice__slide-arrow">
                  {data.increase ? (<ArrowDropUpIcon  className="arrow-up"/>) : (<ArrowDropDownIcon className="arrow-down" />)}
                  0.95%-</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="app__btn updatedPrice__slider-btn">
            مشاهده همه <ChevronLeftIcon />
          </button>
        </div>
      </div>
    </>
  );
}
