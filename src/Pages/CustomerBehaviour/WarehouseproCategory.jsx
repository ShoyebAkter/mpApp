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

const WarehouseproCategory = () => {
    const [clients, setClients] = useState([]);
    // console.log(user.uid)
    useEffect(() => {
        fetch('https://emapp-backend.vercel.app/warehousepro/clientCategory')
            .then((res) => res.json())
            .then((result) => setClients(result))
            .catch((error) => console.error(error))
    }, [])
    console.log(clients);

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
                text: 'Customers',
            },
        },
    };

    const labels =clients.map(client=>client.Category);

    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data:clients.map(client=>client.count),
                borderColor: '#649445',
                backgroundColor: '#649445',
            }
        ],
    };
  return (
    <div>
            <h1 className=' text-xl text-center font-medium text-cyan-500'> Customer Category</h1>
            <Bar options={options} width={500} height={300} data={data1} />
            </div>
  )
}

export default WarehouseproCategory
