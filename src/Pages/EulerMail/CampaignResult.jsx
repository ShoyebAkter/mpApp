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
        scales: {
          x: {
            ticks: {
              color:'black'
            },
          },
          y: {
            ticks: {
              color:'black'
            },
          },
        },
      };
      
      const labels = user.email ==="fuad@gmail.com" ? result.map((campaign)=>campaign.date) : ["Jan","Feb","Mar","April","May","June","July","Aug","Sep"]
      
      const data = {
        labels,
        datasets: [
          {
            label: "",
            data: user.email ==="fuad@gmail.com" ? result.map((campaign)=>campaign.total) : [10,30,20,60,70,80,25,45,50],
            backgroundColor: '#659148',
            borderRadius: 15,
          }
        ],
      };
      ChartJS.defaults.color="white"
  return (
    <div
      className="boxcontainer CRborder-scoop p-2 "
    >
        <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-xl  cursor-pointer"  onClick={()=>navigate('/campaignresult')}> Campaign Result</h1>
        <Bar options={options} height={200} data={data} />
      
    </div>
  )
}
