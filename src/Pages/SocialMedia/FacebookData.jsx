import { useState } from "react"
import { UserStatics } from "./UserStatics"
import {Buttons} from './Buttons'
export const FacebookData = () => {
    
  const [likes,setLikes]=useState(0)
  const [impression,setImpression]=useState(0)
  const [engagement,setEngagement]=useState(0)
  return (
    <div className="overflow-x-auto">
        <Buttons engagement={engagement} likes={likes} impression={impression}/>
        <UserStatics  setEngagement={setEngagement} setLikes={setLikes} setImpression={setImpression}/>
    </div>
  )
}
