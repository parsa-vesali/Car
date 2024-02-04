import React, { useState } from "react";
import { Link } from "react-router-dom";
import { populaModelDatas } from "../../datas";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./PopularModel.css";

export default function PopularModel() {
  const [popularDatas, setPopularDatas] = useState(populaModelDatas);

  const getRandomImages = () => {
    const shuffled = popularDatas.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  return (
    <div className="container">
      <div className="popularModel">
        <div className="popularModel__header">
          <div className="popularModel__header-right">
            <h2 className="popularModel__header-title">محبوبترین مدل‌ها</h2>
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
        <div className="popularModel__images">
          {getRandomImages().map((popularData) => (
            <img
              src={popularData.srcImg}
              alt="popularImg"
              key={popularData.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
