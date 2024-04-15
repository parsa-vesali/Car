import React from 'react'
import LineCharts from '../../../Components/lineChart/LineChart'
import TopBar from "../../../Components/topbar/TopBar";
import SideBar from "../../../Components/sidebar/SideBar";
import './Sale.css'
export default function Sale() {
  return (
    <>
      <TopBar />
      <div className="container-1">
        <SideBar />
        <div className='sale'>
          <LineCharts />
        </div>
      </div>
    </>
  )
}
