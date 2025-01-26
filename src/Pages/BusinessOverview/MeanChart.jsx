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
import PropTypes from "prop-types";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
const MeanChart = ({ chartType }) => {
  const [orderData, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    callApi("https://emapp-backend.vercel.app/warehousepro/orders", setData);
  }, []);
  orderData.sort((a, b) => a.year - b.year);
  const totalMedian = orderData
    .map((item) => item.median)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // console.log(totalMedian)
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
              label += `$${context.parsed.y.toFixed(2)}`;
            }
            label += ` Sales in ${labels[context.dataIndex]}`;
            return label;
          },
        },
      },
      datalabels: {
        display: false, // Disable data labels (if you're using the DataLabels plugin)
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          chartType === "mean"
            ? "Sales Mean Value Chart"
            : "Sales Median Value Chart",
      },
    },
  };

  const labels = orderData.map((item) => item.year) ;

  const data = {
    labels,
    datasets: [
      {
        label: chartType === "mean" ? "Mean Value" : "Median Value",
        data:
          chartType === "mean"
            ? orderData.map((item) => item.mean.toFixed(2))
            : orderData.map((item) => item.median.toFixed(2)),
        borderColor: "#659248",
        backgroundColor: "#659248",
      },
    ],
  };

  return (
    <div className="rounded-xl my-5">
      <div className="flex items-center justify-center gap-10 ">
        <h1
          style={{ background: "#FFFFFF", color: "#294F41" }}
          className="font-bold text-center text-2xl py-5 cursor-pointer"
        >
          Sales Median Chart
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
              The Sales median is the number of orders averaged without taking
              excentric peaks factored into the calculation.
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
            fontWeight="700"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            ${(totalMedian/11).toFixed(1)}
          </text>
        </svg>
      </div>
      <Line width={250} height={150} options={options} data={data} />
    </div>
  );
};

export default MeanChart;
MeanChart.propTypes = {
  chartType: PropTypes.string.isRequired,
};
