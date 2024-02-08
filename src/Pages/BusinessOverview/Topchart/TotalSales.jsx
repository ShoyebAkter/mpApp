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
            labels=totalSales.map((sale)=>sale.year);
            data = {
              labels,
              datasets: [
                {
                  label: `Sales $`,
                  data: totalSales.map((sale) => sale.total),
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
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total Sales',
            },
        },
    };
    
    

    return (
        <div className='rounded-xl my-5'>
            <Line width={300}
            height={200}
             options={options} 
            data={data}
             />
        </div>
    )
}
