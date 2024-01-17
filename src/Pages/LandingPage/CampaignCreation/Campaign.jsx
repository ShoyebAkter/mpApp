import { CampaignLeftSection } from "./CampaignLeftSection"
import { Explanation } from "./Explanation"
import './Campaign.css'
export const Campaign = () => {
    return (
       <div  className="campaigndiv p-10">
        <h1  className="campaignHeader">Campaign Creation and Deployment</h1>
         <div className="campSec ">
            <div><CampaignLeftSection /></div>
            <div> <Explanation /></div>
        </div>
       </div>
    )
}
