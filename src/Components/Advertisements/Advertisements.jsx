import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Advertisements.css";

export default function Advertisements() {
  return (
    <div className="advertisements">
      <div className="advertisements__box">
        <div className="advertisements__box-right">
          <div className="advertisements__box-img">
            <img src="./img/posts/post-2.webp" alt="postimg" />
          </div>
        </div>
        <div className="advertisements__box-left">
          <div className="advertisements__box-text">
            <div className="advertisements__box-titles">
              <h2 className="advertisements__box-title">بنز، کلاس E</h2>
              <p className="advertisements__box-title-date">لحظاتی پیش</p>
            </div>
            <div className="advertisements__box-property">
              <span className="advertisements__box-Property-text">2012</span>
              <span className="advertisements__box-Property-text">km 170,000 </span>
              <span className="advertisements__box-Property-text">E300</span>
            </div>
            <div className="advertisements__box-seller">
              <Stack className="Stack" direction="row" spacing={1}>
                {/* <Chip className="Chip" label="نمایندگی" color="primary" /> */}
                <Chip className="Chip" label="شخصی" color="success" />
              </Stack>
            </div>
            <div className="advertisements__box-address">
              <p className="advertisements__box-address-text">
                <LocationOnIcon />
                تهران,سعادت آباد
              </p>
            </div>
          </div>
          <div className="advertisements__box-price">
            <span className="advertisements__box-price-icon"><BookmarkAddIcon /></span>
            <p className="advertisements__box-price-text"> ت 2,550,000,000</p>
          </div>
        </div>
      </div>
      <div className="advertisements__box">
        <div className="advertisements__box-right">
          <div className="advertisements__box-img">
            <img src="./img/posts/post-1.webp" alt="postimg" />
          </div>
        </div>
        <div className="advertisements__box-left">
          <div className="advertisements__box-text">
            <div className="advertisements__box-titles">
              <h2 className="advertisements__box-title">بنز، کلاس E</h2>
              <p className="advertisements__box-title-date">لحظاتی پیش</p>
            </div>
            <div className="advertisements__box-property">
              <span className="advertisements__box-Property-text">2012</span>
              <span className="advertisements__box-Property-text">km 170,000 </span>
              <span className="advertisements__box-Property-text">E300</span>
            </div>
            <div className="advertisements__box-seller">
              <Stack className="Stack" direction="row" spacing={1}>
                <Chip className="Chip" label="نمایندگی" color="primary" />
                {/* <Chip label="نمایشگاهی" color="success" /> */}
              </Stack>
            </div>
            <div className="advertisements__box-address">
              <p className="advertisements__box-address-text">
                <LocationOnIcon />
                تهران,سعادت آباد
              </p>
            </div>
          </div>
          <div className="advertisements__box-price">
            <span className="advertisements__box-price-icon"><BookmarkAddIcon /></span>
            <p className="advertisements__box-price-text"> ت 2,550,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
