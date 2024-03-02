import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ProductServiceChart = ({setSelectedProduct}) => {
  const [chartConfig, setChartConfig] = useState(null);
  
  useEffect(() => {
    // Fetch data here, or use any other method to get the data
    const fetchData = async () => {
      try {
        const response = await fetch("https://emapp-backend.vercel.app/warehousepro/productSales");
        const data = await response.json();
        
        const newData = data.map(item => {
          return [
            item.Service,
            item.Total_Sales
          ];
        });
        // console.log(newData)
        // Dynamically create the Highcharts configuration
        const config = {
          chart: {
            type: 'column',
            width: 1200,
            height: 500
          },
          title: {
            text: 'Product & Service Sales',
            style: {
                color: 'green',
                fontWeight:"500",
                fontSize:"24" // Set the desired color here
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
            max: 1000000,
            title: {
              text: '$ in Sales'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: 'Sales in: <b>{point.y:.1f}$</b>'
          },
          credits: {
            enabled: false // Hide credits
          },
          series: [{
            name: 'Sales',
            color:"#649445",
            groupPadding: 0,
            data: newData,
            borderRadius: 15 ,
            point: {
              events: {
                  click: function () {
                    setSelectedProduct(newData[this.category][0])
                       // Log clicked point data
                  }
              }
          }
          }]
        };
  
        // Set the Highcharts configuration outside of the fetch
        setChartConfig(config);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once
  

  return (
    <div>
      {chartConfig && <HighchartsReact options={chartConfig} highcharts={Highcharts} />}
    </div>
  );
};

export default ProductServiceChart;
