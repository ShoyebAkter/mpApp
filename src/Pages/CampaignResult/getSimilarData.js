export const getSimilarData=(array)=>{
    const result = array.reduce((acc, campaign) => {
        const existingCampaign = acc.find((item) => item.campaignType === campaign.campaignType);
      
        if (existingCampaign) {
          existingCampaign.total++;
        } else {
          acc.push({ campaignType: campaign.campaignType, total: 1 });
        }
        
        return acc;
      }, []);
      return result;
}