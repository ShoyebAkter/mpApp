
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

import PropTypes from "prop-types"

const EngageLineChart = ({eulerMail}) => {
    const [chartOptions, setChartOptions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/engagement"
      );
      const data = await response.json();
      const invoiceCountsArray = data.map(obj => obj.Invoice_Counts);
        // console.log(data)
      const options = {
        chart:{
            width:500
        },
        title: {
            text: null // Set title text to null to remove the default title
        },
        yAxis: {
            title: {
                text: 'Avg Number of Invoices per client'
            }
        },
        xAxis: {
            title: {
                text: 'Month Since First transaction'
            },
            accessibility: {
                rangeDescription: 'Range: 0 to 200'
            }
        },
        colors: ["#294F41"],
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0
            }
        },
        credits: {
            enabled: false // Hide credits
          },
        series: [{
            name: 'Avg number of invoice per month',
            data: invoiceCountsArray
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
        
    };

      setChartOptions(options);
    };

    fetchData();
  }, []);
  return (
    <div>
    {
        eulerMail==="eulerMail"?<></>
        :
        <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl mb-2 cursor-pointer">WarehousePro Engagement</h1>
    }
    
      <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
        />
    </div>
  )
}

export default EngageLineChart
EngageLineChart.propTypes = 
    {
        eulerMail :PropTypes.string.isRequired,

    }