import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddIcon from "@mui/icons-material/Add";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BuildIcon from "@mui/icons-material/Build";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__container">
            <div className="nav__right">
              <a href="#" className="nav__logo link">
                <img
                  src="./img/racing.png"
                  alt="logo"
                  className="nav__logo-img"
                />
                <span>C</span>AR
              </a>

              <ul className="nav__menu-list">
                <Link to={"/"} className="link">
                  <span className="nav__menu-item">صفحه اصلی</span>
                </Link>
                <Link to={"/car"} className="link">
                  <span className="nav__menu-item">
                    خودرو
                    <KeyboardArrowDownIcon className="nav__menu-icon" />
                    <div className="nav__submenu">
                      <Link
                        to={"./car"}
                        className="link nav__submneu-item link"
                      >
                        <DirectionsCarIcon className="nav__submenu-icon" />
                        خرید خودرو
                      </Link>
                      <a href="#" className="nav__submneu-item link">
                        <AddIcon className="nav__submenu-icon" />
                        ثبت آگهی خودرو
                      </a>
                      <a href="#" className="nav__submneu-item link">
                        <ShowChartIcon className="nav__submenu-icon" />
                        قیمت روز خودرو
                      </a>
                      <a href="#" className="nav__submneu-item link">
                        <BuildIcon className="nav__submenu-icon" />
                        مشخصات فنی خودرو
                      </a>
                      <a href="#" className="nav__submneu-item link">
                        <NewspaperIcon className="nav__submenu-icon" />
                        اخبار خودرو
                      </a>
                    </div>
                  </span>
                </Link>
                <Link to={"/"} className="link">
                  <span className="nav__menu-item">
                    موتورسیکلت
                    <KeyboardArrowDownIcon className="nav__menu-icon" />
                    <div className="nav__submenu">
                      <a href="#" className="nav__submneu-item link">
                        <TwoWheelerIcon className="nav__submenu-icon" />
                        خرید موتورسیکلت
                      </a>
                      <a href="#" className="nav__submneu-item link">
                        <AddIcon className="nav__submenu-icon" />
                        ثبت آگهی موتورسیکلت
                      </a>
                      <a href="#" className="nav__submneu-item link">
                        <ShowChartIcon className="nav__submenu-icon" />
                        قیمت روز موتورسیکلت
                      </a>
                      <a href="#" className="nav__submneu-item link">
                        <NewspaperIcon className="nav__submenu-icon" />
                        اخبار موتورسیکلت
                      </a>
                    </div>
                  </span>
                </Link>
                <Link to={"/"} className="link">
                  <span className="nav__menu-item">مقالات</span>
                </Link>
                <Link to={"/"} className="link">
                  <span className="nav__menu-item">درباره ما</span>
                </Link>
              </ul>
            </div>
            <div className="nav__left">
              <Link to={"/login"} className="nav__account link nav__menu-item">
                <PersonIcon />
                حساب کاربری
                <KeyboardArrowDownIcon />
                <div className="nav__submenu">
                  <a href="#" className="nav__submneu-item link">
                    <FormatListBulletedIcon className="nav__submenu-icon" />
                    آگهی های من
                  </a>
                  <a href="#" className="nav__submneu-item link">
                    <MailOutlineIcon className="nav__submenu-icon" />
                    لیست پیام ها
                  </a>
                  <a href="#" className="nav__submneu-item link">
                    <SettingsIcon className="nav__submenu-icon" />
                    اطلاعات کاربری
                  </a>
                  <a
                    href="#"
                    className="nav__submneu-item link nav__submenu-item-logout"
                  >
                    <LogoutIcon className="nav__submenu-icon" />
                    خروج از حساب
                  </a>
                </div>
              </Link>
              <Link to={"/"} className="nav__add-post link">
                <AddCircleIcon className="nav__add-post-icon" />
                ثبت آگهی
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* NAV MOBILE */}
      <nav className="nav-mobile">
        <div className="nav-mobile__menu">
          <div
            className="nav__mobile-menu-icon"
            onClick={() => setShowMenu(!showMenu)}
          >
            <MenuIcon />
          </div>

          <div
            className={`nav-mobile__list ${
              showMenu ? "nav-mobile__list-active" : ""
            }`}
          >
            <div className="nav-mobile__list-top">
              <Link to={"/"} className="nav__logo link">
                <img
                  src="./img/racing.png"
                  alt="logo"
                  className="nav__logo-img"
                />
                <span>C</span>AR
              </Link>
              <span
                className="nav-mobile__icon"
                onClick={() => setShowMenu(false)}
              >
                <CloseIcon />
              </span>
            </div>

            <div className="nav-mobile__submenu">
              <Link to={"/car"} className="link nav__submneu-item link">
                <DirectionsCarIcon className="nav__submenu-icon" />
                خرید خودرو
              </Link>
              <a href="#" className="nav__submneu-item link">
                <AddIcon className="nav__submenu-icon" />
                ثبت آگهی خودرو
              </a>
              <a href="#" className="nav__submneu-item link">
                <ShowChartIcon className="nav__submenu-icon" />
                قیمت روز خودرو
              </a>
              <a href="#" className="nav__submneu-item link">
                <BuildIcon className="nav__submenu-icon" />
                مشخصات فنی خودرو
              </a>
              <a href="#" className="nav__submneu-item link">
                <NewspaperIcon className="nav__submenu-icon" />
                اخبار خودرو
              </a>
            </div>

            <div className="nav-mobile__list-btns">
              <Link to={"/"} className="nav__add-post link">
                <AddCircleIcon className="nav__add-post-icon" />
                ثبت آگهی
              </Link>
              <br />
              <Link to={"/login"} className="nav__add-post link">
                <PersonIcon className="nav__add-post-icon" />
                حساب کاربری
              </Link>
            </div>

            <div className="nav-mobile__list-social">
              <span className="nav-mobile__sicial-icon">
                <InstagramIcon />
              </span>
              <span className="nav-mobile__sicial-icon">
                <TelegramIcon />
              </span>
              <span className="nav-mobile__sicial-icon">
                <GitHubIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="nav-mobile__logo">
          <a href="#" className="nav__logo link">
            <img src="./img/racing.png" alt="logo" className="nav__logo-img" />
            <span>C</span>AR
          </a>
        </div>

        <div className="nav-mobile__add-post">
          <Link to={"/"} className="nav__add-post link">
            <AddCircleIcon className="nav__add-post-icon" />
            ثبت آگهی
          </Link>
        </div>
      </nav>
      {showMenu && (
        <div className="overlay" onClick={() => setShowMenu(false)}></div>
      )}
    </>
  );
}
