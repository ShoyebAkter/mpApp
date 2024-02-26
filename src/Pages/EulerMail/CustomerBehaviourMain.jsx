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
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../../firebase.init'
import EngageLineChart from "../CustomerBehaviour/EngageLineChart";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);


function CustomerBehaviourMain() {
    const [customers, setCustomers] = useState([]);
    const [user]=useAuthState(auth)
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
        <div  className='customerCHart CBborder-scoop'>
            {
                user.email==="fuad@gmail.com"?
                <div>
            <h1 className=' text-xl text-center font-medium text-cyan-500 cursor-pointer'> Customer Behaviour</h1>
            <Bar options={options} data={data1} />
            </div>
            :
            <div>
            <h1 className=' text-2xl text-center font-medium text-cyan-200 cursor-pointer'> Customer Behaviour</h1>
            <EngageLineChart/>
            </div>
            }
        </div>

    )
}

export default CustomerBehaviourMain
