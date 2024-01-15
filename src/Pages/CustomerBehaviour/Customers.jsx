import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useState } from "react";
import { getDuplicate } from "../EulerMail/getDuplicate";
import { getTierValue } from "./getTierValue";
import './CustomerBehaviour.css'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);


export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const tierArray = [];
  useEffect(() => {
    fetch('https://emapp-backend.vercel.app/api/customerdata')
      .then((res) => res.json())
      .then((result) => setCustomers(result))
      .catch((error) => console.error(error))
  }, [])
  // console.log(customers);

  
  getTierValue(customers,tierArray)
  // console.log(tierArray);
  
  const countedValues = getDuplicate(tierArray);

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: `Customers: ${customers.length}`,
      },
    },
  };

  const labels = countedValues.map((value)=>value.value);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: countedValues.map((value)=>value.count),
        borderColor: '#649445',
        backgroundColor: '#649445',
      }
    ],
  };
  return (
    <div className="customerChartdiv">
      <Bar options={options} data={data} />
    </div>

  )
}
