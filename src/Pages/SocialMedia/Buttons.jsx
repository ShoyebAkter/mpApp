import PropTypes from 'prop-types'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import FbPageModal from './FbPageModal';
import { useDispatch, useSelector } from 'react-redux';
import { setfbAccessToken } from '../../features/counter/counterSlice';


export const Buttons = () => {
  const fbAccessToken=useSelector((state)=>state.counter.fbAccessToken);
const dispatch=useDispatch()
  const logInToFB = () => {
    window.FB.login(
        (response) => {
          dispatch(setfbAccessToken(response.authResponse?.accessToken))
            localStorage.setItem("access_token", response.authResponse?.accessToken)
            // setFacebookUserAccessToken(response.authResponse?.accessToken);
            document.getElementById("my_modal_5").showModal();
            // getLongLivedAccessToken(response.authResponse?.accessToken)
            // .then(longLivedToken => {
            //     console.log(longLivedToken);
            //     setFacebookUserAccessToken(longLivedToken);
            //     localStorage.setItem("access_token",longLivedToken)
            //   })
            //   .catch(error => {
            //     console.error('Error:', error);
            //   });
        },
        {

            scope: "read_insights,business_management,instagram_basic,pages_show_list,pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_manage_metadata,pages_manage_engagement",
        }
    );
};
  return (
    <div className="flex justify-around mt-10">
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaInstagram /> Instagram
            </div>
            <div onClick={logInToFB} style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaFacebookF /> Facebook
            </div>
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <CiLinkedin /> Linkedin
            </div>
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaTiktok /> Tiktok
            </div>
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaYoutube /> Youtube
            </div>
            <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
          <FbPageModal fbAccessToken={fbAccessToken}  />
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
Buttons.propTypes = {
    impression:PropTypes.number.isRequired,
    engagement:PropTypes.number.isRequired,
    setFacebookUserAccessToken:PropTypes.func.isRequired,
    facebookUserAccessToken:PropTypes.string.isRequired,
  }