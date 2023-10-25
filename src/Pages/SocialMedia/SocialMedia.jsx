
import { useState } from "react"
import { Buttons } from "./Buttons"
import { UserStatics } from "./UserStatics"

export const SocialMedia = () => {
  const [likes,setLikes]=useState(0)
  const [impression,setImpression]=useState(0)
  const [engagement,setEngagement]=useState(0)
  return (
    <div>
        <Buttons engagement={engagement} likes={likes} impression={impression}/>
        <UserStatics setEngagement={setEngagement} setLikes={setLikes} setImpression={setImpression}/>
    </div>
  )
}
