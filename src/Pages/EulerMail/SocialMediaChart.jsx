import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function SocialMediaChart() {
    const [fbData,setFbData]=useState([])

    useEffect(()=>{
        fetch(`https://emapp-backend.vercel.app/fbpost`)
        .then(res=>res.json())
        .then(result=>setFbData(result))
    },[])
    const result = fbData.reduce((acc, campaign) => {
        const existingCampaign = acc.find((item) => item.date === campaign.date);
      
        if (existingCampaign) {
          existingCampaign.total++;
        } else {
          acc.push({ date: campaign.date, total: 1 });
        }
      
        return acc;
      }, []);
      console.log(result);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    const labels =result.map(res=>res.date);

    const data = {
        labels,
        datasets: [
            {
                label: 'Facebook Post Dataset',
                data:result.map(res=>res.total),
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