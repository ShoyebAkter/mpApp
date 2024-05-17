import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { ButtonGroup } from "./ButtonGroup"
import { CampaignDetails } from "./CampaignDetails/CampaignDetails"
import { ClickRatio } from "./ClickRatio/ClickRatio"
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";
import { useEffect, useState } from "react";
import './Button.css'
export const CampaignResult = () => {
  const [user,loading] = useAuthState(auth);
  const [emailCampaign,setEmailCampaign]=useState([]);
  const [whatsAppCampaign,setWhatsAppCampaign]=useState([]);
  useEffect(()=>{
    if(user){
      getEmailCampaignData()
    }
  },[user])

  const getWhatsAppCampaignData=async()=>{
    if(user){
     await fetch(`https://emapp-backend.vercel.app/whatsappcampaign/${user.uid}`)
    .then(res=>res.json())
    .then(result=>setWhatsAppCampaign(result))

    }
  }
  const getEmailCampaignData=async()=>{
    if(user){
    await  fetch(`https://emapp-backend.vercel.app/emailcampaign/${user.uid}`)
    .then(res=>res.json())
    .then(result=>setEmailCampaign(result))
    }
    getWhatsAppCampaignData()
  }
    const navigate=useNavigate()
    if(loading) return <Loading></Loading>
    if(!user){
        navigate('/login')
    }
  return (
    <div style={{"paddingTop":"140px"}} className="text-black pb-10 resultMain mx-auto">
        <ButtonGroup emailCampaign={emailCampaign.length} whatsAppCampaign={whatsAppCampaign.length}/>
        <ClickRatio emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
        <CampaignDetails/>
    </div>
  )
}
