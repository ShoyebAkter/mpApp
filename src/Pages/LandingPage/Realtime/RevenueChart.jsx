import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Realtime.css";
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [100, 30, 250, 600, 30, 350, 90],
      borderColor: "#439541",
      backgroundColor: "#439541",
    },
    {
      label: "",
      data: [10, 50, 10, 59, 230, 15, 400],
      borderColor: "#649445",
      backgroundColor: "#649445",
    },
  ],
};

export function RevenueChart() {
  return (
    <div >
      <div className="chart-container">
      <Line height={150} width={700} options={options} data={data} />
      </div>
      <div className="mobileViewChart">
      <Line height={150} width={200} options={options} data={data} />
      </div>
    </div>
  );
}
