
import { useState } from "react"

import TextEditor from "./TextEditor"
import { auth } from "../../firebase.init"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate} from "react-router-dom"
import Loading from "../Authentication/Loading"
import './CampaignDesign.css'
import Editor from "./Editor"
import EmailBuilder from "./EmailBuilder/EmailBuilder"
import RecentDesign from "./RecentDesign"
import { useSelector } from "react-redux"
// import ImageEditors from "./ImageEditors"
export const CampaignDesign = () => {
  const showBuilder=useSelector((state)=>state.counter.showBuilder);
  const template=useSelector((state)=>state.counter.template);
  const [user,loading] = useAuthState(auth);
    const navigate=useNavigate()
    if(loading) return <Loading></Loading>
    if(!user){
        navigate('/login')
    }
    // console.log(user)
  // console.log(imageBlob,editedImage);
  return (
    <div>
      <div className="pt-28 bg-gray-200">
      {/* <RecentDesign  /> */}
      {
        showBuilder ?
        <EmailBuilder user={user} />
        :
        <RecentDesign user={user}/>
        
      }
      </div>
    </div>
  )
}
