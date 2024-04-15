import React from "react";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";

import { Link } from "react-router-dom";
import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                صفحه اصلی
              </li>
            </Link>
            <Link to="/analysis" className="link">
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                تجزیه و تحلیل
              </li>
            </Link>
            <Link to="/sale" className="link">
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                فروش
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
