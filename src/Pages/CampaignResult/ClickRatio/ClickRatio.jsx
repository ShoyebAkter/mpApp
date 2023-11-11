import { ClickRate } from "./ClickRate"
import { CtrIncrease } from "./CtrIncrease"
import PropTypes from "prop-types"
export const ClickRatio = ({emailCampaign,whatsAppCampaign}) => {
  return (
    <div style={{"boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className="flex justify-around  rounded-2xl p-5 m-5">
        <ClickRate emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
        <CtrIncrease emailCampaign={emailCampaign} whatsAppCampaign={whatsAppCampaign}/>
    </div>
  )
}
ClickRatio.propTypes = {
  emailCampaign:PropTypes.array.isRequired,
  whatsAppCampaign:PropTypes.array.isRequired,
  }