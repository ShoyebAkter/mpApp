import { toast } from "react-toastify"
import { Emailpreview } from "./Preview/Emailpreview"
import PropTypes from 'prop-types'

import { AiOutlineMail } from "react-icons/ai"

export const Modal = ({userId,html}) => {
  // console.log(html)
  return (
    <div>
        <button className="px-5 py-2 text-black bg-green-200" onClick={() =>
        {
          if(!html)
          {toast.error("Save")}
          else{
            console.log(html)
            document.getElementById('my_modal_4').showModal()
          }
        }
           }>
            <AiOutlineMail style={{ "width": "20px", "height": '20px' }} />
           </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
        <div className="modal-action">
            <form method="dialog">
              <button className="btn">X</button>
            </form>
          </div>
            <Emailpreview userId={userId}
         html={html}/>
          {/* <Preview userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage} text={text}/> */}
          
        </div>
      </dialog>
    </div>
  )
}
Modal.propTypes = {
    userId: PropTypes.string.isRequired,
    imageBlob: PropTypes.object.isRequired,
    editedImage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
