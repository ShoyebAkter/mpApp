
import { useState } from "react"
import CanvaClone from "./CanvaClone"
import { Preview } from "./Preview/Preview"
import TextEditor from "./TextEditor"
import { auth } from "../../firebase.init"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../Authentication/Loading"

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
  // console.log(userId);
  return (
    <div>
      <div className="text-black flex">
        <CanvaClone setImageBlob={setImageBlob} setEditedImage={setEditedImage}/>
        <TextEditor text={text} setText={setText}/>
      </div>
      <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Send</button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12  bg-slate-200 max-w-full">
          <Preview userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage} text={text}/>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
