
import { useState } from "react"

import TextEditor from "./TextEditor"
import { auth } from "../../firebase.init"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate} from "react-router-dom"
import Loading from "../Authentication/Loading"
import './CampaignDesign.css'
import EmailEditors from "./EmailEditors"
// import ImageEditors from "./ImageEditors"
export const CampaignDesign = () => {
  // const {userId}=useParams()
  const [text,setText]=useState("")
  const [editedImage,setEditedImage]=useState('')
  const [imageBlob,setImageBlob]=useState();
  const [user,loading] = useAuthState(auth);
    const navigate=useNavigate()
    if(loading) return <Loading></Loading>
    if(!user){
        navigate('/login')
    }
  // console.log(imageBlob,editedImage);
  return (
    <div>
      <div className="">
      
      <EmailEditors/>
      {/* <ImageEditors/> */}
        {/* <div><TextEditor text={text} setText={setText} userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage}/></div> */}
      </div>
    </div>
  )
}
