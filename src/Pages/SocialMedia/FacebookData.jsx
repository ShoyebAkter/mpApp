import { useState } from "react"
import { UserStatics } from "./UserStatics"
import {Buttons} from './Buttons'
import './UserStatics.css'
import KeyPerformance from "./KeyPerformance"
export const FacebookData = () => {
    
  const [followers,setFollowers]=useState(0)
  const [impression,setImpression]=useState(0)
  const [engagement,setEngagement]=useState(0)
  return (
    <div className="socialmediaMain overflow-x-auto h-screen pt-32">
        <div className="bg-white py-10 mx-10 rounded-2xl">
        <Buttons engagement={engagement} followers={followers} impression={impression}/>
        <KeyPerformance/>
        </div>
        {/* <UserStatics  setEngagement={setEngagement} setFollowers={setFollowers} setImpression={setImpression}/> */}
    </div>
  )
}
