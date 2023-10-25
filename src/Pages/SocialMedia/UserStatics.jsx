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
import { FacebookPost } from './FacebookPost';
import { useRef } from 'react';
import PropTypes from 'prop-types';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const UserStatics = ({setLikes,setImpression,setEngagement}) => {
    const [permalink, setPermalink] = useState("")
    const [fbData, setFbData] = useState([])
    const fbPostContainer = useRef();

    useEffect(() => {
        if (permalink) {
            // Set the data-href attribute of the container
            fbPostContainer.current.setAttribute('data-href', permalink.permalink_url);

            // Trigger the Facebook SDK to re-scan and render the post
            if (typeof FB !== 'undefined') {
                window.FB.XFBML.parse();
            }
        }
    }, [permalink]);
    useEffect(() => {
        getFbData();
    }, [])
    useEffect(() => {
        window.FB.XFBML.parse();
    }, []);


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
    console.log(permalink);
    return (
        <div className='flex justify-around my-10 '>
            <div className='rounded-xl p-5 shadow-lg w-1//3'>
                <Bar options={options} data={data} />
            </div>
            <div className='text-black rounded-xl p-5 shadow-2xl '  >
                <div>
                    {
                        permalink 
                            ?
                            <div
                                className="fb-post"
                                ref={fbPostContainer}
                                data-width="500"
                            ></div>
                            :
                            <FacebookPost setEngagement={setEngagement} setImpression={setImpression} setLikes={setLikes} setPermalink={setPermalink} />
                    }
                </div>
            </div>
        </div>
    )
}
UserStatics.propTypes = {
    setLikes:PropTypes.func.isRequired,
    setImpression:PropTypes.func.isRequired,
    setEngagement:PropTypes.func.isRequired,
  }