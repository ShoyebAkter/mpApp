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
import { useEffect, useState } from "react";
import "./BoxStyle.css";
import { auth } from "../../firebase.init";
import { callApi, getSalesData } from "./getSalesData";
import { useAuthState } from "react-firebase-hooks/auth";
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
  let labels;
  let data;
  useEffect(() => {
    
  }, []);
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
        // console.log(linearRegression(totalSales));
        labels=totalSales.map((sale)=>sale.year);
        data = {
          labels,
          datasets: [
            {
              label: `Sales $`,
              data: totalSales.map((sale) => sale.total),
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
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue",
      },
    },
  };

  

  return (
    <div id="chart" className="boxcontainer border-scoop">
      <div >
      <div className=""></div>
        <div className="content">
          <h1 className="heading"> Business Overview</h1>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default OverviewChart;
