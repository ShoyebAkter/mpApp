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
      const response2 = await fetch("https://emapp-backend.vercel.app/warehousepro/sales");
      const data2 = await response2.json();
      data2.sort((a, b) => a.year - b.year);
      const response = await fetch("https://emapp-backend.vercel.app/warehousepro/prediction");
      const data = await response.json();
      data.sort((a, b) => a.year - b.year);
      const newArray=[...data2,...data]
      setOption({
        chart: {
          type: "line",
          renderTo: "container",
          width: 1200,
        },
        title: {
          text: ""
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories:newArray.map(item=>item.year)
        },
    
        
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
            data: data2.map(item=>item.total),
            color: "blue" 
          },
          {
            id: "SecondSeries",
            data: newArray.map(item=>item.total),
            color: "#649445"
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
    <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl  py-5 cursor-pointer">
        Total Sales Prediction Chart
      </h1>
    { <HighchartsReact  highcharts={Highcharts} options={options} />}
    
    </div>
    </div>
  )
}

export default LinearRegChart
