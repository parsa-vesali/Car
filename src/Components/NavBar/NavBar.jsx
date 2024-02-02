import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AddIcon from '@mui/icons-material/Add';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BuildIcon from '@mui/icons-material/Build';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
export default function NavBar() {

  return (
   <nav className="nav">
    <div className="container">
        <div className="nav__container">
            <div className="nav__right">
              <a href="#" className="nav__logo link">
                <img src="./img/racing.png" className='nav__logo-img nav__logo-tire' alt="logo" />AR
                    <img src="./img/c.png" alt="logo" className='nav__logo-img' />
                </a>

                <ul className="nav__menu-list">
                    <Link to={'/'} className='link'>
                        <span className='nav__menu-item'>
                            صفحه اصلی
                        </span>
                    </Link>
                    <Link to={'/'} className='link'>
                        <span className='nav__menu-item'>
                             خودرو
                            <KeyboardArrowDownIcon className='nav__menu-icon' />
                            <div className="nav__submenu">
                                <a href="#" className='nav__submneu-item link'>
                                    <DirectionsCarIcon className='nav__submenu-icon' />
                                    خرید خودرو
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <AddIcon className='nav__submenu-icon' />
                                     ثبت آگهی خودرو
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <ShowChartIcon className='nav__submenu-icon' />
                                    قیمت روز خودرو
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <BuildIcon className='nav__submenu-icon' />
                                    مشخصات فنی خودرو
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <NewspaperIcon className='nav__submenu-icon' />
                                    اخبار خودرو
                                </a>
                            </div>
                        </span>
                    </Link>
                    <Link to={'/'} className='link'>
                        <span className='nav__menu-item'>
                            موتورسیکلت
                            <KeyboardArrowDownIcon className='nav__menu-icon' />
                            <div className="nav__submenu">
                                <a href="#" className='nav__submneu-item link'>
                                    <TwoWheelerIcon className='nav__submenu-icon' />
                                    خرید موتورسیکلت
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <AddIcon className='nav__submenu-icon' />
                                     ثبت آگهی موتورسیکلت
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <ShowChartIcon className='nav__submenu-icon' />
                                    قیمت روز موتورسیکلت
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <NewspaperIcon className='nav__submenu-icon' />
                                    اخبار موتورسیکلت
                                </a>
                            </div>
                        </span>
                    </Link>
                    <Link to={'/'} className='link'>
                        <span className='nav__menu-item'>
                           مقالات
                        </span>
                    </Link>
                    <Link to={'/'} className='link'>
                        <span className='nav__menu-item'>
                           درباره ما
                        </span>
                    </Link>
                </ul>
            </div>
            <div className="nav__left">
                <Link to={'/'}  className="nav__account link nav__menu-item">
                    <PersonIcon />
                    حساب کاربری
                    <KeyboardArrowDownIcon />
                    <div className="nav__submenu">
                                <a href="#" className='nav__submneu-item link'>
                                    <FormatListBulletedIcon className='nav__submenu-icon' />
                                   آگهی های من
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <MailOutlineIcon className='nav__submenu-icon' />
                                    لیست پیام ها
                                </a>
                                <a href="#" className='nav__submneu-item link'>
                                    <SettingsIcon className='nav__submenu-icon' />
                                    اطلاعات کاربری
                                </a>
                                <a href="#" className='nav__submneu-item link nav__submenu-item-logout'>
                                    <LogoutIcon className='nav__submenu-icon' />
                                    خروج از حساب
                                </a>
                            </div>
                </Link>
                <Link to={'/'}  className="nav__add-post link">
                    <AddCircleIcon className='nav__add-post-icon' />
                    ثبت آگهی
                </Link>
            </div>
        </div>
    </div>
   </nav>
  )
}
