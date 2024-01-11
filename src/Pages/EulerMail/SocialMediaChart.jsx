import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SocialMediaChart() {
  const [fbData, setFbData] = useState([]);

  useEffect(() => {
    fetch(`https://emapp-backend.vercel.app/fbpost`)
      .then((res) => res.json())
      .then((result) => setFbData(result));
  }, []);
  const result = fbData.reduce((acc, campaign) => {
    const existingCampaign = acc.find((item) => item.date === campaign.date);

    if (existingCampaign) {
      existingCampaign.total++;
    } else {
      acc.push({ date: campaign.date, total: 1 });
    }

    return acc;
  }, []);
  console.log(result);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = result.map((res) => res.date);

  const data = {
    labels,
    datasets: [
      {
        label: "Facebook Post Dataset",
        data: result.map((res) => res.total),
        backgroundColor: "#649445",
      },
    ],
  };
  return (
    <div id="chart" className="boxcontainer p-2 bg-white">
      <div className="inner">
        <i className="top left"></i>
        <div className="content">
          <h1 className="heading">SocialMedia</h1>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default SocialMediaChart;
