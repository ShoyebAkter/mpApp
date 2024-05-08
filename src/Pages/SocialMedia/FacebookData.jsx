
import {Buttons} from './Buttons'
import './UserStatics.css'
import KeyPerformance from "./KeyPerformance"
import FollowersChart from "./FollowersChart"
import PostChart from './PostChart'
import ImpressionChart from './ImpressionChart'
export const FacebookData = () => {


  return (
    <div className="socialmediaMain overflow-x-auto h-screen pt-32">
        <div className="bg-white py-10 mx-1 rounded-2xl">
        <Buttons />
        <KeyPerformance/>
        <div className="flex justify-around mt-5">
          <FollowersChart />
          <PostChart/>
          <ImpressionChart/>
          {/* <FollowersChart/> */}
        </div>
        </div>
        {/* <UserStatics  setEngagement={setEngagement} setFollowers={setFollowers} setImpression={setImpression}/> */}
    </div>
  )
}
