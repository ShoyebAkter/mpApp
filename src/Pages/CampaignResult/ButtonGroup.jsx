import PropTypes from "prop-types"
export const ButtonGroup = ({emailCampaign,whatsAppCampaign}) => {
    // console.log(emailCampaign,whatsAppCampaign);
    const total=emailCampaign+whatsAppCampaign;
    return (
        <div className="flex justify-around">
            <button style={{"backgroundColor":"#2a4e40"}} className="text-white font-bold py-7 px-10 rounded">
                Total Campaign: {total}
            </button>
            <button style={{"backgroundColor":"#2a4e40"}} className="text-white font-bold py-7 px-10 rounded">
                Total Email Sent: {emailCampaign}
            </button>
            <button style={{"backgroundColor":"#2a4e40"}} className=" text-white font-bold py-7 px-10 rounded">
                Total message Sent: {whatsAppCampaign}
            </button>
        </div>
    )
}
ButtonGroup.propTypes = {
    emailCampaign:PropTypes.number.isRequired,
      whatsAppCampaign:PropTypes.number.isRequired
    }