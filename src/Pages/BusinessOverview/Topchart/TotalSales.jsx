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
export const TotalSales = () => {
    const [totalSales, setTotalSales] = useState([]);
    const salesValue = [];
    const resultArray = [];
    useEffect(() => {
        fetch('https://emapp-backend.vercel.app/sales')
            .then(res => res.json())
            .then(result => setTotalSales(result))
            .catch(error => console.error(error))
    }, [])
    // console.log(totalSales);

    const getSalesData = () => {
        totalSales.map((sale) => {

            const year = new Date(sale.sale.$date.$numberLong * 1000).getFullYear();

            const sales = sale.items.map((item) => {
                const price = item.price.$numberDecimal;
                const quantity = item.quantity.$numberInt;
                const totalPrice = parseInt(price) * parseInt(quantity);
                return totalPrice;
            })
            let sum = 0;
            for (let i = 0; i < sales.length; i++) {
                sum = sum + sales[i];
            }

            const obj = {
                year: year,
                total: sum
            }
            salesValue.push(obj)
        })

    }
    getSalesData()
    console.log(salesValue);
    const changeArrayValue = () => {
        
        salesValue.forEach((obj) => {
            // Check if an object with the same 'id' property exists in the result array
            const existingObject = resultArray.find((item) => item.year === obj.year);

            if (existingObject) {
                // If it exists, add the 'value' property
                existingObject.total += obj.total;
            } else {
                // If it doesn't exist, create a new entry in the result array
                resultArray.push({ year: obj.year, total: obj.total });
            }
        });
        resultArray.sort((a, b) => a.year - b.year);
        // console.log(resultArray);
    }
    changeArrayValue()
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
                label: `Sales $`,
                data: resultArray.map((array)=>array.total),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div className='rounded-xl my-5'>
            <Line width={200}
             options={options} 
            data={data}
             />
        </div>
    )
}
