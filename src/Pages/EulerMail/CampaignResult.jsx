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
import { useAuthState } from 'react-firebase-hooks/auth';
  import {auth} from '../../firebase.init'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
export const CampaignResult = () => {
    const [emailCampaign,setEmailCampaign]=useState([])
    const [user]=useAuthState(auth);
    useEffect(()=>{
        getEmailCampaignData()
    },[])
    const getEmailCampaignData=()=>{
        fetch(`https://emapp-backend.vercel.app/emailcampaign/${user.uid}`)
        .then(res=>res.json())
        .then(result=>setEmailCampaign(result))
      }
      const result = emailCampaign.reduce((acc, campaign) => {
        const existingCampaign = acc.find((item) => item.date === campaign.date);
      
        if (existingCampaign) {
          existingCampaign.total++;
        } else {
          acc.push({ date: campaign.date, total: 1 });
        }
      
        return acc;
      }, []);
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          }
        },
      };
      
      const labels = result.map((campaign)=>campaign.date)
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Total email sent',
            data: result.map((campaign)=>campaign.total),
            backgroundColor: 'rgba(17, 16, 17, 0.5)',
          }
        ],
      };
  return (
    <div style={{ "width": "500px", "height": "350px" }} className='shadow-xl rounded-xl'>
            <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Customer Behaviour</h1>
            <Bar options={options} data={data} />
        </div>
  )
}
