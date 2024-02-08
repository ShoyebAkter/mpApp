import Highcharts from "highcharts/highstock";
import indicators from "highcharts/indicators/indicators";
import trendline from "highcharts/indicators/trendline";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
indicators(Highcharts);
trendline(Highcharts);
const LinearRegChart = () => {
  const [options,setOption] = useState(  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://emapp-backend.vercel.app/warehousepro/sales");
      const data = await response.json();

      let years = [];
      let totals = [];
      data.map((item) => {
        years.push(item.year);
        totals.push(item.total);
      });
      setOption({
        chart: {
          type: "line",
          renderTo: "container"
        },
        title: {
          text: ""
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories:years
        },
    
        colors: ["#00FF00"],
    
        yAxis: {
          title: {
            text: "Total sales each year"
          }
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
            data: totals
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
    { <HighchartsReact  highcharts={Highcharts} options={options} />}
    
    </div>
  )
}

export default LinearRegChart
