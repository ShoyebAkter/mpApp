
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

export const options = {
  responsive: true,
  
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export function LineChart({firstxLinedata,
  secondxLinedata,
  thirdxLinedata,
  fourthxLinedata}) {
  // console.log(firstxLinedata,firstyLinedata);
   const data = {
    labels,
    datasets: [
      {
        label: '',
        data: firstxLinedata || secondxLinedata|| thirdxLinedata || fourthxLinedata,
        borderColor: '#439541',
        backgroundColor: '#439541',
      },
    ],
  };
  return <Line width={200} options={options} data={data} />;
}
LineChart.propTypes = {
  firstxLinedata:PropTypes.array.isRequired,
  secondxLinedata:PropTypes.array.isRequired,
  thirdxLinedata:PropTypes.array.isRequired,
  fourthxLinedata:PropTypes.array.isRequired,
  firstyLinedata:PropTypes.array.isRequired,
  secondyLinedata:PropTypes.array.isRequired,
  thirdyLinedata:PropTypes.array.isRequired,
  fourthyLinedata:PropTypes.array.isRequired,
  }