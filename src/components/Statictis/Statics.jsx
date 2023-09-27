import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, XAxis } from "recharts";





  const COLORS = ['#0088FE', '#00C49F'];

  
const Statics = () => {
    const donationCart=JSON.parse(localStorage.getItem('donation'))
    const cartlength= donationCart.length
    const cartnmbr= parseInt(cartlength)


    const [datas,setDatas]=useState([])
    useEffect(()=>{
      fetch('/data.json')
      .then(res=>res.json())
      .then(data=>setDatas(data))
    },[]) 

    const length= (datas.length)
    const nml= parseInt(length)
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
      
      ];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      return (
        <text x={x} y={y}  fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(cartnmbr/nml * 100).toFixed(0)}%` } 
          {`${100-(cartnmbr/nml*100).toFixed(0)}%`}
        </text>
      );
    };
 
    return (
        <div>
            <h1>Welcome to pie chart</h1>
            <PieChart
            width={1349}
            height={550}
            >
              <Pie
               data={data}
               cx="50%"
               cy="50%"
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={80}
               fill="#8884d8"
               
               
              >
                 {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
                
                </Pie> 
              
               <Tooltip /> 
            </PieChart>
        </div>
      );
};

export default Statics;