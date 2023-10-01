
import CanvaClone from "./CanvaClone"
import { Preview } from "./Preview/Preview"
import TextEditor from "./TextEditor"
// import { EmailModals } from "./Modals/EmailModals";

export const CampaignDesign = () => {
  return (
    <div>
      <div className="text-black flex">
        <CanvaClone />
        <TextEditor />
      </div>
      <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Send</button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-full">
          <Preview/>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
