import React from "react";
import NavBar from "../../Components/common/NavBar/NavBar";
import Breadcrumb from "../../Components/common/Breadcrumb/Breadcrumb";
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

import { useParams } from "react-router-dom";
import "./MainPost.css";

export default function MainPost() {
  let params = useParams();

  return (
    <>
      <NavBar />
      <div className="container">
        <Breadcrumb page={"خرید خودرو"} />
        <div className="MainPost">
          <div className="MainPost__right">
            <div className="MainPost__header">
              <h2 className="MainPost__title">بنز، کلاس CLS</h2>
              <span className="MainPost__header-icons">
                <ShareIcon />
                <BookmarkAddIcon />
              </span>
            </div>
            <div className="MainPost__Property">
              <p className="MainPost__Property-text">2013</p>
              <p className="MainPost__Property-text">CLS500</p>
            </div>
            <p className="MainPost__date">6 روز پیش</p>
            <div className="MainPost__price-address">
              <p className="MainPost__address">
                تهران / ولنجک
                <LocationOnIcon />
              </p>
              <p className="MainPost__price">توافقی</p>
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
                <a href="#" className="MainPost__seller-link">
                  20 آگهی از این نمایشگاه
                  <WestIcon />
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
                <p className="MainPost__information-text">12,000 km</p>
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
          <div className="MainPost__left"></div>
        </div>
      </div>
    </>
  );
}
