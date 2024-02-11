import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import { postDatas } from "../../datas";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WestIcon from "@mui/icons-material/West";
import { GiHomeGarage } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbSteeringWheel } from "react-icons/tb";
import { LiaBrushSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./MainPost.css";

export default function MainPost() {
  let params = useParams();
  let mainPostData = postDatas.find(post => post.id == params.postId)
  return (
    <>
      <div className="container">
        <Breadcrumb page={"خرید خودرو"} />
        <div className="MainPost">
          <div className="MainPost__right">
            <div className="MainPost__header">
              <h2 className="MainPost__title">{mainPostData.title}</h2>
              <span className="MainPost__header-icons">
                <ShareIcon />
                <BookmarkAddIcon />
              </span>
            </div>
            <div className="MainPost__Property">
              <p className="MainPost__Property-text">{mainPostData.model}</p>
              <p className="MainPost__Property-text">{mainPostData.gear}</p>
            </div>
            <p className="MainPost__date">{mainPostData.date} </p>
            <div className="MainPost__price-address">
              <p className="MainPost__address">
              {mainPostData.address}
                <LocationOnIcon />
              </p>
              <p className="MainPost__price">{mainPostData.price}</p>
            </div>

            <button className="app__btn MainPost__btn">
              <PhoneIcon />
              تماس با فروشنده
            </button>

            <div className="MainPost__seller">
              <div className="MainPost__seller-right">
                <h2 className="MainPost__seller-title">
                  اتو گالری نیک نژاد VIP
                </h2>
                <p className="MainPost__seller-subtitle">
                  تهران، ولنجک، نبش خیابان چهاردهم -پلا..
                </p>
                <a href="#" className="MainPost__seller-link app__link">
                  20 آگهی از این نمایشگاه
                  <span className="MainPost__seller-link-icon">
                    <WestIcon />
                  </span>
                </a>
              </div>
              <div className="MainPost__seller-left">
                <span className="MainPost__seller-icon">
                  <GiHomeGarage />
                </span>
              </div>
            </div>

            <div className="MainPost__information">
              <div className="MainPost__information-box">
                <span className="MainPost__information-icon">
                  <TbManualGearbox />
                </span>
                <p className="MainPost__information-title">گیربکس </p>
                <p className="MainPost__information-text">اتوماتیک</p>
              </div>

              <div className="MainPost__information-box">
                <span className="MainPost__information-icon">
                  <BsFillFuelPumpFill />
                </span>
                <p className="MainPost__information-title">نوع سوخت </p>
                <p className="MainPost__information-text">بنزینی</p>
              </div>

              <div className="MainPost__information-box">
                <span className="MainPost__information-icon">
                  <IoSpeedometerOutline />
                </span>
                <p className="MainPost__information-title">کارکرد</p>
                <p className="MainPost__information-text">{mainPostData.km}</p>
              </div>

              <div className="MainPost__information-box">
                <span className="MainPost__information-icon">
                  <TbSteeringWheel />
                </span>
                <p className="MainPost__information-title">رنگ داخلی</p>
                <p className="MainPost__information-text">داخل قرمز</p>
              </div>

              <div className="MainPost__information-box">
                <span className="MainPost__information-icon">
                  <LiaBrushSolid />
                </span>
                <p className="MainPost__information-title">رنگ بدنه</p>
                <p className="MainPost__information-text">سرمه ای</p>
              </div>

              <div className="MainPost__information-box">
                <span className="MainPost__information-icon">
                  <IoCarSportOutline />
                </span>
                <p className="MainPost__information-title">وضعیت بدنه</p>
                <p className="MainPost__information-text">بدون رنگ</p>
              </div>
            </div>
          </div>

          <div className="MainPost__left">
            <div className="MainPost__slider">
              <Swiper
                cssMode={true}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={`../${mainPostData.mainImg}`} alt="slide" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="MainPost__description">
              <div className="MainPost__description-title">توضیحات</div>
              <div className="MainPost__description-text">
                تنها نمونه موجود در ایران داخل دیزاینو قرمز فول به شرط کارشناسی
              </div>
            </div>

            <div className="MainPost__technical">
              <h2 className="MainPost__technical-title">مشخصات فنی</h2>
              <ul className="MainPost__technical-list">
                <li className="MainPost__technical-item">
                  <p className="MainPost__technical-item-text">حجم موتور</p>
                  <h2 className="MainPost__technical-title">4.7 لیتر</h2>
                </li>
                <li className="MainPost__technical-item">
                  <p className="MainPost__technical-item-text">پیشرانه</p>
                  <h2 className="MainPost__technical-title">
                    8 سیلندر تویین توربوشارژ
                  </h2>
                </li>
                <li className="MainPost__technical-item">
                  <p className="MainPost__technical-item-text">شتاب</p>
                  <h2 className="MainPost__technical-title">5.2 ثانیه</h2>
                </li>
                <li className="MainPost__technical-item">
                  <p className="MainPost__technical-item-text">مصرف ترکیبی</p>
                  <h2 className="MainPost__technical-title">
                    9 لیتر در صد کیلومتر
                  </h2>
                </li>
              </ul>
              <a href="#" className="MainPost__seller-link app__link">
                مشاهده مشخات فنی بیشتر
                <span className="MainPost__seller-link-icon">
                  <WestIcon />
                </span>
              </a>
            </div>

            <div className="MainPost__report">
              <div className="MainPost__report-right">
                <p className="MainPost__report-text">
                  <span className="MainPost__report-icon">
                    <GppGoodIcon />
                  </span>
                  پیش از بازدید خودرو و اطمینان از صحت مدارک، از پرداخت وجه
                  خودداری نمایید.
                </p>
              </div>
              <div className="MainPost__report-letf">
                <button className="MainPost__report-btn">
                  گزارش اشكال آگهی!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
