import React from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__aboutUs">
            <h2 className="footer__aboutUs-title">درباره ما</h2>
            <p className="footer__aboutUs-text ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
            </p>
          </div>
          <div className="footer__socials">
            <div className="footer__socials-logo">
              <img src="../img/footer-logo.png" alt="footer-etemad" />
            </div>
            <div className="footer__social-icons">
              <span className="footer__social-icon"><InstagramIcon /></span>
              <span className="footer__social-icon"><TelegramIcon /></span>
              <span className="footer__social-icon"><TwitterIcon /></span>
              <span className="footer__social-icon"><GitHubIcon /></span>
              <span className="footer__social-icon"><WhatsAppIcon /></span>
            </div>
          </div>
          <div className="footer__menus">
            <h2 className="footer__menu-title">دسترسی سریع</h2>
            <div className="footer__menus-container">
            <ul className="footer__menu">
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                 صفحه اصلی
                </li>
              </Link>
              <Link to={'/car'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  خرید خودرو
                </li>
              </Link>
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  تماس با ما
                </li>
              </Link>
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  حساب کاربری
                </li>
              </Link>
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  برند ها
                </li>
              </Link>
            </ul>
            <ul className="footer__menu">
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                 صفحه اصلی
                </li>
              </Link>
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  خرید خودرو
                </li>
              </Link>
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  تماس با ما
                </li>
              </Link>
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  حساب کاربری
                </li>
              </Link>
              <Link to={'/'} className="link">
                <li className="footer__menu-item">
                  <ChevronLeftIcon />
                  برند ها
                </li>
              </Link>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
