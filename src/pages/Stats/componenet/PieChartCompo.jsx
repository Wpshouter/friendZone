import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";



const COLORS = ["#7E39F6", "#00C49F", "#FFBB28"]; // pick any colors you like

const PieChartCompo = ({data}) => {
    return (
      <div className=" bg-white p-7 shadow-md rounded">
        <p className="text-emerald-900 text-md font-semibold">By Interaction Type</p>
        <div className="text-center flex justify-center">
     <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={80}   // creates the donut hole
        outerRadius={100}  // controls thickness
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend className="rounded-full" verticalAlign="bottom"  height={36} />
    </PieChart>
        </div>
        </div>
    );
};

export default PieChartCompo;