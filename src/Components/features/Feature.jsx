import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Feature.css";

export default function Feature() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">درآمد</span>
        <div className="featureContainer">
          <span className="featureMony">$2,415</span>
          <span className="featureRate">
            -11.4 <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="fatureSub">
        نسبت به ماه گذشته
        </span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">فروش</span>
        <div className="featureContainer">
          <span className="featureMony">$4,305</span>
          <span className="featureRate">
            -9.4 <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="fatureSub">
        نسبت به ماه گذشته
        </span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">هزینه</span>
        <div className="featureContainer">
          <span className="featureMony">$1,980</span>
          <span className="featureRate">
            +2.4 <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="fatureSub">
        نسبت به ماه گذشته
        </span>
      </div>
    </div>
  );
}
