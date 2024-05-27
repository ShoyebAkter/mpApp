import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';
import { FaEye } from "react-icons/fa";

const ImpressionChart = () => {
    const fbPageImpression=useSelector((state)=>state.counter.fbPageImpression);
    const youtubeViews2=useSelector((state)=>state.counter.youtube_total_views);
    const youtubeViews=parseInt(youtubeViews2)
    // console.log(parseInt(fbFollowers))
    const options = {
        chart: {
          type: 'column',
          width:500,
          height: 500
        },
        title: {
          text: '',
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
        credits: {
          enabled: false // Hide credits
        },
        series: [
          {
            name: 'Impression',
            data: [fbPageImpression ? fbPageImpression : 0,
              260,
              170,
              630,
              youtubeViews ? youtubeViews :0 ],
            color: "#2a4e40",
              borderRadius: 15,
              groupPadding: 0,
          },
          
        ]
      };
  return (
    <div>
    <div
        style={{ color: "#40E0D0" }}
        className=" flex gap-3 justify-center items-center font-bold"
      >
        <span className="">
          <FaEye size={36} />
        </span>
        <span style={{ color: "#6b6b6b" }}>Impressions</span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default ImpressionChart
