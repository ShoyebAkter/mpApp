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
import { separateObj } from './facebook';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const UserStatics = ({ setFollowers, setImpression, setEngagement }) => {
    const [permalink, setPermalink] = useState("")
    const fbPostContainer = useRef();
    const [userDetails, setUserDetails] = useState({})

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
        window.FB.XFBML.parse();
    }, []);
    const pageGenderData = separateObj(userDetails)
    // console.log(pageGenderData);
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

    const labels = pageGenderData.maleArray.length !== 0 ? pageGenderData.maleArray.map(obj => Object.keys(obj)[0]) : ["a", "b", "c"]

    const data = {
        labels,
        datasets: [
            {
                label: pageGenderData.maleArray.length !== 0 ? ' MaleDataset ' : 'Dataset 1',
                data: pageGenderData.maleArray.length !== 0 ? pageGenderData.maleArray.map(obj => Object.values(obj)[0]) : [0, 0, 0],
                backgroundColor: 'rgba(27, 24, 24, 0.5)',
            },
            {
                label: pageGenderData.femaleArray.length !== 0 ? 'FemaleDataset' : ' Dataset 1',
                data: pageGenderData.femaleArray.length !== 0 ? pageGenderData.femaleArray.map(obj => Object.values(obj)[0]) : [0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div className='flex justify-around my-10 '>
            <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className='rounded-xl p-5    '>
                {
                    pageGenderData.maleArray.length !== 0
                        ?
                        <Bar options={options} data={data} width={500} height={300} />
                        :
                        <div>You must have 100+ followers to see this graph</div>
                }
            </div>
            <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className='text-black rounded-xl p-5'  >
                <div>
                    {
                        permalink
                            ?
                            <div>
                                <h1 style={{"color":"#439541"}} className='text-3xl font-bold mb-2'>Top Performing Post(FB)</h1>
                                <div
                                    className="fb-post"
                                    ref={fbPostContainer}
                                    data-width="500"
                                ></div>
                            </div>
                            :
                            <FacebookPost setUserDetails={setUserDetails} setEngagement={setEngagement} setImpression={setImpression} setFollowers={setFollowers} setPermalink={setPermalink} />
                    }
                </div>
            </div>
        </div>
    )
}
UserStatics.propTypes = {
    setFollowers: PropTypes.func.isRequired,
    setImpression: PropTypes.func.isRequired,
    setEngagement: PropTypes.func.isRequired,
}