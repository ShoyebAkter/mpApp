// import { useState } from "react";
import { useState } from "react";
import CanvaClone from "./CanvaClone"
import TextEditor from "./TextEditor"
// import { SendButton } from "./SendButton"
// import { EmailModals } from "./Modals/EmailModals";

export const CampaignDesign = () => {
  // const [showEmailModal, setShowEmailModal] = useState(false);
  const [editedImage, setEditedImage] = useState("");
  // const [editedText, setEditedText] = useState('');
  console.log(editedImage);
  return (
    <div className="text-black flex">
      <CanvaClone setEditedImage={setEditedImage}/>
      <TextEditor />
      {/* <SendButton showEmailModal={showEmailModal} setShowEmailModal={setShowEmailModal}/> */}
      {/* <EmailModals setShowEmailModal={setShowEmailModal} showEmailModal={showEmailModal} /> */}
    </div>
  )
}
