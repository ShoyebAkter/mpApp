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
import { FacebookEmbed } from 'react-social-media-embed';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const UserStatics = () => {
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
    return (
        <div className='flex justify-around my-10'>
            <div className='rounded-xl shadow-lg w-1/3'>
                <Bar options={options} data={data} />
            </div>
            <div className='text-black rounded-xl shadow-2xl w-1/3'>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={550} />
                    </div>
                </div>
            </div>
        </div>
    )
}
