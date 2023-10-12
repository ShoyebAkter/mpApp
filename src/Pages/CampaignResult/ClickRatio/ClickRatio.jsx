import { ClickRate } from "./ClickRate"
import { CtrIncrease } from "./CtrIncrease"
import PropTypes from "prop-types"
export const ClickRatio = ({emailCampaign,whatsAppCampaign}) => {
  return (
    <div className="flex justify-around shadow-2xl rounded-lg m-5">
        <ClickRate emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
        <CtrIncrease emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
    </div>
  )
}
ClickRatio.propTypes = {
  emailCampaign:PropTypes.array.isRequired,
  whatsAppCampaign:PropTypes.array.isRequired,
  }