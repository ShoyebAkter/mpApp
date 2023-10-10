import { useEffect, useState } from "react"
import { BounceRate } from "./BounceRate"
import { CampaignTypes } from "./CampaignTypes"
import { Unsubscription } from "./Unsubscription"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase.init";
import { WhatsAppType } from "./WhatsAppType"
import { getSimilarData } from "../getSimilarData"

export const CampaignDetails = () => {
  const [user]=useAuthState(auth)
  const [emailCampaign,setEmailCampaign]=useState([]);
  const [whatsAppCampaign,setWhatsAppCampaign]=useState([]);
  useEffect(()=>{
    getWhatsAppCampaignData()
  },[])

  const getEmailCampaignData=()=>{
    fetch(`https://emapp-backend.vercel.app/emailcampaign/${user.uid}`)
    .then(res=>res.json())
    .then(result=>setEmailCampaign(result))
  }
  
  const getWhatsAppCampaignData=()=>{
    fetch(`https://emapp-backend.vercel.app/whatsappcampaign/${user.uid}`)
    .then(res=>res.json())
    .then(result=>setWhatsAppCampaign(result))

    getEmailCampaignData();
  }
  const emailResult=getSimilarData(emailCampaign);
  
  const whatsAppResult = getSimilarData(whatsAppCampaign);
  
  return (
    <div className="flex justify-around shadow-2xl rounded-lg m-5">
        <CampaignTypes emailCampaign={emailCampaign.length} whatsAppCampaign={whatsAppCampaign.length} />
        <BounceRate result={emailResult}/>
        <WhatsAppType whatsAppResult={whatsAppResult}/>
    </div>
  )
}
