import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FbPageModal from "./FbPageModal";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {
  setChannelId,
  setLinkedinAccessToken,
  setLinkedinCode,
  setLinkedinState,
  setYoutubeToken,
  setfbAccessToken,
} from "../../features/counter/counterSlice";
import { useEffect, useState } from "react";

export const Buttons = () => {
  const fbAccessToken = useSelector((state) => state.counter.fbAccessToken);
  const authorization_code = useSelector((state) => state.counter.linkedin_authorization_code);
  const youtube_token = useSelector((state) => state.counter.youtube_token);
  const youtube_channel_id = useSelector((state) => state.counter.youtube_channel_id);
  const LinkedinAccessToken = useSelector(
    (state) => state.counter.linkedinToken
  );
  const [isClicked, setIsClicked] = useState(false);
  const [fbClicked,setFbClicked]=useState(false)
  const [linkedinClicked,setlinkedinClicked]=useState(false)
  const [tiktokClicked,settiktokClicked]=useState(false)
  const [youtubeClicked,setyoutubeClicked]=useState(false)
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
    dispatch(setLinkedinCode(urlParams.get("code")))
    dispatch(setLinkedinState(urlParams.get("state")))
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    
    dispatch(setYoutubeToken( params.get("access_token")))


    const fetchData = async () => { // Replace with your actual access token
      const url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true';
      
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${youtube_token}`,
          },
        });
        dispatch(setChannelId(response.data.items[0].id))
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchBrandingSettings = async () => {
      const url = 'https://www.googleapis.com/youtube/v3/channels';
      const params = {
        part: 'brandingSettings',
        mine: true,
      };

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${youtube_token}`,
          },
          params,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if(youtube_token){// Replace with your actual access token
      fetchData()
    }
    if(youtube_channel_id){
      fetchBrandingSettings()
    }
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const loginToTiktok=async()=>{
    settiktokClicked(!tiktokClicked);
    // const response = await axios.get("http://localhost:5000/oauth");
    // // window.location.href="http://localhost:5000/oauth"
    // console.log(response.data.url)
    
  }
  const loginToYoutube=()=>{
    setyoutubeClicked(!youtubeClicked);
    window.location.href =`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:5173/socialmedia&response_type=token&client_id=${import.meta.env.VITE_REACT_APP_OAUTH_CLIENT_ID}`
  }

  const logInToFB = () => {
    setFbClicked(!fbClicked);
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
    setlinkedinClicked(!linkedinClicked)
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
      import.meta.env.VITE_REACT_APP_LINKEDIN_CLIENT_ID
    }&redirect_uri=http://localhost:5173/socialmedia&state=DCEeFWf45A53sdfKef424&scope=openid%20profile%20email`;
  };
  
  const getToken = () => {
    fetch("https://emapp-backend.vercel.app/getAccessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ authorization_code }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text(); // Assuming your backend returns the access token as text
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        dispatch(setLinkedinAccessToken(data));
        console.log("Access Token:", data);
      })
      
  };
  if (authorization_code) {
    getToken();
    const response = axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        'Authorization': `Bearer ${LinkedinAccessToken}`
      }
    });

    const userProfile = response.data;
    console.log(userProfile)
  }
  if (LinkedinAccessToken) {
    // console.log(LinkedinAccessToken);
    
    fetch(
      `http://localhost:5000/getLinkedinData?access_token=${LinkedinAccessToken}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("User profile:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  // const instaLogin = () => {

  //   window.location.href =
  //     `https://api.instagram.com/oauth/authorize?client_id=${
  //       import.meta.env.VITE_REACT_APP_INSTA_CLIENT_ID
  //     }&redirect_uri=https://www.eulermail.app/&scope=user_profile,user_media&response_type=code`;
  //     console.log("cliked");
  // };
  return (
    <div className="flex justify-around mt-10  mx-32">
      <div
        onClick={handleClick}
      style={{
        backgroundColor: isClicked ? "#4c4c4c" : "#F9F9F9",
        color: isClicked ? "#ffffff" : "#000000",
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaInstagram /> Instagram
      </div>
      <div
        onClick={logInToFB}
      style={{
        backgroundColor: fbClicked ? "#4c4c4c" : "#F9F9F9",
        color: fbClicked ? "#ffffff" : "#000000",
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaFacebookF /> Facebook
      </div>
      <div
        onClick={logInToLinkedin}
        style={{
        backgroundColor: linkedinClicked ? "#4c4c4c" : "#F9F9F9",
        color: linkedinClicked ? "#ffffff" : "#000000",
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <CiLinkedin /> Linkedin
      </div>
      <div
      onClick={loginToTiktok}
         style={{
        backgroundColor: tiktokClicked ? "#4c4c4c" : "#F9F9F9",
        color: tiktokClicked ? "#ffffff" : "#000000",
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaTiktok /> Tiktok
      </div>
      <div
        onClick={loginToYoutube}
         style={{
        backgroundColor: youtubeClicked ? "#4c4c4c" : "#F9F9F9",
        color: youtubeClicked ? "#ffffff" : "#000000",
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
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
