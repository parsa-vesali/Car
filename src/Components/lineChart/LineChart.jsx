import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";
import { datasChrt } from "../../datas";
import "./LineChart.css";

export default function LineCharts() {
  return (
    <div className="linechartContainer">
      <h3 className="linechartTitle">فروش</h3>
      <LineChart
        className="lineChart"
        width={900}
        height={300}
        data={datasChrt}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="month" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="benz"
          stroke="#2196f3"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="bmw"
          stroke="#ffca29"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="volvo"
          stroke="#f44236"
          strokeWidth={3}
        />
        <Tooltip />
      </LineChart>
    </div>
  );
}
