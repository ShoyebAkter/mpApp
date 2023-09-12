import { useState } from "react";
import CanvaClone from "./CanvaClone"
import { SendButton } from "./SendButton"
import TextEditor from "./TextEditor"
// import { EmailModals } from "./Modals/EmailModals";

export const CampaignDesign = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  return (
    <div className="text-black flex">
      <CanvaClone/>
      <TextEditor/>
      <SendButton showEmailModal={showEmailModal} setShowEmailModal={setShowEmailModal}/>
      {/* <EmailModals setShowEmailModal={setShowEmailModal} showEmailModal={showEmailModal} /> */}
    </div>
  )
}
