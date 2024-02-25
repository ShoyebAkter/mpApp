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
import './BoxStyle.css'
  import { Bar } from 'react-chartjs-2';
import { useAuthState } from 'react-firebase-hooks/auth';
  import {auth} from '../../firebase.init'
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
 
    useEffect(()=>{
      const getEmailCampaignData=()=>{
        fetch(`https://emapp-backend.vercel.app/emailcampaign/${user.uid}`)
        .then(res=>res.json())
        .then(result=>setEmailCampaign(result))
      }
        getEmailCampaignData()
    },[])
    // console.log(emailCampaign)
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
      
      const labels = user.email ==="fuad@gmail.com" ? result.map((campaign)=>campaign.date) : [2014,2015,2016,2017,2018,2019,2020,2021]
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Total email sent',
            data: user.email ==="fuad@gmail.com" ? result.map((campaign)=>campaign.total) : [1,2,3,4,5,6,7,8],
            backgroundColor: '#649445',
          }
        ],
      };
  return (
    <div
      id="chart"
      className="boxcontainer CRborder-scoop p-2 "
    >
      <div className="content">
        <h1 className="heading cursor-pointer"  onClick={()=>navigate('/campaignresult')}> CampaignResult</h1>
        <Bar options={options} height={200} data={data} />
      </div>
    </div>
  )
}
