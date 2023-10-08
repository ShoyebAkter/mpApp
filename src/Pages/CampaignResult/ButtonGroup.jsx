
export const ButtonGroup = ({emailCampaign,whatsAppCampaign}) => {
    console.log(emailCampaign,whatsAppCampaign);
    const total=emailCampaign+whatsAppCampaign;
    return (
        <div className="flex justify-around">
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total Campaign: {total}
            </button>
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total Email Sent: {emailCampaign}
            </button>
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total message Sent: {whatsAppCampaign}
            </button>
        </div>
    )
}
