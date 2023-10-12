import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from "prop-types"
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const LineChart = ({averageOrder}) => {

    // console.log(averageOrder);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Avg Order Value',
            },
        },
    };

    const labels = averageOrder.map((item)=>item.year);

    const data = {
        labels,
        datasets: [
            {
                label: `Avg Order $`,
                data: averageOrder.map((item)=>item.averageTotalPrice),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div className='rounded-xl my-5'>
            <Line width={200} options={options} data={data} />
        </div>
    )
}
LineChart.propTypes = 
    {
        averageOrder:PropTypes.array.isRequired
    }
