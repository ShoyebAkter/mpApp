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
import {  useState } from "react";
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
  const orderData = [];
  const resultArray = [];
  const [user] = useAuthState(auth);
  let labels;
  let data;
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
        labels = orders.map((order) => order.year);
        data = {
          labels,
          datasets: [
            {
              label: `Sales $`,
              data: orders.map((order) => order.order),
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
  };
  switchFunction();
  // console.log(resultArray);
  // console.log(orderData);
  const options = {
    responsive: true,
    plugins: {
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
      <Line width={200} options={options} data={data} />
    </div>
  );
};
