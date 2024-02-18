import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);
const WarehouseproCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [activeButton, setActiveButton] = useState(0); // Default active button is 2
  const [firstNumber, setFirstNumber] = useState(0);
  const [lastNum, setLastNum] = useState(10);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    setFirstNumber(10 * buttonNumber);
    setLastNum(10 * (buttonNumber + 1));
    console.log(firstNumber, lastNum);
  };
  useEffect(() => {
    fetch("https://emapp-backend.vercel.app/warehousepro/percentSales")
      .then((res) => res.json())
      .then((result) => setCustomers(result))
      .catch((error) => console.error(error));
  }, []);
  // console.log(customers.slice(0, 10))
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Customers",
      },
    },
  };

  const labels = customers
    .slice(firstNumber, lastNum)
    .map((value) => value.name);
  console.log(customers.slice(firstNumber, lastNum).map((value) => value.name));
  const data1 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: customers.slice(firstNumber, lastNum).map((value) => value.value),
        borderColor: "#649445",
        backgroundColor: "#649445",
      },
    ],
  };
  return (
    <div className="boxcontainer SMborder-scoop p-2">
      
      <div>
        <h1 className="heading mb-5"> High-Value Clients</h1>
        <Bar width={450} height={250} options={options} data={data1} />
      </div>
      <div className="join">
        {[0, 1, 2, 3, 4, 5, 6, 7,8,9,10].map((number) => (
          <button
            key={number}
            className={`join-item btn btn-xs ${
              activeButton === number ? "btn-active" : ""
            }`}
            onClick={() => handleButtonClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WarehouseproCustomer;
