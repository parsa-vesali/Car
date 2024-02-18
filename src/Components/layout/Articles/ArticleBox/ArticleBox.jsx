import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { articleDatas } from "../../../../datas";
import "./ArticleBox.css";
import { Link } from "react-router-dom";

export default function ArticleBox() {
  const [articles, setArticles] = useState(articleDatas);
  const getRandomarticles = () => {
    const shuffled = articles.sort(() => 0.3 - Math.random());
    return shuffled.slice(0, 3);
  };
  return (
    <div>
      <div className="article__boxes">
        {getRandomarticles().map((article) => (
          <Link to={"/articles"} className="link">
            <div className="article__box">
              <div className="article__box-img">
                <img src={article.mainImg} alt="article" />
              </div>
              <div className="article__box-body">
                <h2 className="article__box-title">{article.title}</h2>
                <p className="article__box-subtitle">{article.subtitle}</p>
              </div>
              <div className="article__box-footer">
                <div className="article__box-footer-left">
                  <span className="article__box-footer-date">
                    {article.createdAt}
                  </span>
                </div>
                <div className="article__box-footer-right">
                  <span className="article__box-footer-icon">
                    <Checkbox
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
