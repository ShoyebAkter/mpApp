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
import { auth } from "../../../firebase.init";
import { Line } from 'react-chartjs-2';
import {  useState } from 'react';
import { callApi, changeArrayValue, getSalesData } from '../../EulerMail/getSalesData';
import { useAuthState } from 'react-firebase-hooks/auth';
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
    const [user] = useAuthState(auth);
    let data,labels;
    let Sales;
    const switchFunction=()=>{
        switch (user.email) {
          case 'fuad@gmail.com':
            callApi("https://emapp-backend.vercel.app/sales",setTotalSales);
            getSalesData(totalSales,salesValue);
            changeArrayValue(salesValue,resultArray)
            labels =  resultArray.map((array)=>array.year);
            data = {
                labels,
                datasets: [
                    {
                        label: `Sales $`,
                        data: resultArray.map((array)=>array.total),
                        borderColor: '#649445',
                        backgroundColor: '#649445',
                    }
                ],
            };
            break;
          case 'warehousepro@gmail.com':
            callApi("https://emapp-backend.vercel.app/warehousepro/sales",setTotalSales);
             Sales = totalSales.reduce((total, obj) => total + obj.total, 0);
             totalSales.sort((a, b) => a.year - b.year);
            //  console.log(Sales)
            labels=totalSales.map((sale)=>sale.year);
            data = {
              labels,
              datasets: [
                {
                  label: `Sales `,
                  data: totalSales.map((sale) => (sale.total/1000).toFixed(2)),
                  borderColor: "#649445",
                  backgroundColor: "#649445",
                },
              ],
            };
            break;
          default:
            // Handle other cases if needed
            break;
        }
      }
    // console.log(salesValue);
    
    switchFunction();
    // console.log(salesValue)
    const options = {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += `$${context.parsed.y.toFixed(2)}k`;
                }
                label += ` Sales in ${labels[context.dataIndex]}`;
                return label;
              },
            },
          },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total Sales',
            },
        },
    };
    
    
    // console.log(Sales)
    return (
        <div className='rounded-xl my-5'>
        <div className="radial-progress font-bold" style={{"--value":70}} role="progressbar"> {(Sales/1000000).toFixed(2)}m$</div>
        {/* <h1 className='font-bold '>Total Sales:</h1> */}
            <Line width={300}
            height={200}
             options={options} 
            data={data}
             />
        </div>
    )
}
