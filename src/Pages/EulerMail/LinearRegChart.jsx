import Highcharts from "highcharts/highstock";
import indicators from "highcharts/indicators/indicators";
import trendline from "highcharts/indicators/trendline";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import PredictionChart from "../BusinessOverview/PredictionChart";
indicators(Highcharts);
trendline(Highcharts);
const LinearRegChart = () => {
  const [options,setOption] = useState(  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://emapp-backend.vercel.app/warehousepro/sales");
      const data = await response.json();

      
      setOption({
        chart: {
          type: "line",
          renderTo: "container",
          width: 1000,
        },
        title: {
          text: ""
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories:data.map(item=>item.year)
        },
    
        colors: ["#649445"],
        
        yAxis: {
          title: {
            text: "Total sales each year"
          }
        },
        credits: {
          enabled: false // Hide credits
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: [
          {
            id: "mainSeries",
            name: "Year",
            data: data.map(item=>item.total)
          },
          {
            type: "trendline",
            linkedTo: "mainSeries"
          }
        ]
      })
      

    };

    fetchData();
  }, []);

  return (
    <div className="middleChart">
    <div className="greenDiv"></div>
    <div className="flex flex-col">
    { <HighchartsReact  highcharts={Highcharts} options={options} />}
    <PredictionChart/>
    </div>
    </div>
  )
}

export default LinearRegChart
