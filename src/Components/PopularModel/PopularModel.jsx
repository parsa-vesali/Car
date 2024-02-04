import React, { useState } from "react";
import { Link } from "react-router-dom";
import { populaModelDatas } from "../../datas";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./PopularModel.css";

export default function PopularModel() {
  const [popularDatas, setPopularDatas] = useState(populaModelDatas);

  const getRandomImages = () => {
    const shuffled = popularDatas.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  return (
    <div className="container">
      <div className="popularModel">
        <div className="popularModel__header">
          <div className="popularModel__header-right">
            <h2 className="popularModel__header-title">محبوبترین مدل‌ها</h2>
          </div>
          <div className="popularModel__header-left">
            <button className="app__btn">
              <Link to={"/"} className="link">
                مشاهده همه
                <ChevronLeftIcon />
              </Link>
            </button>
          </div>
        </div>
        <div className="popularModel__images">
          {getRandomImages().map((popularData) => (
            <img 
            className="popularModel__image"
              src={popularData.srcImg}
              alt="popularImg"
              key={popularData.id}
            />
          ))}
        </div>
        {/* MOBILE */}
        <div className="popularModel__images-mobile">
          <Swiper
            slidesPerView={2}
            spaceBetween={5}
            centeredSlides={true}
            className="mySwiper"
            breakpoints={{
                526: {
                  slidesPerView: 4, 
                },
                640: {
                  slidesPerView: 4, 
                },
                768: {
                  slidesPerView: 5, 
                },
                992: {
                  slidesPerView: 5,
                },
              }}
          >
            {getRandomImages().map((popularData) => (
              <SwiperSlide>
                <img
                className="popularModel__image"
                  src={popularData.srcImg}
                  alt="popularImg"
                  key={popularData.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
