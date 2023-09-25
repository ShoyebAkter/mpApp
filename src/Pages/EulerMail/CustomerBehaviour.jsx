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
    const [customers, setCustomers] = useState([]);
    const tierArray = [];
    useEffect(() => {
        fetch('http://localhost:5000/api/customerdata')
            .then((res) => res.json())
            .then((result) => setCustomers(result))
            .catch((error) => console.error(error))
    }, [])
    console.log(customers);

    const getTierValue = () => {
        customers.map((customer) => {
            Object.keys(customer.tier_and_details).forEach((objKey) => {
                const innerObject = customer.tier_and_details[objKey];
                tierArray.push(innerObject.tier);
                // Object.keys(innerObject).forEach((innerKey) => {
                //   const innerValue = innerObject[innerKey];
                // //   console.log(`  Inner Key: ${innerKey}, Inner Value: ${innerValue}`);
                // });
            });
        })

    }
    getTierValue()
    console.log(tierArray);
    function countDuplicateValues(arr) {
        const countMap = {}; // Object to store counts
        const resultArray = [];

        // Loop through the original array
        for (const value of arr) {
            // Check if the value is already in the countMap
            if (countMap[value] !== undefined) {
                countMap[value]++; // Increment the count
            } else {
                countMap[value] = 1; // Initialize count to 1 for new values
            }
        }

        // Loop through the countMap to create the result array
        for (const value in countMap) {
            if (countMap.hasOwnProperty(value)) {
                resultArray.push({ value: value, count: countMap[value] });
            }
        }

        return resultArray;
    }
    const countedValues = countDuplicateValues(tierArray);

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
