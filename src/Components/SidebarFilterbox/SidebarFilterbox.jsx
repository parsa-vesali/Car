import React, { useState } from "react";
import { Link } from "react-router-dom";
import { brandDatas, cityDatas } from "../../datas";

import { bodyTypeDatas, colorDatas, bodyCondition } from "../../datas";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal from "react-bootstrap/Modal";

import "./SidebarFilterbox.css";

export default function SidebarFilterbox({ sellers, fillterSellers }) {
  const [BodyTypes, setBodyTypes] = useState(bodyTypeDatas);
  const [Colors, setColor] = useState(colorDatas);
  const [bodyConditions, setbodyCondition] = useState(bodyCondition);
  const [mainSeller, setMainSeller] = useState("همه");
  const [lgShow, setLgShow] = useState(false);
  const [lgShowcity, setLgShowcity] = useState(false);
  const [BrandDatas, setBrandDatas] = useState(brandDatas);
  const [cites, setCites] = useState(cityDatas);

  return (
    <div className="sidebarFilterbox">
      <div className="sideBarDilterbox__header">
        <button className="sideBarDilterbox__header-btn">
          <SearchIcon />
          جستجو های من
        </button>
      </div>
      <div className="sideBarDilterbox__wrapper">
        <div className="sideBarDilterbox__wrapper-title">
          <h2>
            <FilterAltIcon />
            فیلتر ها
          </h2>
        </div>
        <div className="filter__box">
          <button className="filter__box-btn" onClick={() => setLgShow(true)}>
            <div className="filter__box-btn-left">
              <h2 className="filter__box-btn-title">برند , مدل</h2>
              <p className="filter__box-btn-subtitle">مشاهده تمام برند ها</p>
            </div>
            <div className="filter__box-btn-right">
              <span className="filter__box-btn-icon">
                <ArrowDropDownIcon />
              </span>
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
        <div className="filter__box">
          <button
            className="filter__box-btn"
            onClick={() => setLgShowcity(true)}
          >
            <div className="filter__box-btn-left">
              <h2 className="filter__box-btn-title"> شهر</h2>
              <p className="filter__box-btn-subtitle"> تمام شهر ها</p>
            </div>
            <div className="filter__box-btn-right">
              <span className="filter__box-btn-icon">
                <ArrowDropDownIcon />
              </span>
            </div>
          </button>
          <Modal
            show={lgShowcity}
            onHide={() => setLgShowcity(false)}
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
                {cites.map((city) => (
                  <Link to={"/"} className="link modal__link">
                    <li className="modal__items">
                      <div className="modal__item-right">{city.title}</div>
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
        <div className="filter__box">
          <h2 className="filter__box-btn-title"> فروشنده</h2>
          <ul className="Seller">
            {sellers.map((seller, index) => (
              <li
                key={index}
                onClick={() => {
                  setMainSeller(seller);
                  fillterSellers(seller);
                }}
                className={
                  seller === mainSeller
                    ? " Seller__item Seller__item-active"
                    : " Seller__item"
                }
              >
                {seller}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter__box">
          <div className="filter__box-price-header">
            <h2 className="filter__box-btn-title">قیمت</h2>
            <span className="filter__box-checkbox">
              <Checkbox
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              اقساطی
            </span>
          </div>
          <div className="filter__box-price-inputs">
            <input
              type="text"
              placeholder="0"
              className="filter__box-price-input"
            />
            <input
              type="text"
              placeholder="3000000+"
              className="filter__box-price-input"
            />
          </div>
        </div>
        <div className="filter__box">
          <div className="filter__box-price-header">
            <h2 className="filter__box-btn-title">سال تولید</h2>
          </div>
          <div className="filter__box-price-inputs">
            <input
              type="text"
              placeholder="از سال"
              className="filter__box-price-input"
            />
            <input
              type="text"
              placeholder="تا سال"
              className="filter__box-price-input"
            />
          </div>
        </div>
        <div className="filter__box">
          <h2 className="filter__box-btn-title">کارکرد</h2>
          <ul className="Seller">
            <li className="Seller__item Seller__item-active">همه</li>
            <li className="Seller__item">صفر</li>
            <li className="Seller__item">کارکرده</li>
          </ul>
          <div className="filter__box-price-inputs">
            <input
              type="text"
              placeholder="0"
              className="filter__box-price-input"
            />
            <input
              type="text"
              placeholder="500,000+"
              className="filter__box-price-input"
            />
          </div>
        </div>
        <div className="filter__box">
          <div className="filter__box-price-header">
            <h2 className="filter__box-btn-title">فقط عکس دار</h2>
            <span className="filter__box-checkbox">
              <Switch />
            </span>
          </div>
        </div>
        <div className="filter__box accordion-box">
          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              نوع بدنه
            </AccordionSummary>
            <AccordionDetails className="AccordionDetails">
              {BodyTypes.map((bodyType) => (
                <span className="filter__box-checkbox">
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />
                  {bodyType.title}
                </span>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filter__box accordion-box">
          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              رنگ بدنه
            </AccordionSummary>
            <AccordionDetails className="AccordionDetails">
              {Colors.map((color) => (
                <span className="filter__box-checkbox" key={color.title}>
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />
                  <span
                    className="color-box"
                    style={{ backgroundColor: color.color }}
                  ></span>
                  {color.title}
                </span>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filter__box accordion-box">
          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              وضغیت بدنه
            </AccordionSummary>
            <AccordionDetails className="AccordionDetails">
              {bodyConditions.map((bodyCondition) => (
                <span className="filter__box-checkbox">
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />

                  {bodyCondition.title}
                </span>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
