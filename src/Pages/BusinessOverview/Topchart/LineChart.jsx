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
    const totalAvg=averageOrder.reduce((total, obj) => total + obj.averageTotalPrice, 0);

    // console.log(totalAvg);
    const options = {
        responsive: true,
        
        plugins: {
            tooltip: {
                callbacks: {
                  label: (context) => {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if (context.parsed.y !== null) {
                      label += `$${context.parsed.y.toFixed(2)}`;
                    }
                    label += ` - Avg order in ${labels[context.dataIndex]}`;
                    return label;
                  },
                },
              },
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
                label: `Avg Order`,
                data: averageOrder.map((item)=> item.averageTotalPrice.toFixed(2) ),
                borderColor: '#649445',
                backgroundColor:'#649445',
            }
        ],
    };
    return (
        <div className='rounded-xl my-5'>
        <div className="radial-progress font-bold" style={{"--value":70}} role="progressbar"> {(totalAvg/1000).toFixed(1)}k$</div>
        
            <Line width={300} height={200} options={options} data={data} />
        </div>
    )
}
LineChart.propTypes = 
    {
        averageOrder:PropTypes.array.isRequired
    }
