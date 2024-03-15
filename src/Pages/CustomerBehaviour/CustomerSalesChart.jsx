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
const CustomerSalesChart = ({product}) => {
console.log(product)
    function sumAmountByYear() {
        const result = {};
        
        product.forEach(obj => {
          const year = (new Date(obj.Date_Invoiced)).getFullYear();
          result[year] = (result[year] || 0) + obj.Line_Item_Amount;
        });
        
        return result;
      }
      
      // Function to convert the result into array of objects with year and total amount
      function formatResult(result) {
        return Object.keys(result).map(year => ({ year: parseInt(year), amount: result[year] }));
      }
      
      // Group objects by year and sum Line_Item_Amount
      const sumByYear = sumAmountByYear();
      
      // Format the result into array of objects with year and total amount
      const resultArray = formatResult(sumByYear);
      
      // console.log(resultArray);
    // console.log(product)
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
                    label += ` - Sales in ${labels[context.dataIndex]}`;
                    return label;
                  },
                },
              },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Value',
            },
        },
    };

    const labels = resultArray.map(item=>item.year);

    const data = {
        labels,
        datasets: [
            {
                label: `Total Sales`,
                data: resultArray.map(item=>item.amount),
                borderColor: '#294F41',
                backgroundColor:'#294F41',
            }
        ],
    };
  return (
    <div className='flex justify-center'>
            <Line width={400} height={150} options={options} data={data} />
        </div>
  )
}

export default CustomerSalesChart
CustomerSalesChart.propTypes = {
    product: PropTypes.array.isRequired,
  };