import { useEffect, useState } from "react"
import { BounceRate } from "./BounceRate"
import { CampaignTypes } from "./CampaignTypes"
import { Unsubscription } from "./Unsubscription"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase.init";
import { WhatsAppType } from "./WhatsAppType"

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
  const result = emailCampaign.reduce((acc, campaign) => {
    const existingCampaign = acc.find((item) => item.campaignType === campaign.campaignType);
  
    if (existingCampaign) {
      existingCampaign.total++;
    } else {
      acc.push({ campaignType: campaign.campaignType, total: 1 });
    }
  
    return acc;
  }, []);
  const whatsAppResult = whatsAppCampaign.reduce((acc, campaign) => {
    const existingCampaign = acc.find((item) => item.campaignType === campaign.campaignType);
  
    if (existingCampaign) {
      existingCampaign.total++;
    } else {
      acc.push({ campaignType: campaign.campaignType, total: 1 });
    }
  
    return acc;
  }, []);
  // console.log(result);
  // const emailCampaignTypeArray=emailCampaign.map((campaign)=>campaign.campaignType)
  return (
    <div className="flex justify-around shadow-2xl rounded-lg m-5">
        <CampaignTypes emailCampaign={emailCampaign.length} whatsAppCampaign={whatsAppCampaign.length} />
        <BounceRate result={result}/>
        <WhatsAppType whatsAppResult={whatsAppResult}/>
    </div>
  )
}
