import React from "react";
import WestIcon from "@mui/icons-material/West";
import { Link } from "react-router-dom";

import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound__img">
        <img src="./img/404.png" alt="404" />
      </div>
      <h2 className="NotFound__title">متاسفانه صحفه مورد نظر یافت نشد!</h2>
      <button className="app__btn">
        <Link to={"/"} className="link NotFound__btn">
          بازشگت به صفحه اصلی
          <WestIcon />
        </Link>
      </button>
    </div>
  );
}
