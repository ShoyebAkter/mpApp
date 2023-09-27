// import { useState } from "react";
import CanvaClone from "./CanvaClone"
import TextEditor from "./TextEditor"
// import { SendButton } from "./SendButton"
// import { EmailModals } from "./Modals/EmailModals";

export const CampaignDesign = () => {
  // const [showEmailModal, setShowEmailModal] = useState(false);
  // const [editedImage, setEditedImage] = useState(null);
  // const [editedText, setEditedText] = useState('');
  return (
    <div className="text-black flex">
      <CanvaClone/>
      <TextEditor/>
      {/* <SendButton showEmailModal={showEmailModal} setShowEmailModal={setShowEmailModal}/> */}
      {/* <EmailModals setShowEmailModal={setShowEmailModal} showEmailModal={showEmailModal} /> */}
    </div>
  )
}
