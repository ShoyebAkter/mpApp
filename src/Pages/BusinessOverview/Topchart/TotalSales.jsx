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
import { auth } from "../../../firebase.init";
import PropTypes from "prop-types"
import { Line } from "react-chartjs-2";
import { useState } from "react";
import "./topchart.css";
import {
  callApi,
  changeArrayValue,
  getSalesData,
} from "../../EulerMail/getSalesData";
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
export const TotalSales = ({totalSalesData}) => {
  const [totalSales, setTotalSales] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const salesValue = [];
  const resultArray = [];
  const [user] = useAuthState(auth);
  const shopify=localStorage.getItem("shopify")
  let data, labels;
  let Sales;
  const switchFunction = () => {
    switch (user.email) {
      case "fuad@gmail.com":
        callApi("https://emapp-backend.vercel.app/sales", setTotalSales);
        getSalesData(totalSales, salesValue);
        changeArrayValue(salesValue, resultArray);
        labels = resultArray.map((array) => array.year);
        data = {
          labels,
          datasets: [
            {
              label: `Sales $`,
              data: resultArray.map((array) => array.total),
              borderColor: "#649445",
              backgroundColor: "#649445",
            },
          ],
        };
        break;
      case "warehousepro@gmail.com":
        callApi(
          "https://emapp-backend.vercel.app/warehousepro/sales",
          setTotalSales
        );
        Sales = totalSales.reduce((total, obj) => total + obj.total, 0);
        totalSales.sort((a, b) => a.year - b.year);
        //  console.log(Sales)
        labels = totalSales.map((sale) => sale.year);
        data = {
          labels,
          datasets: [
            {
              label: `Sales `,
              data: totalSales.map((sale) => (sale.total / 1000).toFixed(2)),
              borderColor: "#659248",
              backgroundColor: "#659248",
            },
          ],
        };
        break;
      default:
        if(shopify){
          Sales = totalSalesData.reduce((total, obj) => total + obj.total, 0);
        }
        // console.log(Sales)
        labels = shopify ? totalSalesData.map(sale=>sale.year) : [2014,2015,2016,2017,2018];
        data = {
          labels,
          datasets: [
            {
              label: `Sales `,
              data:shopify ? totalSalesData.map(sale=>sale.total) : [10829,103984,209384,102934,303928],
              borderColor: "#659248",
              backgroundColor: "#659248",
            },
          ],
        };
        break;
    }
  };
  // console.log(totalSalesData);

  switchFunction();
  // console.log(salesValue)
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `$${context.parsed.y.toFixed(2)}k`;
            }
            label += ` Sales in ${labels[context.dataIndex]}`;
            return label;
          },
        },
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Sales",
      },
    },
  };
  
  ChartJS.defaults.color = '#555';
  // {(Sales/1000000).toFixed(2)}m$
  // console.log(Sales)
  return (
    <div className="rounded-xl my-5">
      <div className="flex items-center justify-center gap-10 ">
      <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl py-5 cursor-pointer">
        Total Sales
      </h1>
      <div className="circle-container">
      <div
        className="questionMark"
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >?</div>
      {showPopup && <div className="popup">The Total Sales Chart is the sales of each year.</div>}
    </div>
      </div>
      <div className="relative w-20 h-20 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            style={{ color: "#457048" }}
            className=" progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDashoffset="calc(400 - (400 * 45) / 100)"
          ></circle>

          <text
            x="50"
            y="50"
            fontFamily="Verdana"
            fontSize="16"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            ${Sales > 1000000 ?(Sales / 1000000).toFixed(2) : Sales}  {Sales > 1000000 ?"m" : ''}
          </text>
        </svg>
      </div>
      {/* <h1 className='font-bold '>Total Sales:</h1> */}
      <Line
      width={shopify ? 350 : 250}
        height={200} options={options} data={data} />
    </div>
  );
};

TotalSales.propTypes = 
    {
      totalSalesData:PropTypes.array.isRequired,
        
    }
