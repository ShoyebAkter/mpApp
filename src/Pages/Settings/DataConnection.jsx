import { CiLinkedin } from "react-icons/ci"
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { setChannelId, setLinkedinAccessToken, setLinkedinCode, setLinkedinState, setYoutubeSubscriber, setYoutubeToken, setYoutubeTotalVideo, setYoutubeTotalViews, setfbAccessToken } from "../../features/counter/counterSlice";
import FbPageModal from "../SocialMedia/FbPageModal";
import axios from "axios";
import { useEffect } from "react";

const DataConnection = () => {
    
  const authorization_code = useSelector((state) => state.counter.linkedin_authorization_code);
  const youtube_token = useSelector((state) => state.counter.youtube_token);
  const youtube_channel_id = useSelector((state) => state.counter.youtube_channel_id);
  const LinkedinAccessToken = useSelector(
    (state) => state.counter.linkedinToken
  );
    const fbAccessToken = useSelector((state) => state.counter.fbAccessToken);
    const dispatch=useDispatch();
    const urlParams = new URLSearchParams(window.location.search);
    dispatch(setLinkedinCode(urlParams.get("code")))
    dispatch(setLinkedinState(urlParams.get("state")))
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    
    dispatch(setYoutubeToken( params.get("access_token")))
    useEffect(()=>{
        if(youtube_token){// Replace with your actual access token
            fetchData();
            // fetchSubscriber();
            
          }
          if(youtube_channel_id){
            fetchBrandingSettings()
            
          }
    },[youtube_token,youtube_channel_id])

    useEffect(() => {
        // Load the gapi script and initialize the client
        const loadGapiScript = () => {
          const script = document.createElement('script');
          script.src = 'https://apis.google.com/js/api.js';
          script.onload = () => {
            window.gapi.load('client', initializeClient);
          };
          document.body.appendChild(script);
        };
    
        // Initialize the gapi client with API key
        const initializeClient = () => {
            window.gapi.client.setApiKey('AIzaSyAYVV_JQvu2IybKs03J2UB5pmnjsnH7mTU');
            window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
            .then(() => console.log('GAPI client loaded for API'),
                  err => console.error('Error loading GAPI client for API', err));
        };
    
        loadGapiScript();
      }, []);
    const loginToYoutube=()=>{
        // setyoutubeClicked(!youtubeClicked);
        window.location.href =`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:5173/settings&response_type=token&client_id=${import.meta.env.VITE_REACT_APP_OAUTH_CLIENT_ID}`
      
    }
      
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
        try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
              part: 'contentDetails',
              mine: true,
            },
            headers: {
              Authorization: `Bearer ${youtube_token}`,
            },
          });
          if(response){
            fetchPlayListItem(response.data.items[0].contentDetails.relatedPlaylists.uploads)
          }
          console.log(response.data.items[0]);
        } catch (error) {
          console.error('Error fetching channel details', error);
        }
      };
  
      const fetchPlayListItem=async(id)=>{
       
          try {
            const response2 = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
              params: {
                part: 'snippet,contentDetails,status',
                playlistId: id,
              },
              headers: {
                Authorization: `Bearer ${youtube_token}`,
              },
            });
            dispatch(setYoutubeTotalVideo(response2.data.items.length))
            if(response2){
              fetchYoutubeComment(response2.data.items[0].contentDetails.videoId);
            //   fetchSubscriber()
            //   getVideoRating(response2.data.items)
            }
            console.log(response2.data.items);
          } catch (error) {
            console.error('Error fetching playlist items', error);
          }
        
      }
      const fetchSubscriber = async () => {
        
    window.gapi.client.youtube.channels.list({
        part: 'snippet,contentDetails,id,statistics',
        id:youtube_channel_id,
      })
      .then(response => {
        dispatch(setYoutubeSubscriber(response.result.items[0].statistics.subscriberCount))
        dispatch(setYoutubeTotalViews(response.result.items[0].statistics.viewCount))
        // console.log('Response', response.result.items[0].statistics.subscriberCount,response.result.items[0].statistics.viewCount);
      },
      err => console.error('Execute error', err));
      };
  //commnt er kaj ta dekhte hobe aro
      const fetchYoutubeComment = async (videoId) => {
        // console.log(youtube_channel_id)
        window.gapi.client.youtube.commentThreads.list({
            part: 'id,replies,snippet',
            maxResults: 10,
            videoId: videoId,
          })
          .then(response => {
            fetchSubscriber();
            console.log('Response', response);
          },
          err => console.error('Execute error', err));
      };
  
    //   const getVideoRating = async (firstVideo) => {
    //     // console.log(firstVideo[0])
    //     try {
    //       const response = await axios.get('https://www.googleapis.com/youtube/v3/videos/rate', {
    //         params: {
    //           id: firstVideo[0].snippet.resourceId.videoId,
    //         },
    //         headers: {
    //           Authorization: `Bearer ${youtube_token}`,
    //         },
    //       });
    //       console.log(response);
    //     } catch (error) {
    //       console.error('Error fetching video rating', error);
    //     }
    //   };
    //   console.log(youtube_token)
      
    const logInToFB = () => {
        // setFbClicked(!fbClicked);
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
        // setlinkedinClicked(!linkedinClicked)
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
  return (
    
    <div className="flex justify-center mt-10 gap-10 mx-auto">
      <div
        // onClick={handleClick}
      style={{
        backgroundColor:  "#4c4c4c" ,
        color: "#ffffff" ,
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaInstagram /> Instagram
      </div>
      <div
        onClick={logInToFB}
      style={{
        backgroundColor:  "#4c4c4c",
        color: "#ffffff",
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaFacebook /> Facebook
      </div>
      <div
        onClick={logInToLinkedin}
        style={{
        backgroundColor:"#4c4c4c" ,
        color:"#ffffff" ,
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <CiLinkedin /> Linkedin
      </div>
      <div
    //   onClick={loginToTiktok}
         style={{
        backgroundColor: "#4c4c4c" ,
        color: "#ffffff",
        height: "40px",
      }}
      className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaTiktok /> Tiktok
      </div>
      <div
        onClick={loginToYoutube}
         style={{
        backgroundColor:  "#4c4c4c",
        color: "#ffffff" ,
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
  )
}

export default DataConnection
