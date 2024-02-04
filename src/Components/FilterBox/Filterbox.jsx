import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import './Filterbox.css'
function valuetext(value) {
    return `${value * 100} میلیون`;
  }
  

export default function Filterbox() {
  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filterBox">
    <div className="filterBox__container">
      <div className="filterBox__right">
        <button className="filterBox__brand">
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
      </div>
      <div className="filterBox__center">
        <div className="filterBox__ragne">
          <div className="filterBox__range-top">
            <h2 className="filterBox__range-title">قیمت</h2>
            <p className="filterBox__range-text">از: {value[0]} میلیون - {value[1]} میلیون</p>
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
        <Link to={'/'} className="link">
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
