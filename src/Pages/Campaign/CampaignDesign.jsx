
import { useState } from "react"
import CanvaClone from "./CanvaClone"
import { Preview } from "./Preview/Preview"
import TextEditor from "./TextEditor"

export const CampaignDesign = () => {
  const [text,setText]=useState("")
  const [editedImage,setEditedImage]=useState('')
  console.log(text);
  return (
    <div>
      <div className="text-black flex">
        <CanvaClone setEditedImage={setEditedImage}/>
        <TextEditor text={text} setText={setText}/>
      </div>
      <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Send</button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-full">
          <Preview editedImage={editedImage} text={text}/>
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
