import React from "react";
import "./Analysis.css";
import { xAxisData } from "../../../datas";
import TopBar from "../../../Components/topbar/TopBar";
import SideBar from "../../../Components/sidebar/SideBar";
import SimpleBarChart from "../../../Components/SimpleBarChart/SimpleBarChart";
import AnalysisBox from "../../../Components/analysisBox/AnalysisBox";


export default function Analysis() {
  return (
    <>
      <TopBar />
      <div className="container-1">
        <SideBar />
        <div className="analysis">
          <AnalysisBox />
          <SimpleBarChart grid title="فعالیت " data={xAxisData} dataKey="sale" />
        </div>
      </div>
    </>

  );
}
