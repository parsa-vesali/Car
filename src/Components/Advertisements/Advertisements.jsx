import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Advertisements.css";

export default function Advertisements({ posts }) {
  const [postDatas , setPostDatas] = useState(posts)
  return (
    <>
      <div className="advertisements">
        {postDatas.map((post) => (
          <div key={post.id} className="advertisements__box">
            <div className="advertisements__box-right">
              <div className="advertisements__box-img">
                <img src={post.mainImg} alt="postimg" />
              </div>
            </div>
            <div className="advertisements__box-left">
              <div className="advertisements__box-text">
                <div className="advertisements__box-titles">
                  <h2 className="advertisements__box-title">{post.title}</h2>
                  <p className="advertisements__box-title-date">{post.date}</p>
                </div>
                <div className="advertisements__box-property">
                  <span className="advertisements__box-Property-text">
                    {post.model}
                  </span>
                  <span className="advertisements__box-Property-text">
                    km {post.km}
                  </span>
                  <span className="advertisements__box-Property-text">
                    {post.gear}
                  </span>
                </div>
                <div className="advertisements__box-seller">
                  <Stack className="Stack" direction="row" spacing={1}>
                    {post.seller === "شخصی" ? (
                      <Chip className="Chip Chip-green" label="شخصی" />
                    ) : (
                      <Chip className="Chip" label="نمایشگاه" color="primary" />
                    )}
                  </Stack>
                </div>
                <div className="advertisements__box-address">
                  <p className="advertisements__box-address-text">
                    <LocationOnIcon />
                    {post.address}
                  </p>
                </div>
              </div>
              <div className="advertisements__box-price">
                <span className="advertisements__box-price-icon">
                  <BookmarkAddIcon />
                </span>
                <p className="advertisements__box-price-text">{post.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="advertisements__mobile">
        {
          posts.map(post => (
            <div className="advertisements__box-mobile">
            <div className="advertisements__box-mobile-right">
              <div className="advertisements__box-text">
                <div className="advertisements__box-titles">
                  <h2 className="advertisements__box-title">{post.title}</h2>
                  <p className="advertisements__box-title-date">{post.date}</p>
                </div>
                <div className="advertisements__box-property">
                  <span className="advertisements__box-Property-text">
                       {post.model}
                  </span>
                  <span className="advertisements__box-Property-text">
                    km {post.km}
                  </span>
                  <span className="advertisements__box-Property-text">
                     {post.gear}
                  </span>
                </div>
                <div className="advertisements__box-seller">
                  <Stack className="Stack" direction="row" spacing={1}>
                    {post.seller === "شخصی" ? (
                      <Chip className="Chip Chip-green" label="شخصی" />
                    ) : (
                      <Chip className="Chip" label="نمایشگاه" color="primary" />
                    )}
                  </Stack>
                </div>
                <div className="advertisements__box-address">
                  <p className="advertisements__box-address-text">
                    <LocationOnIcon />
                    {post.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="advertisements__box-mobile-left">
              <div className="advertisements__box-img">
                <img src={post.mainImg} alt="postimg" />
              </div>
              <p className="advertisements__box-price-text">{post.price}</p>
            </div>
          </div>
          ))
        }

      </div>
    </>
  );
}
