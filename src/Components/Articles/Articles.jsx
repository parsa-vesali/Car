import React from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./Articles.css";
export default function Articles() {
  return (
    <div className="container">
      <div className="article">
        <div className="popularModel__header">
          <div className="popularModel__header-right">
            <h2 className="popularModel__header-title">جدید ترین مقالات</h2>
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
        <div className="article__boxes">
            <div className="article__box">
                <div className="article__box-img">
                    <img src="" alt="article"  />
                </div>
                <div className="article__box-body">
                    <h2 className="article__box-title"></h2>
                    <p className="article__box-subtitle"></p>
                </div>
                <div className="article__box-footer">
                    <div className="article__box-footer-left"></div>
                    <div className="article__box-footer-right"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
