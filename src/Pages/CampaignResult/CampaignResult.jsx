import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { ButtonGroup } from "./ButtonGroup"
import { CampaignDetails } from "./CampaignDetails/CampaignDetails"
import { ClickRatio } from "./ClickRatio/ClickRatio"
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";
import { useEffect, useState } from "react";

export const CampaignResult = () => {
  const [user,loading] = useAuthState(auth);
  const [emailCampaign,setEmailCampaign]=useState([]);
  const [whatsAppCampaign,setWhatsAppCampaign]=useState([]);
  useEffect(()=>{
    if(user){
      getWhatsAppCampaignData()
    }
  },[user])

  const getEmailCampaignData=()=>{
    if(user){
      fetch(`https://emapp-backend.vercel.app/emailcampaign/${user.uid}`)
    .then(res=>res.json())
    .then(result=>setEmailCampaign(result))
    }
  }
  
  const getWhatsAppCampaignData=()=>{
    if(user){
      fetch(`https://emapp-backend.vercel.app/whatsappcampaign/${user.uid}`)
    .then(res=>res.json())
    .then(result=>setWhatsAppCampaign(result))

    getEmailCampaignData();
    }
  }
    const navigate=useNavigate()
    if(loading) return <Loading></Loading>
    if(!user){
        navigate('/login')
    }
  return (
    <div className="text-black mt-10">
        <ButtonGroup emailCampaign={emailCampaign.length} whatsAppCampaign={whatsAppCampaign.length}/>
        <ClickRatio emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
        <CampaignDetails/>
    </div>
  )
}
