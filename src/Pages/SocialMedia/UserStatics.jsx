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
import { FacebookPost } from './FacebookPost';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const UserStatics = () => {
    const [permaLink, setPermaLink] = useState("")
    const [fbData,setFbData]=useState([])
    useEffect(()=>{
        getFbData();
    },[])
    const getFbData=()=>{
        fetch(`https://emapp-backend.vercel.app/fbpost`)
        .then(res=>res.json())
        .then(result=>setFbData(result))
        console.log(fbData);
      }
      
      const result = fbData.reduce((acc, campaign) => {
        const existingCampaign = acc.find((item) => item.date === campaign.date);
      
        if (existingCampaign) {
          existingCampaign.total++;
        } else {
          acc.push({ date: campaign.date, total: 1 });
        }
      
        return acc;
      },[]);
    //   console.log(result);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Statics',
            },
        },
    };

    const labels = result.map((campaign)=>campaign.date)

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data:  result.map((campaign)=>campaign.total),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    // console.log(permaLink);
    return (
        <div className='flex justify-around my-10 '>
            <div className='rounded-xl p-5 shadow-lg w-1//3'>
                <Bar options={options} data={data} />
            </div>
            <div className='text-black rounded-xl p-5 shadow-2xl w-1//2'>
                <div>

                    {
                        permaLink ?
                            // <div
                            //     className="fb-post"
                            //     data-width="500"
                            //     data-href={`${permaLink.permalink_url}`}
                            // ></div>
                            <div>
                                <iframe
                                    title="Facebook Post"
                                    src='https://www.facebook.com/122096237306087447/posts/122096157158087447'
                                    width="500"
                                    height="500"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                            :
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <FacebookPost setPermaLink={setPermaLink} />

                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
