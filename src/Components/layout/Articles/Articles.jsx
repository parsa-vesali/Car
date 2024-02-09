import React , {useState} from "react";
import {articleDatas} from '../../../datas'
import { Link } from "react-router-dom";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./Articles.css";
export default function Articles() {
  const [articles , setArticles] = useState(articleDatas)
  const getRandomarticles = () => {
    const shuffled = articles.sort(() => 0.3 - Math.random());
    return shuffled.slice(0, 3);
  };
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
           {getRandomarticles().map(article => (
             <div className="article__box">
             <div className="article__box-img">
                 <img src={article.mainImg} alt="article"  />
             </div>
             <div className="article__box-body">
                 <h2 className="article__box-title">{article.title}</h2>
                 <p className="article__box-subtitle">{article.subtitle}</p>
             </div>
             <div className="article__box-footer">
                 <div className="article__box-footer-left">
                   <span className="article__box-footer-date">{article.createdAt}</span>
                 </div>
                 <div className="article__box-footer-right">
                   <span className="article__box-footer-icon"><TurnedInNotIcon /></span>
                 </div>
             </div>
         </div>
           ))}
        </div>
      </div>
    </div>
  );
}
