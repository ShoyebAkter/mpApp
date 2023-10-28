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
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function SocialMediaChart() {
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    const labels = ["facebook", "Google", "Amazon"];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div style={{ "width": "500px", "height": "350px" }} id="chart" className='shadow-xl rounded-xl'>
            
                        <h1 className='text-black text-xl text-center font-medium text-cyan-500'>Social Media</h1>
                        <Bar options={options} data={data} />
                   
        </div>
    )
}

export default SocialMediaChart