import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { FaMessage } from "react-icons/fa6";
const CommentsChart = () => {

    const fbPageComment = useSelector((state) => state.counter.fbPageComment);
  // console.log(parseInt(fbFollowers))
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
        description: "Total",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Social Media Comments",
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
        name: "Comments",
        data: [fbPageComment ? fbPageComment : 0, 260, 170, 630, 250],
        color: "#48705c",
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
          <FaMessage size={36} />
        </span>
        <span style={{ color: "#6b6b6b" }}>Comments</span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default CommentsChart
