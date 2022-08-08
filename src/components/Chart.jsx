import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Chart = (props) => {

const data = [];

// console.log(props.arrayToSort.length);

for (var i = 0; i < props.arrayToSort.length; i++) {
  var index = i;
  var temp = {
    name: index,
    value: props.arrayToSort[i]
  }
  data.push(temp);
}

// console.log(data);

  return (
    <div style={{maxWidth: "100vw"}}>
    <BarChart
      width={props.arrayToSort.length * 20 >= 500 ? props.arrayToSort.length * 20 : 500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
    </div>
  )
}

export default Chart