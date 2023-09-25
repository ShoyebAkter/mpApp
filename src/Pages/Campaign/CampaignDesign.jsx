import { useState } from "react";
// import CanvaClone from "./CanvaClone"
import { SendButton } from "./SendButton"
import TextEditor from "./TextEditor"
// import { EmailModals } from "./Modals/EmailModals";

export const CampaignDesign = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [editedImage, setEditedImage] = useState(null);
  const [editedText, setEditedText] = useState('');
  return (
    <div className="text-black flex">
      <div>
        {/* <CanvaClone setEditedImage={setEditedImage}/> */}
      </div>
      <div><TextEditor  setEditedText={setEditedText}/></div>
      {/* <SendButton showEmailModal={showEmailModal} setShowEmailModal={setShowEmailModal}/> */}
      {/* <EmailModals setShowEmailModal={setShowEmailModal} showEmailModal={showEmailModal} /> */}
    </div>
  )
}
