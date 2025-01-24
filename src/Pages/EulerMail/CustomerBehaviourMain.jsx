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
import { Customers } from "../CustomerBehaviour/Customers";
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
    const shopify=localStorage.getItem("shopify")
    // console.log(user.uid);
    const tierArray = [];
    useEffect(() => {
        fetch('https://emapp-backend.vercel.app/api/customerdata', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
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
        scales: {
            x: {
              ticks: {
                color:'black'
              },
            },
            y: {
              ticks: {
                color:'black'
              },
            },
          },
    };

    const labels =countedValues ? countedValues.map((value)=>value.value) : ["Gold","Platinum","Silver"];

    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: countedValues ? countedValues.map((value)=>value.count) : [50,30,90],
                borderColor: '#649445',
                backgroundColor: '#649445',
            }
        ],
    };
    return (
        <div  className='customerCHart CBborder-scoop'>
            {
                user.email==="warehousepro@gmail.com"?
                <div>
            <h1 style={{"background":"#FFFFFF","color":"#294F41","width":"300px"}} className="mx-auto font-bold  text-center text-xl  cursor-pointer"> Customer Behaviour</h1>
            <EngageLineChart eulerMail={"eulerMail"}/>
            </div>
                
            :
            <div>
            <h1 style={{"color":"#294F41","width":"300px"}} className="mx-auto font-bold  text-center text-xl mb-8 cursor-pointer"> Customer Behavior</h1>
            { 
                shopify ?
                <Customers/>
                :
                <Bar options={options} data={data1} />
            }
            </div>
            }
        </div>

    )
}

export default CustomerBehaviourMain
