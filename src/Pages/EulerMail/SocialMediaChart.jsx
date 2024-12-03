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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
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
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://emapp-backend.vercel.app/fbpost/${user.uid}`)
      .then((res) => res.json())
      .then((result) => setFbData(result));
  }, []);
  const result = fbData?.reduce((acc, campaign) => {
    const existingCampaign = acc.find((item) => item.date === campaign.date);

    if (existingCampaign) {
      existingCampaign.total++;
    } else {
      acc.push({ date: campaign.date, total: 1 });
    }

    return acc;
  }, []);
  // console.log(result);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "Social Media",
      //   color: '#294F41',
      //   font: {
      //     size: 14,
      //     family: 'Montserrat',
          
      //     weight: 700 // specify the font size here
      //   },
      // },
    },
    scales: {
      x: {
        ticks: {
          color:'black'
        },
      },
      y: {
        ticks: {
          color:'black'
        },
      },
    },
  };

  const labels =
    user.email === "fuad@gmail.com"
      ? result.map((res) => res.date)
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data:
          user.email === "fuad@gmail.com"
            ? result.map((res) => res.total)
            : [30, 10, 40, 50, 80, 20, 90],
        backgroundColor: "#659148",
        borderRadius: 20,
      },
    ],
  };
  return (
    <div className="boxcontainer SMborder-scoop p-2 ">
      <div>
        <h1 style={{"background":"#FFFFFF","color":"#294F41","width":"300px"}} className="mx-auto font-bold text-center text-xl  cursor-pointer"
          
          onClick={() => navigate("/socialmedia")}
        >
          SocialMedia
        </h1>
        <div className="flex justify-around my-2">
          <div
            style={{ backgroundColor: "#2a4e40" }}
            className="text-white text-xs py-1 px-3 rounded-xl text-center"
          >
            Accounts Reached
            <div className="text-xs">2</div>
          </div>
          <div
            style={{ backgroundColor: "#2a4e40" }}
            className="text-white text-xs py-1  px-3 rounded-xl text-center"
          >
            Accounts Engaged
            <div className="text-xs">2</div>
          </div>
        </div>
        <Bar options={options} height={200} data={data} />
      </div>
    </div>
  );
}

export default SocialMediaChart;
