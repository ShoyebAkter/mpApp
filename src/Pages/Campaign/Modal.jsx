import { toast } from "react-toastify";
import { Emailpreview } from "./Preview/Emailpreview";
import PropTypes from "prop-types";
import { FaFacebookF, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const Modal = ({ userId, html }) => {
  // console.log(html)
  return (
    <div>
      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-black hover:bg-slate-100 hover:border-none"
          onClick={() => {
            if (!html) {
              toast.error("Save");
            } else {
              console.log(html);
              document.getElementById("my_modal_4").showModal();
            }
          }}
        >
          <AiOutlineMail style={{ width: "20px", height: "20px" }} />
        </button>
        <button className="px-5 py-2  text-black hover:bg-slate-100 hover:border-none">
          <FaFacebookF style={{ width: "20px", height: "20px" }} />
        </button>
        <button className="px-5 py-2 text-black hover:bg-slate-100 hover:border-none">
          <FaWhatsapp style={{ width: "20px", height: "20px" }} />
        </button>
        <button className="px-5 py-2  text-black hover:bg-slate-100 hover:border-none">
          <FaTelegramPlane style={{ width: "20px", height: "20px" }} />
        </button>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">X</button>
            </form>
          </div>
          <Emailpreview userId={userId} html={html} />
          {/* <Preview userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage} text={text}/> */}
        </div>
      </dialog>
    </div>
  );
};
Modal.propTypes = {
  userId: PropTypes.string.isRequired,
  imageBlob: PropTypes.object.isRequired,
  editedImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
