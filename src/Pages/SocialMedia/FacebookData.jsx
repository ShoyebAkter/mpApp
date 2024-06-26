import { MdOutlineBarChart } from "react-icons/md";
import { Buttons } from "./Buttons";
import "./UserStatics.css";
import KeyPerformance from "./KeyPerformance";
import FollowersChart from "./FollowersChart";
import PostChart from "./PostChart";
import ImpressionChart from "./ImpressionChart";
import { FaImages } from "react-icons/fa";
import LikesChart from "./LikesChart";
import CommentsChart from "./CommentsChart";
export const FacebookData = () => {
  return (
    <div className="socialmediaMain flex justify-between  pt-28 ">
      <div className="bg-white pl-3 pr-10 pt-5">
        <div
        style={{ width: "150px", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold"
         >
          <img src="./genera.png" alt=""/>
        </div>
        <div style={{ width: "150px", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold">
          <img src="./cohort.png" alt=""/>
        </div>
      </div>
      <div className="bg-white py-10 mb-10 rounded-2xl mt-10 mx-auto">
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
          <CommentsChart/>
        </div>
      </div>
      {/* <UserStatics  setEngagement={setEngagement} setFollowers={setFollowers} setImpression={setImpression}/> */}
    </div>
  );
};
