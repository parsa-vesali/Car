import React from 'react'
import Feature from '../../../Components/features/Feature'
import Chart from '../../../Components/chart/Chart'
import WidgetLg from '../../../Components/widgetLg/WidgetLg'
import { xAxisData } from '../../../datas'
import './Home.css'
export default function HomeAdmin() {
  return (
    <div className='home'>
      <Feature />
      <Chart grid title="فروش ماهانه" data={xAxisData} dataKey="sale" />

      <div className="homeWidgest">
        <WidgetLg />
      </div>
    </div>
  )
}
