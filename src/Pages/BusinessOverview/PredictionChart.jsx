import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
const PredictionChart = () => {
    

    const [options,setOption] = useState(  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://emapp-backend.vercel.app/warehousepro/prediction");
      const data = await response.json();
      const response2=await fetch("https://emapp-backend.vercel.app/warehousepro/sales");
      const data2 = await response2.json();
      const newArray=[...data2,...data]
    //   console.log(newArray)
      let years = [];
      let totals = [];
      newArray.map((item) => {
        years.push(item.year);
        totals.push(item.total);
      });
      setOption({
        chart: {
          type: "line",
          renderTo: "container",
          width: 1000,
          height:320
        },
        title: {
          text: "Predicted Sales Value"
        },
        credits: {
            enabled: false // Hide credits
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
