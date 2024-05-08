import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

const ImpressionChart = () => {
    const fbPageImpression=useSelector((state)=>state.counter.fbPageImpression);
    // console.log(parseInt(fbFollowers))
    const options = {
        chart: {
          type: 'column',
          width:500,
          height: 500
        },
        title: {
          text: 'Impression',
          align: 'center'
        },
        
        xAxis: {
          categories: ['FB', 'Insta', 'Linkedin', 'Tiktok', 'Youtube'],
          crosshair: true,
          accessibility: {
            description: 'Countries'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Impression Of last 28 days'
          }
        },
        tooltip: {
          valueSuffix: ' '
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Impression',
            data: [fbPageImpression ? fbPageImpression : 0, 260, 170, 630, 250],
            color: "#659248",
              borderRadius: 15,
              groupPadding: 0,
          },
          
        ]
      };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default ImpressionChart
