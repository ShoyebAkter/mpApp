import Highcharts from "highcharts/highstock";
import indicators from "highcharts/indicators/indicators";
import trendline from "highcharts/indicators/trendline";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
indicators(Highcharts);
trendline(Highcharts);
const LinearRegChart = () => {
  const [options, setOption] = useState();
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response2 = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/sales"
      );
      const data2 = await response2.json();
      data2.sort((a, b) => a.year - b.year);
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/prediction"
      );
      const data = await response.json();
      data.sort((a, b) => a.year - b.year);
      const newArray = [...data2, ...data];
      setOption({
        chart: {
          type: "line",
          renderTo: "container",
          width: 1200,
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: newArray.map((item) => item.year),
        },

        yAxis: {
          title: {
            text: "Total sales each year",
          },
        },
        credits: {
          enabled: false, // Hide credits
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
          },
        },
        series: [
          {
            id: "mainSeries",
            name: "Year",
            data: data2.map((item) => item.total),
            color: "#6B8E9C",
          },
          {
            id: "SecondSeries",
            data: newArray.map((item) => item.total),
            color: "#659248",
          },
          {
            type: "trendline",
            linkedTo: "mainSeries",
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="middleChart">
      <div className="greenDiv"></div>
      <div className="flex flex-col">
        <div
          style={{ marginLeft: "40%" }}
          className="flex items-center justify-between "
        >
          <h1
            style={{ background: "#FFFFFF", color: "#294F41" }}
            className="font-bold text-center text-2xl  py-5 cursor-pointer"
          >
            Total Sales Prediction Chart
          </h1>
          <div className="circle-container">
            <div
              className="questionMark"
              onClick={() => setShowPopup(!showPopup)}
            >
              ?
            </div>
            {showPopup && (
              <div className="popup">
                The Total Sales Prediction Chart is predicting next two years sales based on previous year sales
              </div>
            )}
          </div>
        </div>

        {<HighchartsReact highcharts={Highcharts} options={options} />}
      </div>
    </div>
  );
};

export default LinearRegChart;
