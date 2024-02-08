import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Slider from "@mui/material/Slider";
import Modal from "react-bootstrap/Modal";
import { brandDatas } from "../../datas";
import "./Filterbox.css";
function valuetext(value) {
  return `${value * 100} میلیون`;
}

export default function Filterbox() {
  const [BrandDatas, setBrandDatas] = useState(brandDatas);
  const [value, setValue] = React.useState([0, 100]);
  const [lgShow, setLgShow] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filterBox">
      <div className="filterBox__container">
        <div className="filterBox__right">
          <button className="filterBox__brand" onClick={() => setLgShow(true)}>
            <div className="filterBox__brand-right">
              <h2 className="filterBox__brand-title">برند ها</h2>
              <p className="filterBox__brand-subtitle">مشاهده تمام برند ها</p>
            </div>
            <div className="filterBox__brand-left">
              <div className="filterBox__brand-icon">
                <ArrowDropDownIcon />
              </div>
            </div>
          </button>
          <Modal
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            className="modal__search"
          >
            <Modal.Body className="modal__body">
              <h2 className="modal__body-title">انتخاب برند و مدل</h2>
              <p className="modal__body-subtitle">
                برند و مدل مورد نظر خود را انتخاب کنید.
              </p>
              <div className="modal__search-box">
                <input
                  type="text"
                  className="modal__input"
                  placeholder="جستجو کنید"
                />
              </div>
              <ul className="modal__list">
                {BrandDatas.map((BrandData) => (
                  <Link to={"/"} className="link modal__link">
                    <li className="modal__items">
                      <div className="modal__item-right">
                        <span className="modal__svg">{BrandData.logoSvg}</span>
                        {BrandData.title}
                      </div>
                      <div className="modal__item-left">
                        <ChevronLeftIcon className="modal__icon" />
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </Modal.Body>
          </Modal>
        </div>
        <div className="filterBox__center">
          <div className="filterBox__ragne">
            <div className="filterBox__range-top">
              <h2 className="filterBox__range-title">قیمت</h2>
              <p className="filterBox__range-text">
                از: {value[0]} میلیون - {value[1]} میلیون
              </p>
            </div>
            <div className="filterBox__rang-input">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </div>
          </div>
        </div>
        <div className="filterBox__left">
          <Link to={"/car"} className="link">
            <button className="app__btn">
              مشاهده آگهی ها
              <ChevronLeftIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
