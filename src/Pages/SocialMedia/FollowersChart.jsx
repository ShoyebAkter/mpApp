import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { MdPermContactCalendar } from "react-icons/md";
const FollowersChart = () => {
  const fbFollowers = useSelector((state) => state.counter.fbFollowers);
  const youtubeSubscriber2 = useSelector((state) => state.counter.youtube_subscriber);
  const youtubeSubscriber=parseInt(youtubeSubscriber2)
  const instaFollower = useSelector((state) => state.counter.instaFollowers);
  // console.log(instaFollower)
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
        description: "Countries",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Social Media Followers",
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
        name: "Followers",
        data: [fbFollowers ? fbFollowers : 0, instaFollower ? instaFollower :0 , 170, 630, youtubeSubscriber ? youtubeSubscriber :0],
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
          <MdPermContactCalendar size={36} />
        </span>
        <span style={{ color: "#6b6b6b" }}>Followers</span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FollowersChart;
