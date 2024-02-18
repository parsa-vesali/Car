import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper/modules";
export default function ArticleSlider() {
  return (
    <Swiper
      scrollbar={{
        hide: false,
      }}
      modules={[Scrollbar]}
      className="mySwiper Articles__slider-wrapper"
    >
      <SwiperSlide className="Articles__slide">
        <div className="Articles__slide-right">
          <p className="Articles__slide-smal-title">
            با فناوری بیشتر و رنگ زرد درخشان!
          </p>
          <h2 className="Articles__slide-title">معرفی نیسان جوک 2024</h2>
          <p className="Articles__slide-text">
            نیسان جوک به عنوان یکی از خودروهای غیربریتانیایی که در این کشور
            مونتاژ می­‌شود، با گذشت نزدیک به 5 سال از تولد نسل دوم، ....
          </p>
        </div>
        <div className="Articles__slide-left">
          <img src="../img/article-6.webp" alt="article" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="Articles__slide">
        <div className="Articles__slide-right">
          <p className="Articles__slide-smal-title">
            با فناوری بیشتر و رنگ زرد درخشان!
          </p>
          <h2 className="Articles__slide-title">
            ملاقات با فورد ماستنگ Mach-1 مدل 1973
          </h2>
          <p className="Articles__slide-text">
            نیسان جوک به عنوان یکی از خودروهای غیربریتانیایی که در این کشور
            مونتاژ می­‌شود، با گذشت نزدیک به 5 سال از تولد نسل دوم، ....
          </p>
        </div>
        <div className="Articles__slide-left">
          <img src="../img/article-7.webp" alt="article" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
