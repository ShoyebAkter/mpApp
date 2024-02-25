import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
const PredictionChart = () => {
    

    const [options,setOption] = useState(  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://emapp-backend.vercel.app/warehousepro/prediction");
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
          renderTo: "container",
          width: 400,
          height:320
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
    
        colors: ["#649445"],
        
        yAxis: {
          title: {
            text: "Predicted Sales"
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
        ]
      })
      

    };

    fetchData();
  }, []);
  return (
    <div>
      <HighchartsReact  highcharts={Highcharts} options={options} />
    </div>
  )
}

export default PredictionChart
