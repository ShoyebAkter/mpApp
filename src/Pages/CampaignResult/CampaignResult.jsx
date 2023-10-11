import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { ButtonGroup } from "./ButtonGroup"
import { CampaignDetails } from "./CampaignDetails/CampaignDetails"
import { ClickRatio } from "./ClickRatio/ClickRatio"
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";
import { useEffect, useState } from "react";

export const CampaignResult = () => {
  const [user, loading] = useAuthState(auth);
  const [emailCampaign, setEmailCampaign] = useState([]);
  const [whatsAppCampaign, setWhatsAppCampaign] = useState([]);
  useEffect(() => {
    getWhatsAppCampaignData(user.uid)
  }, [user])

  const getEmailCampaignData = (uid) => {
    fetch(`https://emapp-backend.vercel.app/emailcampaign/${uid}`)
      .then(res => res.json())
      .then(result => setEmailCampaign(result))
  }

  const getWhatsAppCampaignData = (uid) => {
    fetch(`https://emapp-backend.vercel.app/whatsappcampaign/${uid}`)
      .then(res => res.json())
      .then(result => setWhatsAppCampaign(result))

    getEmailCampaignData(uid);
  }
  const navigate = useNavigate()
  if (!user) {
    navigate('/login')
  }
  return (
    <div className="text-black mt-10">
      {
        loading ? <Loading></Loading>
          :
          <div>
            <ButtonGroup emailCampaign={emailCampaign.length} whatsAppCampaign={whatsAppCampaign.length} />
            <ClickRatio emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign} />
            <CampaignDetails />
          </div>
      }
    </div>
  )
}
