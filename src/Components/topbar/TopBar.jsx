import React from "react";
import "./TopBar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <span>پنل </span> مدیریت
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Link className="link" to={'/'}>
              <LogoutIcon />
            </Link>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img className="topbarAvatar" src="./img/img-1.jfif" alt="" />
        </div>
      </div>
    </div>
  );
}
