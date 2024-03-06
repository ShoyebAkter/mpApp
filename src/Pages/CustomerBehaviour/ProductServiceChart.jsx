import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from "prop-types"
const ProductServiceChart = ({setSelectedProduct}) => {
  const [chartConfig, setChartConfig] = useState(null);
  
  useEffect(() => {
    // Fetch data here, or use any other method to get the data
    const fetchData = async () => {
      try {
        const response = await fetch("https://emapp-backend.vercel.app/warehousepro/productSales");
        const data = await response.json();
        const sortedArray=data.sort((a, b) => b.Total_Sales - a.Total_Sales);
        // console.log(sortedArray)
        const newData = sortedArray.map(item => {
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
            text: null,
            
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
            color:"#294F41",
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
    <div className='mt-3'>
    <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl py-4">Product & Service</h1>
      {chartConfig && <HighchartsReact options={chartConfig} highcharts={Highcharts} />}
    </div>
  );
};

export default ProductServiceChart;
ProductServiceChart.propTypes = 
    {
      setSelectedProduct :PropTypes.func.isRequired,

    }