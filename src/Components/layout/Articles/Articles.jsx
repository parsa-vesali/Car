import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArticleBox from "./ArticleBox/ArticleBox";
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
        <ArticleBox  />
      </div>
    </div>
  );
}
