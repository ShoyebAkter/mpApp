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
import { useState } from "react";
import { changeArrayValue, getOrdersInfo } from "./topchart";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../../firebase.init";
import { callApi } from "../../EulerMail/getSalesData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const orderData = [];
  const resultArray = [];
  const [user] = useAuthState(auth);
  let labels;
  let data, totalOrders;
  // console.log(orders);
  const switchFunction = () => {
    switch (user.email) {
      case "fuad@gmail.com":
        callApi("https://emapp-backend.vercel.app/api/data", setOrders);
        getOrdersInfo(orders, orderData);
        // console.log(orderData);

        changeArrayValue(orderData, resultArray);
        labels = resultArray.map((array) => array.year);
        data = {
          labels,
          datasets: [
            {
              label: `Order $`,
              data: resultArray.map((array) => array.totalPrice),
              borderColor: "#649445",
              backgroundColor: "#649445",
            },
          ],
        };
        break;
      case "warehousepro@gmail.com":
        callApi(
          "https://emapp-backend.vercel.app/warehousepro/orders",
          setOrders
        );
        totalOrders = orders.reduce((total, obj) => total + obj.order, 0);
        orders.sort((a, b) => a.year - b.year);
        labels = orders.map((order) => order.year);
        data = {
          labels,
          datasets: [
            {
              label: `Orders `,
              data: orders.map((order) => order.order),
              borderColor: "#659248",
              backgroundColor: "#659248",
            },
          ],
        };
        break;
      default:
        // Handle other cases if needed
        break;
    }
  };
  switchFunction();
  // console.log(resultArray);
  // console.log(orderData);
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
              label += `${context.parsed.y.toFixed(0)} number of`;
            }
            label += ` -order  in ${labels[context.dataIndex]}`;
            return label;
          },
        },
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Orders",
      },
    },
  };

  return (
    <div className="rounded-xl my-5">
      <div className="flex items-center justify-center gap-10 ">
        <h1
          style={{ background: "#FFFFFF", color: "#294F41" }}
          className="font-bold text-center text-2xl py-5 cursor-pointer"
        >
          Total Orders
        </h1>
        <div className="circle-container">
          <div
            className="questionMark"
            onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
          >
            ?
          </div>
          {showPopup && (
            <div className="popup">
              The Total Orders Chart is the total order of each year.
            </div>
          )}
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
            {totalOrders / 1000}k
          </text>
        </svg>
      </div>

      <Line width={250} height={200} options={options} data={data} />
    </div>
  );
};
