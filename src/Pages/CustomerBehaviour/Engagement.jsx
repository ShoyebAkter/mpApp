import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Engagement = () => {

    useEffect(() => {
        // Set Highcharts to use accessibility module
        Highcharts.setOptions({
          accessibility: {
            enabled: true,
            rangeDescription: 'Customer Engagement '
          }
        });
      }, []);
    
      const options = {
        title: {
          text: 'Customer Engagement Rate',
          align: 'left',
          style: {
            color: '#2a4e40', // Change color as desired
            fontSize: '24px' // Change font size as desired
          }
        },
        subtitle: {
          text: null,
          align: 'left'
        },
        yAxis: {
          title: {
            text: 'Number of orders'
          }
        },
        xAxis: {
          accessibility: {
            rangeDescription: 'Range: Year 2010 to 2020'
          }
        },
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
            pointStart: 2010
          }
        },
        series: [
            {
              name: 'Installation & Developers',
              data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
              color: '#649445' // Custom color for the first series
            },
            {
              name: 'Manufacturing',
              data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050],
              color: '#00FF00' // Custom color for the second series
            },
            {
              name: 'Sales & Distribution',
              data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663],
              color: '#2a4e40' // Custom color for the third series
            },
            {
              name: 'Operations & Maintenance',
              data: [null, null, null, null, null, null, null, null, 11164, 11218, 10077],
              color: '#FF00FF' // Custom color for the fourth series
            },
            {
              name: 'Other',
              data: [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073],
              color: '#FFFF00' // Custom color for the fifth series
            }
          ],
          
        responsive: {
          rules: [
            {
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
            }
          ]
        }
      };
    
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Engagement
