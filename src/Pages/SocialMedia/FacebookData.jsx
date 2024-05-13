import { MdOutlineBarChart } from "react-icons/md";
import { Buttons } from "./Buttons";
import "./UserStatics.css";
import KeyPerformance from "./KeyPerformance";
import FollowersChart from "./FollowersChart";
import PostChart from "./PostChart";
import ImpressionChart from "./ImpressionChart";
import { FaImages } from "react-icons/fa";
import LikesChart from "./LikesChart";
export const FacebookData = () => {
  return (
    <div className="socialmediaMain flex justify-between  pt-28 ">
      <div className="bg-white px-5 pt-5">
        <div className="flex gap-3 items-center mb-5">
          <MdOutlineBarChart style={{ fontSize: "3em", color: "#649445" }} />
          <span style={{ color: "#6b6b6b" }} className="font-bold ">
            General
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <FaImages style={{ fontSize: "2em", color: "#649445" }} />
          <span style={{ color: "#6b6b6b" }} className="font-bold ">
            Individual
          </span>
        </div>
      </div>
      <div className="bg-white py-10  rounded-2xl mt-10 mx-auto">
        <Buttons />
        <KeyPerformance />
        <div className="flex justify-around my-5">
          <FollowersChart />
          <PostChart />
          <ImpressionChart />
          {/* <FollowersChart/> */}
        </div>
        <div className="flex justify-center gap-20">
          <LikesChart/>
          <LikesChart/>
        </div>
      </div>
      {/* <UserStatics  setEngagement={setEngagement} setFollowers={setFollowers} setImpression={setImpression}/> */}
    </div>
  );
};
