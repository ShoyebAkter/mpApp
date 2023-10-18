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
import { faker } from '@faker-js/faker';
import { FacebookPost } from './FacebookPost';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { useState } from 'react';

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

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    console.log(permaLink);
    return (
        <div className='flex justify-around my-10'>
            <div className='rounded-xl shadow-lg w-1/3'>
                <Bar options={options} data={data} />
            </div>
            <div className='text-black rounded-xl shadow-2xl w-1/3'>
                <div>
                    {
                        permaLink ?
                            <FacebookProvider appId="231991286544485">
                                <EmbeddedPost href={permaLink.permalink_url} width="500" />
                            </FacebookProvider>
                            // <div>
                            //     <iframe
                            //         title="Facebook Post"
                            //         src={permaLink.permalink_url}
                            //         width="500"
                            //         height="500"
                            //         style={{ border: 'none', overflow: 'hidden' }}
                            //         allowFullScreen
                            //         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            //     ></iframe>
                            // </div>
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
