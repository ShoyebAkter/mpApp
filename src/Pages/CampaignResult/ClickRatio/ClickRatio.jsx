import { ClickRate } from "./ClickRate"
import { CtrIncrease } from "./CtrIncrease"
import PropTypes from "prop-types"
import './ClickRatio.css'
export const ClickRatio = ({emailCampaign,whatsAppCampaign}) => {
  return (
    <div className="clickRatio">
        <ClickRate emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
        <CtrIncrease emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
    </div>
  )
}
ClickRatio.propTypes = {
  emailCampaign:PropTypes.array.isRequired,
  whatsAppCampaign:PropTypes.array.isRequired,
  }