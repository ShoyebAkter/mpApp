
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



export function LineChart({firstxLinedata,firstyLinedata,
  secondxLinedata,secondyLinedata,
  thirdxLinedata,thirdyLinedata,
  fourthxLinedata,fourthyLinedata
}) {
  // console.log(firstxLinedata,firstyLinedata);
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: firstxLinedata || secondxLinedata|| thirdxLinedata || fourthxLinedata,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: firstyLinedata || secondyLinedata || thirdyLinedata || fourthyLinedata,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
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