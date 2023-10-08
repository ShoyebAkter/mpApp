import { useEffect, useState } from "react"
import { BounceRate } from "./BounceRate"
import { CampaignTypes } from "./CampaignTypes"
import { Unsubscription } from "./Unsubscription"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase.init";

export const CampaignDetails = () => {
  const [user]=useAuthState(auth)
  const [emailCampaign,setEmailCampaign]=useState([]);
  useEffect(()=>{
    fetch(`https://emapp-backend.vercel.app/emailcampaign/${user.uid}`)
    .then(res=>res.json())
    .then(result=>setEmailCampaign(result))
  },[])
  console.log(emailCampaign);
  return (
    <div className="flex justify-around shadow-2xl rounded-lg m-5">
        <CampaignTypes/>
        <BounceRate/>
        <Unsubscription/>
    </div>
  )
}
