import { useState } from "react"
import { UserStatics } from "./UserStatics"
import {Buttons} from './Buttons'
import './UserStatics.css'
export const FacebookData = () => {
    
  const [followers,setFollowers]=useState(0)
  const [impression,setImpression]=useState(0)
  const [engagement,setEngagement]=useState(0)
  return (
    <div className="socialmediaMain overflow-x-auto h-screen">
        <Buttons engagement={engagement} followers={followers} impression={impression}/>
        <UserStatics  setEngagement={setEngagement} setFollowers={setFollowers} setImpression={setImpression}/>
    </div>
  )
}
