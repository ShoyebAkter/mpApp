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
          width: 1200,
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
    
        colors: ["Blue","#649445"],
        
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
          {
            id: "SecondSeries",
            name: "Year",
            data: data2.map(item=>item.total)
          },
        ]
      })
      

    };

    fetchData();
  }, []);
  return (
    <div>
    <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl mb-2 cursor-pointer">
        Total Sales Prediction Chart
      </h1>
      <HighchartsReact  highcharts={Highcharts} options={options} />
    </div>
  )
}

export default PredictionChart
