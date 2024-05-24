// import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = () => {
    const data = [
      { name: "1", clicks: 0 },
      { name: "2", clicks: 4 },
      { name: "3", clicks: 2 },
      { name: "4", clicks: 1 },
      { name: "5", clicks: 5 },
      { name: "6", clicks: 12 },
      { name: "7", clicks: 6 },
      { name: "8", clicks: 6 },
      { name: "9", clicks: 3 },
      { name: "10", clicks: 10 },
      { name: "11", clicks: 20 },
      { name: ".", clicks: 21 },
      { name: ".", clicks: 18 },
      { name: ".", clicks: 17 },
      { name: "30", clicks: 20 },
    ];


    return (
        <LineChart width={450} height={350} data={data} className='mt-16 w-96'>
            {/* <CartesianGrid strokeDasharray="1 1" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
    );
};

export default Chart;