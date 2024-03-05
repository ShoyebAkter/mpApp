import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { faker } from '@faker-js/faker';
import { useState } from "react";
import "./BoxStyle.css";
import { auth } from "../../firebase.init";
import { callApi, getSalesData,  } from "./getSalesData";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function OverviewChart() {
  const [totalSales, setTotalSales] = useState([]);
  const salesValue = [];
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  
  let labels;
  let data;
  const switchFunction=()=>{
    switch (user.email) {
      case 'fuad@gmail.com':
        callApi("https://emapp-backend.vercel.app/sales",setTotalSales);
        getSalesData(totalSales,salesValue);
        labels = salesValue.map((sale) => sale.date);
        data = {
          labels,
          datasets: [
            {
              label: `Sales $`,
              data: salesValue.map((sale) => sale.total),
              borderColor: "#649445",
              backgroundColor: "#649445",
            },
          ],
        };
        break;
      case 'warehousepro@gmail.com':
        callApi("https://emapp-backend.vercel.app/warehousepro/sales",setTotalSales);
        totalSales.sort((a, b) => a.year - b.year);
        // console.log(linearRegression(totalSales));
        // console.log()
        // setTotalSales(updateValue(totalSales))
        labels=totalSales.map((sale)=>sale.year);
        data = {
          labels,
          datasets: [
            {
              label: `Sales $`,
              data: totalSales.map((sale) => (sale.total)),
              borderColor: "#649445",
              backgroundColor: "#649445",
            },
          ],
        };
        break;
      default:
        // Handle other cases if needed
        break;
    }
  }
  switchFunction();
  // console.log(totalSales)
  // setTotalSales(updateValue(totalSales))
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `$${(context.parsed.y/1000).toFixed(0)}k`;
            }
            label += ` - Sales in ${labels[context.dataIndex]}`;
            return label;
          },
        },
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue",
        font: {
          size: 14,
          weight: 500 // specify the font size here
        },
      },
    },
    
  };

  

  return (
    <div className="boxcontainer border-scoop">
      <div >
        
          <h1 style={{"background":"#FFFFFF","color":"#439541"}} className="font-bold text-center text-xl  cursor-pointer"  onClick={()=>navigate('/businessoverview')}> Business Overview</h1>
          <Line options={options} height={200} data={data} />
        
      </div>
    </div>
  );
}

export default OverviewChart;
