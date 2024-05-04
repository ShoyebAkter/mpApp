import PropTypes from "prop-types"
import './Button.css'
export const ButtonGroup = ({emailCampaign,whatsAppCampaign}) => {
    // console.log(emailCampaign,whatsAppCampaign);
    const total=emailCampaign+whatsAppCampaign;
    return (
        <div className="flex justify-around pt-5">
            <button className="buttons">
                Total Campaign: {total}
            </button>
            <button  className="buttons">
                Total Email Sent: {emailCampaign}
            </button>
            <button  className=" buttons">
                Total message Sent: {whatsAppCampaign}
            </button>
        </div>
    )
}
ButtonGroup.propTypes = {
    emailCampaign:PropTypes.number.isRequired,
      whatsAppCampaign:PropTypes.number.isRequired
    }