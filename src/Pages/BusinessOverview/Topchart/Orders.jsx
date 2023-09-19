import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

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
    const resultArray=[];
    useEffect(() => {
        fetch('../../../../orders.json')
            .then(res => res.json())
            .then(result => setOrders(result.orders))
            .catch(error => console.error(error))
    }, [])
    // console.log(orders);
    const getOrdersInfo = () => {
        orders.map((order) => {
            const date = new Date(order.order_date);
            const year = date.getFullYear();
            const obj = {
                year: year,
                totalPrice: order.total_price
            }
            orderData.push(obj)
        })
    }
    getOrdersInfo();
    console.log(orderData);
    const changeArrayValue = () => {

        orderData.forEach((obj) => {
            // Check if an object with the same 'id' property exists in the result array
            const existingObject = resultArray.find((item) => item.year === obj.year);

            if (existingObject) {
                // If it exists, add the 'value' property
                existingObject.totalPrice += obj.totalPrice;
                
            } else {
                // If it doesn't exist, create a new entry in the result array
                resultArray.push({ year: obj.year, totalPrice: obj.totalPrice });
            }
        });
        resultArray.sort((a, b) => a.year - b.year);
        
    }
    
    changeArrayValue()
    console.log(resultArray);
    // console.log(orderData);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total Sales',
            },
        },
    };

    const labels = resultArray.map((array)=>array.year);

    const data = {
        labels,
        datasets: [
            {
                label: `Order $`,
                data: resultArray.map((array)=>array.totalPrice),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div className='rounded-xl my-5'>
            <Line width={200} options={options} data={data} />
        </div>
    )
}
