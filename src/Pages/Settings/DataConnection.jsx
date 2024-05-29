import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setChannelId,
  setInstaAccessToken,
  setLinkedinAccessToken,
  setLinkedinCode,
  setLinkedinState,
  setYoutubeComment,
  setYoutubeLikes,
  setYoutubeSubscriber,
  setYoutubeToken,
  setYoutubeTotalVideo,
  setYoutubeTotalViews,
  setfbAccessToken,
} from "../../features/counter/counterSlice";
import FbPageModal from "../SocialMedia/FbPageModal";
import axios from "axios";
import { useEffect } from "react";
import { getAccessToken, getToken, logInToLinkedin } from "./linkedinFunction";
import InstaModal from "../SocialMedia/InstaModal";
import { loginToTiktok } from "./tiktok";
import { GoogleLogin } from "@react-oauth/google";

const DataConnection = () => {
  const authorization_code = useSelector(
    (state) => state.counter.linkedin_authorization_code
  );
  const youtube_token = useSelector((state) => state.counter.youtube_token);
  const youtube_channel_id = useSelector(
    (state) => state.counter.youtube_channel_id
  );
  const LinkedinAccessToken = useSelector(
    (state) => state.counter.linkedinToken
  );
  const fbAccessToken = useSelector((state) => state.counter.fbAccessToken);
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  dispatch(setLinkedinCode(urlParams.get("code")));
  dispatch(setLinkedinState(urlParams.get("state")));
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.substring(1));

  dispatch(setYoutubeToken(params.get("access_token")));
  useEffect(() => {
    if (youtube_token) {
      // Replace with your actual access token
      fetchData();
      // fetchSubscriber();
    }
    if (youtube_channel_id) {
      fetchBrandingSettings();
    }
  }, [youtube_token, youtube_channel_id]);

  useEffect(() => {
    // Load the gapi script and initialize the client
    const loadGapiScript = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        window.gapi.load("client", initializeClient);
      };
      document.body.appendChild(script);
    };

    // Initialize the gapi client with API key
    const initializeClient = () => {
      window.gapi.client.setApiKey("AIzaSyAYVV_JQvu2IybKs03J2UB5pmnjsnH7mTU");
      window.gapi.client
        .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
          () => console.log("GAPI client loaded for API"),
          (err) => console.error("Error loading GAPI client for API", err)
        );
    };

    loadGapiScript();
  }, []);
  const loginToYoutube = () => {
    // setyoutubeClicked(!youtubeClicked);
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=https://www.eulermail.app/settings&response_type=token&client_id=${
      import.meta.env.VITE_REACT_APP_OAUTH_CLIENT_ID
    }`;
  };
  const handleSuccess = (response) => {
    const token = response.credential;
    // const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", token);
    // Handle the received token here (e.g., store it in state or context)
  };
  const handleError = () => {
    console.error("Login Failed");
  };
  const fetchData = async () => {
    // Replace with your actual access token
    const url =
      "https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true";

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${youtube_token}`,
        },
      });
      dispatch(setChannelId(response.data.items[0].id));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBrandingSettings = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
          params: {
            part: "contentDetails",
            mine: true,
          },
          headers: {
            Authorization: `Bearer ${youtube_token}`,
          },
        }
      );
      if (response) {
        fetchPlayListItem(
          response.data.items[0].contentDetails.relatedPlaylists.uploads
        );
      }
      dispatch(setChannelId(response.data.items[0].id));
      console.log(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching channel details", error);
    }
  };

  const fetchPlayListItem = async (id) => {
    try {
      const response2 = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: "snippet,contentDetails,status",
            playlistId: id,
          },
          headers: {
            Authorization: `Bearer ${youtube_token}`,
          },
        }
      );
      dispatch(setYoutubeTotalVideo(response2.data.items.length));
      if (response2) {
        fetchYoutubeComment(response2.data.items[0].contentDetails.videoId);
        //   fetchSubscriber()
        //   getVideoRating(response2.data.items)
      }
      console.log(response2.data.items);
    } catch (error) {
      console.error("Error fetching playlist items", error);
    }
  };
  const fetchSubscriber = async () => {
    window.gapi.client.youtube.channels
      .list({
        part: "snippet,contentDetails,id,statistics",
        id: youtube_channel_id,
      })
      .then(
        (response) => {
          dispatch(
            setYoutubeSubscriber(
              response.result.items[0].statistics.subscriberCount
            )
          );
          dispatch(
            setYoutubeTotalViews(response.result.items[0].statistics.viewCount)
          );
          console.log(
            "Response",
            response.result.items[0].statistics.subscriberCount,
            response.result.items[0].statistics.viewCount
          );
        },
        (err) => console.error("Execute error", err)
      );
  };
  //commnt er kaj ta dekhte hobe aro
  const fetchYoutubeComment = async (videoId) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,id,statistics",
            id: videoId,
          },
          headers: {
            Authorization: `Bearer ${youtube_token}`,
          },
        }
      );

      if (response) {
        fetchSubscriber(); // Ensure fetchSubscriber is defined in your context
        console.log("Response", response);
        dispatch(
          setYoutubeComment(response.data.items[0].statistics.commentCount)
        );
        dispatch(setYoutubeLikes(response.data.items[0].statistics.likeCount));
      }
    } catch (error) {
      console.error("Error fetching YouTube comments", error);
    }
  };

  const logInToFB = () => {
    // setFbClicked(!fbClicked);
    window.FB.login(
      (response) => {
        dispatch(setfbAccessToken(response.authResponse?.accessToken));

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

  const logInToInsta = () => {
    // setFbClicked(!fbClicked);
    window.FB.login(
      (response) => {
        dispatch(setInstaAccessToken(response.authResponse?.accessToken));

        // setFacebookUserAccessToken(response.authResponse?.accessToken);
        document.getElementById("my_modal_6").showModal();
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

  if (authorization_code) {
    getToken(authorization_code);
    // getAccessToken(authorization_code)
    // console.log(authorization_code)
    // const response = axios.get("https://api.linkedin.com/v2/me", {
    //   headers: {
    //     Authorization: `Bearer ${LinkedinAccessToken}`,
    //   },
    // });

    // const userProfile = response.data;
    // console.log(userProfile);
  }
  // const token="AQXR4pF4h8ZdAZK396zETFUTXU7O2Qm4D1b7PTJkitHcyAjT-Y2PwctqtjJjvPIV5V0TpTYy619EWIt1x1j2aDZDb4b5MCcomFLzI8ibODF2oHsmE_jnLTvmgnSGUa39841rbOdyoNvMsdX4nQUSXBok92w5YHAT213-dVNztq2xi0e9UwIMalkqwDsU1QbiD8ND_PGHRK1P0SaA-LRH1YilDzqfphiScaslU98Xk7zIE7gfZWvPxU67YBTNhFt2YdLJwTE2FQ4PwHmwtYOV8CEb92ab84P_zynxQ5y3qJQAQY_WAO17vSLc0AwS_fhzbgQfGWjzRoxm0Fd_s-HsOCn4hpwKjg"
  // if (token) {
  //   console.log(LinkedinAccessToken);
  //   getProfile(token);
  // }

  return (
    <div className="flex justify-center mt-10 gap-10 mx-auto">
      <div
        onClick={logInToInsta}
        style={{
          backgroundColor: "#4c4c4c",
          color: "#ffffff",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaInstagram /> Instagram
      </div>
      <div
        onClick={logInToFB}
        style={{
          backgroundColor: "#4c4c4c",
          color: "#ffffff",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaFacebook /> Facebook
      </div>
      <div
        // onClick={logInToLinkedin}
        style={{
          backgroundColor: "#4c4c4c",
          color: "#ffffff",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <CiLinkedin /> Linkedin
      </div>
      <div
        // onClick={loginToTiktok}
        style={{
          backgroundColor: "#4c4c4c",
          color: "#ffffff",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaTiktok /> Tiktok
      </div>
      <div
        // onClick={loginToYoutube}
        style={{
          backgroundColor: "#4c4c4c",
          color: "#ffffff",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        {/* <FaYoutube /> Youtube */}
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          auto_select
        />
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
          <FbPageModal />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-1/2  bg-slate-200 max-w-full">
          <InstaModal />
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

export default DataConnection;
