import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from "prop-types"
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import { useEffect, useState } from 'react';
import { callApi } from '../EulerMail/getSalesData';
const MeanChart = ({chartType}) => {
    const [orderData,setData]=useState([])

    useEffect(()=>{
        callApi("https://emapp-backend.vercel.app/warehousepro/orders",setData)
    },[])
    // console.log(data)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: chartType ==="mean" ? 'Mean Value Chart' :'Median Value Chart',
            },
        },
    };

    const labels = orderData.map((item)=>item.year);

    const data = {
        labels,
        datasets: [
            {
                label:chartType ==="mean" ? 'Mean Value' :'Median Value',
                data: chartType ==="mean" ? orderData.map((item)=> item.mean.toFixed(2) ) :orderData.map((item)=> item.median.toFixed(2) ),
                borderColor: '#649445',
                backgroundColor:'#649445',
            }
        ],
    };

      return <div className='rounded-xl my-5'>
      <Line width={400} height={200} options={options} data={data} />
  </div>;
}

export default MeanChart
MeanChart.propTypes = 
    {
        chartType:PropTypes.string.isRequired
    }