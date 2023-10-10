import { ClickRate } from "./ClickRate"
import { CtrIncrease } from "./CtrIncrease"

export const ClickRatio = ({emailCampaign,whatsAppCampaign}) => {
  return (
    <div className="flex justify-around shadow-2xl rounded-lg m-5">
        <ClickRate emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
        <CtrIncrease emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
    </div>
  )
}
