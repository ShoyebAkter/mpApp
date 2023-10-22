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
    useEffect(() => {
        window.FB.XFBML.parse();
        checkSubtree();
    }, []);
    const checkSubtree = () => {
        const targetNode = document.querySelector('.fb-page');
      
        if (targetNode) {
          const config = { childList: true, subtree: true };
      
          const callback = (mutationsList, observer) => {
            mutationsList.forEach((mutation) => {
              if (mutation.type === 'childList') {
                const listValues = Array.from(targetNode.children)
                  .map((node) => node.innerHTML)
                  .filter((html) => html !== '<br>');
                console.log(listValues);
              }
            });
          };
      
          const observer = new MutationObserver(callback);
          observer.observe(targetNode, config);
        } else {
          console.error("Target node not found. Make sure the element with class 'fb-page' exists.");
        }
      };
      
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
                        permaLink.permalink_url 
                        ?
                        <div className="fb-page" data-href="https://www.facebook.com/104214722785328" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/104214722785328" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/104214722785328">My Page</a></blockquote></div>
                            :
                            <FacebookPost setPermaLink={setPermaLink} />
                    }
                    </div>
            </div>
        </div>
    )
}
