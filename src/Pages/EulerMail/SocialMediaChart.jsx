import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function SocialMediaChart() {
    const fbAmount = [];
    const googleAmount = [];
    const amazonAmount = [];
    const totalValue=[];
    const [sales, setSales] = useState([])
    useEffect(() => {
        fetch('../../../Sales.json').
            then((res) => res.json())
            .then((result) => setSales(result.sales))
    }, [])
    
    const getValue = () => {
        sales.map((item) => {
            item.transactions.map((transaction) => {
                
                if (transaction.symbol === "fb") {
                    fbAmount.push(Math.ceil(transaction.total))
                    // console.log("fb",Math.ceil(transaction.total));
                }else if (transaction.symbol === "amzn") {
                    amazonAmount.push(Math.ceil(transaction.total))
                    // console.log("amazon",Math.ceil(transaction.total));
                }
                else if (transaction.symbol === "goog") {
                    googleAmount.push(Math.ceil(transaction.total))
                    // console.log(Math.ceil(transaction.total));
                }
               
                // 
                // const object={
                //   year:year,
                //   amount:Math.ceil(transaction.total)
                // }
                // transactions.push(object);
            })
        })
    }
    const addValue=()=>{
        let fbtotalValue=0;
        let amazontotalValue=0;
        let googletotalValue=0;
        fbAmount.forEach((singleAmount)=>{fbtotalValue+=singleAmount})
        googleAmount.forEach((singleAmount)=>{googletotalValue+=singleAmount})
        amazonAmount.forEach((singleAmount)=>{amazontotalValue+=singleAmount})
        totalValue.push(fbtotalValue,googletotalValue,amazontotalValue);
        // return fbtotalValue,googletotalValue,amazontotalValue;
    }
    getValue();
    
    addValue();
    // console.log(totalValue);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    const labels =["facebook","Google","Amazon"];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: totalValue,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div style={{ "width": "500px", "height": "350px" }} id="chart" className='shadow-xl rounded-xl'>
            <h1 className='text-black text-xl text-center font-medium text-cyan-500'>Social Media</h1>
            <Bar options={options} data={data} />
        </div>
    )
}

export default SocialMediaChart