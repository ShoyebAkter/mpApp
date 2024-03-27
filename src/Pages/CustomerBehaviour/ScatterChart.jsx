import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ScatterChart = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/longevity"
      );
      const data = await response.json();

      const series = [
        {
          name: "Warehousepro",
          id: "Warehousepro",
          marker: { symbol: "triangle" },
        },
      ];

      const getData = () => {
        const temp = [];
        data.forEach((elm) => {
          temp.push([ elm.Client_Longevity_Months,elm.Line_Item_Amount,elm.name]);
        });
        return temp;
      };

      series.forEach((s) => {
        s.data = getData(s.id);
      });

      const options = {
        chart: {
          type: "scatter",
          zoomType: "xy",
          height: 400,
          width:600
        },
        title: {
          text:null
        },
        xAxis: {
          title: { text: "Longevity" },
          labels: { format: "{value} month" },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
        },
        colors: ["#457048"],
        yAxis: {
          title: { text: "Total" },
          labels: { format: "{value} " },
        },
        legend: { enabled: true },
        plotOptions: {
          scatter: {
            marker: {
              radius: 2.5,
              symbol: "circle",
              states: {
                hover: { enabled: true, lineColor: "rgb(100,100,100)" },
              },
            },
            states: { hover: { marker: { enabled: false } } },
            jitter: { x: 0.005 },
            events: {
              click: function (event) {
                  console.log('Clicked point:', event.point);
                  // Add your custom logic here
              }
          }
          },
        },
        tooltip: {
          pointFormat: "Client Longevity: {point.x} month <br/>Client Total Amount: {point.y} ",
        },
        credits: {
          enabled: false // Hide credits
        },
        series,
      };

      setChartOptions(options);
    };

    fetchData();
  }, []);

  return (
    <div>
    <div  className="flex items-center justify-center gap-20 ">
    <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl mb-3 cursor-pointer">Client Longevity vs total amount</h1>
    
    <div className="circle-container">
      <div
        className="questionMark"
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >?</div>
      {showPopup && <div className="popup">This is the chart for Client Longevity vs total amount</div>}
    </div>
      </div>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
};

export default ScatterChart;
