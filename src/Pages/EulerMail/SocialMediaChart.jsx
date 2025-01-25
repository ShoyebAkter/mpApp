import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../CustomerBehaviour/shopifyLogic";

function SocialMediaChart() {
  const [chartOptions, setChartOptions] = useState(null);
  const [fbData, setFbData] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChartData = async () => {
      await fetchData(
        `https://emapp-backend.vercel.app/fbpost/${user.uid}`,
        setFbData
      );

      const result = fbData?.reduce((acc, campaign) => {
        const existingCampaign = acc.find((item) => item.date === campaign.date);

        if (existingCampaign) {
          existingCampaign.total++;
        } else {
          acc.push({ date: campaign.date, total: 1 });
        }

        return acc;
      }, []);

      const labels =
        user.email === "fuad@gmail.com"
          ? result.map((res) => res.date)
          : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      const seriesData =
        user.email === "fuad@gmail.com"
          ? result.map((res) => res.total)
          : [30, 10, 40, 50, 80, 20, 90];

      const options = {
        chart: {
          type: "column",
          height: 350
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: labels,
          title: {
            text: null,
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: null,
          },
          labels: {
            overflow: "justify",
          },
        },
        tooltip: {
          valueSuffix: "",
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            },
            borderRadius: 5, // Rounded bar corners
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Data",
            data: seriesData,
            color: "#659148",
            borderRadius: 15,
          },
        ],
        credits: {
          enabled: false, // Disable the Highcharts watermark
        },
      };

      setChartOptions(options);
    };

    fetchChartData();
  }, [user]);

  return (
    <div className="boxcontainer SMborder-scoop p-2">
      <div>
        <h1
          style={{ background: "#FFFFFF", color: "#294F41", width: "300px" }}
          className="mx-auto font-bold text-center text-xl cursor-pointer"
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
            className="text-white text-xs py-1 px-3 rounded-xl text-center"
          >
            Accounts Engaged
            <div className="text-xs">2</div>
          </div>
        </div>
        {chartOptions && (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )}
      </div>
    </div>
  );
}

export default SocialMediaChart;
