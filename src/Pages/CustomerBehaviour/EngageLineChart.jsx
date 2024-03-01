
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';



const EngageLineChart = () => {
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
        title: {
            text: 'WarehousePro Engagement',
            align: 'center',
            style: {
                fontSize: '14px',
                color:'cyan' // Adjust the font size as needed
            }
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
        colors: ["#649445"],
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
            name: 'Warehousepro Client',
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
      <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
        />
    </div>
  )
}

export default EngageLineChart
