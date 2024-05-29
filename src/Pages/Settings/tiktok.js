import axios from "axios";

export const loginToTiktok=async()=>{
    // settiktokClicked(!tiktokClicked);
    const response = await axios.get("http://localhost:5000/oauth");
    window.location.href=response.data.url
    console.log(response.data.url)
    
  }