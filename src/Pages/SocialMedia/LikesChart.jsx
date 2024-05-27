import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { BsChatSquareHeartFill } from "react-icons/bs";


const LikesChart = () => {

    const fbPageLikes = useSelector((state) => state.counter.fbPageLikes);
    const youtubeLikes2 = useSelector((state) => state.counter.youtube_likes);
    const youtubeLikes=parseInt(youtubeLikes2)
    const options = {
        chart: {
          type: "column",
          width: 500,
          height: 500,
        },
        title: {
          text: "",
          align: "center",
        },
    
        xAxis: {
          categories: ["FB", "Insta", "Linkedin", "Tiktok", "Youtube"],
          crosshair: true,
          accessibility: {
            description: "Countries",
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Social Media Likes",
          },
        },
        tooltip: {
          valueSuffix: " ",
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        credits: {
            enabled: false // Hide credits
          },
        series: [
          {
            name: "Likes",
            data: [ fbPageLikes ? fbPageLikes : 0, 260, 170, 630, youtubeLikes ? youtubeLikes :0],
            color: "#22DD22",
            borderRadius: 15,
            groupPadding: 0,
          },
        ],
      };
  return (
    <div>
      <div
        style={{ color: "#40E0D0" }}
        className=" flex gap-3 justify-center items-center font-bold"
      >
        <span className="">
          <BsChatSquareHeartFill size={36} />
        </span>
        <span style={{ color: "#6b6b6b" }}>Likes</span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default LikesChart
