import React from "react";
import './SimpleBarChart.css'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function SimpleBarChart({title, data, dataKey, grid }) {
  return (
    <div className="mychart SimpleBarChart">
      <h3 className="charttitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" color="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" strokeWidth={2} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
