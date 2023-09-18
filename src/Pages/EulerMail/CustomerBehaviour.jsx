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


function CustomerBehaviour() {
    const roleValue=[];
    const [user,setUser]=useState([])
    useEffect(()=>{
      fetch('../../../User.json').
      then((res)=>res.json())
      .then((result)=>setUser(result.User))
    },[user])
console.log(user);
    const getRoleValue=()=>{
        
        const user2=user.filter(item=>item.role==="user").length;
        const admin=user.filter(item=>item.role==="admin").length;
        const superAdmin=user.User.filter(item=>item.role==="superadmin").length;
        roleValue.push(user2,admin,superAdmin)
        console.log(user);
    }
    // getRoleValue()


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

    const labels = ['Admin', 'SuperAdmin', 'User'];

    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: roleValue,
                borderColor: 'rgb(15, 177, 42)',
                backgroundColor: 'rgba(60, 236, 16, 0.87)',
            }
        ],
    };
    return (
        <div style={{ "width": "500px", "height": "350px" }} className='shadow-xl rounded-xl'>
            <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Customer Behaviour</h1>
            <Bar options={options} data={data1} />
        </div>

    )
}

export default CustomerBehaviour
