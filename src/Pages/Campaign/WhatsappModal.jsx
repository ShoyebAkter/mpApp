import  {WhatsappPreview} from './Preview/WhatsappPreview'
import PropTypes from 'prop-types';
export const WhatsappModal = ({userId,editedImage,text}) => {
  return (
    <div>
        <button className="btn mb-2" onClick={() => document.getElementById('my_modal_5').showModal()}>WhatsApp</button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12  bg-slate-200 max-w-full">
            <WhatsappPreview userId={userId} editedImage={editedImage} text={text}/>
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

WhatsappModal.propTypes = {
    text:PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    editedImage: PropTypes.string.isRequired,
  }