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
import { getDuplicate } from "./getDuplicate";
import { getTierValue } from "../CustomerBehaviour/getTierValue";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);


function CustomerBehaviour() {
    const [customers, setCustomers] = useState([]);
    // console.log(user.uid);
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
                text: 'Customers',
            },
        },
    };

    const labels =countedValues.map((value)=>value.value);

    const data1 = {
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
        <div style={{ "width": "500px", "height": "350px" , "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className=' p-2  rounded-xl'>
            <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Customer Behaviour</h1>
            <Bar options={options} data={data1} />
        </div>

    )
}

export default CustomerBehaviour
