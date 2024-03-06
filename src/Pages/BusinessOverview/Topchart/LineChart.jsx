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
export const LineChart = ({averageOrder,totalSales,totalOrder}) => {
    const totalAvg=totalSales/totalOrder;

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
                borderColor: '#294F41',
                backgroundColor:'#294F41',
            }
        ],
    };
    return (
        <div className='rounded-xl my-5'>
        <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl py-5 cursor-pointer">
        Average Order
      </h1>

        <div className="relative w-20 h-20 mx-auto">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    
    <circle
      className="text-gray-200 stroke-current"
      strokeWidth="10"
      
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>
    <circle
      style={{"color":"#294F41"}}
      className=" progress-ring__circle stroke-current"
      strokeWidth="10"
      strokeLinecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      strokeDashoffset="calc(400 - (400 * 45) / 100)"
    ></circle>
    
    <text x="50" y="50" fontFamily="Verdana" fontSize="16" textAnchor="middle" alignmentBaseline="middle">{(totalAvg).toFixed(1)}$</text>

  </svg>
</div>
            <Line width={250} height={200} options={options} data={data} />
        </div>
    )
}
LineChart.propTypes = 
    {
        averageOrder:PropTypes.array.isRequired,
        totalSales:PropTypes.number.isRequired,
        totalOrder:PropTypes.number.isRequired,
        
    }
