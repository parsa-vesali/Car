import React, { useState } from "react";
import Advertisements from "../Advertisements/Advertisements";
import SidebarFilterbox from "../SidebarFilterbox/SidebarFilterbox";
import "./CarSectionMain.css";
import { postDatas } from "../../datas";

const allseller = ["همه", ...new Set(postDatas.map((post) => post.seller))];

export default function CarSectionMain() {
  const [posts, setposts] = useState(postDatas);
  const [sellers, setseller] = useState(allseller);

  const fillterSellers = (seller) => {
    if (seller === "همه") {
      setposts(postDatas);
      return;
    }
    let filterdSellers = postDatas.filter((post) => post.seller === seller);
    setposts(filterdSellers);
  };

  return (
    <>
      <div className="CarSectionMain__header">
        <h2 className="CarSectionMain__header-title">
          خرید خودرو ، فروش خودرو
        </h2>
      </div>
      <div className="CarSectionMain__container">
        <Advertisements posts={posts} />
        <SidebarFilterbox sellers={sellers} fillterSellers={fillterSellers} />
      </div>
    </>
  );
}
