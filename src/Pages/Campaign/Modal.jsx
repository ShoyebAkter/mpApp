import { toast } from "react-toastify"
import { Emailpreview } from "./Preview/Emailpreview"
import PropTypes from 'prop-types'
export const Modal = ({userId,imageBlob,editedImage,text}) => {
  
  return (
    <div>
        <button className="bg-black px-5 py-2 text-white mb-2" onClick={() =>
        {
          if(!editedImage)
          {toast.error("export images")}
          else{
            document.getElementById('my_modal_4').showModal()
          }
        }
           }>Email</button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
            <Emailpreview userId={userId}
         imageBlob={imageBlob} editedImage={editedImage} text={text}/>
          {/* <Preview userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage} text={text}/> */}
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
Modal.propTypes = {
    userId: PropTypes.string.isRequired,
    imageBlob: PropTypes.object.isRequired,
    editedImage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
