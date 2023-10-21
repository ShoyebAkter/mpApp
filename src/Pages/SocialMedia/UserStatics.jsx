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
import { FacebookEmbed } from 'react-social-media-embed';
import { useEffect, useState } from 'react';
import { FacebookPost } from './FacebookPost';
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
    const [fbData, setFbData] = useState([])
    useEffect(() => {
        getFbData();
    }, [])

    const getFbData = () => {
        fetch(`https://emapp-backend.vercel.app/fbpost`)
            .then(res => res.json())
            .then(result => setFbData(result))
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
    }, []);
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

    const labels = result.map((campaign) => campaign.date)

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: result.map((campaign) => campaign.total),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    console.log(permaLink);
    return (
        <div className='flex justify-around my-10 '>
            <div className='rounded-xl p-5 shadow-lg w-1//3'>
                <Bar options={options} data={data} />
            </div>
            <div className='text-black rounded-xl p-5 shadow-2xl ' >
                <div>
                    {
                        permaLink ?
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <FacebookEmbed  url={permaLink.permalink_url} width={550} />
                            </div>
                            :
                            <FacebookPost setPermaLink={setPermaLink} />
                    }
                    {/* <div className="fb-page"
                        data-href="https://www.facebook.com/facebook"
                        data-width="380"
                        data-tabs="timeline"
                        data-hide-cover="false"
                        data-adapt-container-width="true"
                        data-show-facepile="false"></div> */}
                    {/* <div className="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/20531316728/posts/10154009990506729/" className="fb-xfbml-parse-ignore">Posted by <a href="https://facebook.com/facebook">Facebook</a> on&nbsp;<a href="https://www.facebook.com/20531316728/posts/10154009990506729/">Thursday, August 27, 2015</a></blockquote></div> */}
                </div>
            </div>
        </div>
    )
}
