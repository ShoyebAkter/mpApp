import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FbPageModal from "./FbPageModal";
import { useDispatch, useSelector } from "react-redux";
import { setfbAccessToken } from "../../features/counter/counterSlice";
export const Buttons = () => {
  const fbAccessToken = useSelector((state) => state.counter.fbAccessToken);

  const dispatch = useDispatch();
  const logInToFB = () => {
    window.FB.login(
      (response) => {
        dispatch(setfbAccessToken(response.authResponse?.accessToken));
        localStorage.setItem(
          "access_token",
          response.authResponse?.accessToken
        );
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
        scope:
          "read_insights,business_management,instagram_basic,pages_show_list,pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_manage_metadata,pages_manage_engagement",
      }
    );
  };
  const logInToLinkedin = () => {
    window.location.href =
      "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86tgdxx45yfn1b&redirect_uri=http://localhost:5173/socialmedia&state=DCEeFWf45A53sdfKef424&scope=openid%20profile%20email";
  };
  const urlParams = new URLSearchParams(window.location.search);

  // Get the value of the 'code' parameter
  const code = urlParams.get("code");

  // Get the value of the 'state' parameter
  const state = urlParams.get("state");

  console.log("Code:", code);
  console.log("State:", state);

  const getAccessToken = () => {

    // const authorizationCode = `${code}`;
const clientId = '86tgdxx45yfn1b';
const clientSecret = 'n7Q6SzzLc9GurKre';
const redirectUri = 'http://localhost:5173/socialmedia';

const params = new URLSearchParams();
params.append('grant_type', 'authorization_code');
params.append('code', code);
params.append('client_id', clientId);
params.append('client_secret', clientSecret);
params.append('redirect_uri', redirectUri);
// Make the HTTP request
fetch('https://www.linkedin.com/oauth/v2/accessToken', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: params,
})
.then(response => response.json())
.then(data => {
  console.log('Access Token Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});


  };
  if (code && state) {
    getAccessToken();
  }
  return (
    <div className="flex justify-around mt-10">
      <div
        style={{ backgroundColor: "#4c4c4c", height: "40px" }}
        className="flex justify-between items-center rounded-xl px-3 text-white gap-5"
      >
        <FaInstagram /> Instagram
      </div>
      <div
        onClick={logInToFB}
        style={{ backgroundColor: "#4c4c4c", height: "40px" }}
        className="flex justify-between items-center rounded-xl px-3 text-white gap-5"
      >
        <FaFacebookF /> Facebook
      </div>
      <div
        onClick={logInToLinkedin}
        style={{ backgroundColor: "#4c4c4c", height: "40px" }}
        className="flex justify-between items-center rounded-xl px-3 text-white gap-5"
      >
        <CiLinkedin /> Linkedin
      </div>
      <div
        style={{ backgroundColor: "#4c4c4c", height: "40px" }}
        className="flex justify-between items-center rounded-xl px-3 text-white gap-5"
      >
        <FaTiktok /> Tiktok
      </div>
      <div
        style={{ backgroundColor: "#4c4c4c", height: "40px" }}
        className="flex justify-between items-center rounded-xl px-3 text-white gap-5"
      >
        <FaYoutube /> Youtube
      </div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
          <FbPageModal fbAccessToken={fbAccessToken} />
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
