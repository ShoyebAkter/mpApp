import PropTypes from "prop-types";

import { AiFillFacebook, AiOutlineLogout} from "react-icons/ai";
import { useEffect, useState } from "react";
import { getLongLivedAccessToken } from "../SocialMedia/longlivetoken";
import Facebook from "./Preview/Instagram/Facebook";

export const FacebookModal = ({ imageBlob, text }) => {
    const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");
    useEffect(() => {
      const token = localStorage.getItem("access_token");
      console.log(token);
      if (token) {
        setFacebookUserAccessToken(token)
       
      }
    }, [facebookUserAccessToken])
    const logInToFB = () => {
        window.FB.login(
            (response) => {
                getLongLivedAccessToken(response.authResponse?.accessToken)
                    .then(longLivedToken => {
                        setFacebookUserAccessToken(longLivedToken);
                        document.getElementById("my_modal_5").showModal();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                // setFacebookUserAccessToken(token)
                // getLongAccessToken(response.authResponse?.accessToken);
            },
            {
                // Scopes that allow us to publish content to Instagram
                scope: "pages_show_list,pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_manage_metadata,pages_manage_engagement",
                // scope:[ "","","pages_read_user_content","pages_manage_metadata","pages_manage_engagement"]
            }
        );
    };
    const logOutOfFB = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("index");
        setFacebookUserAccessToken(null)

    };
  return (
    <div>
      <section>
        {facebookUserAccessToken ? (
          <button
            className="px-5 py-2 text-black bg-green-200"
            onClick={logOutOfFB}
          >
            <AiOutlineLogout style={{ width: "20px", height: "20px" }} />
          </button>
        ) : (
          <button
            className="px-5 py-2 text-black bg-green-200"
            onClick={logInToFB}
          >
            <AiFillFacebook style={{ width: "20px", height: "20px" }} />
          </button>
        )}
      </section>
      {/* <button
        className="px-5 py-2 text-black bg-green-200"
        onClick={() => {
          
        }}
      >
        <Facebook style={{ width: "20px", height: "20px" }} />
      </button> */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
          <Facebook facebookUserAccessToken={facebookUserAccessToken} imageBlob={imageBlob} text={text} />
          {/* <Preview userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage} text={text}/> */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
FacebookModal.propTypes = {
  userId: PropTypes.string.isRequired,
  imageBlob: PropTypes.object.isRequired,
  editedImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
