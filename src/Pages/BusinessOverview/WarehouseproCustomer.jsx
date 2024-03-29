import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const WarehouseproCustomer = () => {
  
  const [chartConfig, setChartConfig] = useState(null);
  useEffect(() => {
    // Fetch data here, or use any other method to get the data
    const fetchData = async () => {
      try {
        const response = await fetch("https://emapp-backend.vercel.app/warehousepro/percentSales");
        const data = await response.json();
        data.sort((a, b) => b.value - a.value);
        // Example data
        const newData = data.slice(0,50).map(item => {
          return [
            item.name,
            parseInt(item.value.toFixed(1))
          ];
        });
        // console.log(newData)
        // Dynamically create the Highcharts configuration
        const config = {
          chart: {
            type: 'column',
            width: 1200
          },
          title: {
            text: 'High Value Clients',
            style: {
                color: 'green',
                fontWeight: '500' // Set the desired color here
              }
          },
          xAxis: {
            type: 'category',
            labels: {
              autoRotation: [-45, -90],
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            min: 0,
            max: 1000,
            title: {
              text: '$ in Value'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: 'High Value : <b>{point.y:.1f}$</b>'
          },
          credits: {
            enabled: false // Hide credits
          },
          series: [{
            name: 'Value',
            color:"#649445",
            groupPadding: 0,
            data: newData,
            borderRadius: 15 
          }]
        };
        
        // Set the Highcharts configuration outside of the fetch
        setChartConfig(config);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); 
  return (
    <div>
      {<HighchartsReact options={chartConfig} highcharts={Highcharts} />}
    </div>
  );
};

export default WarehouseproCustomer;
