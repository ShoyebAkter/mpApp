import { CampaignLeftSection } from "./CampaignLeftSection"
import { Explanation } from "./Explanation"
import './Campaign.css'
export const Campaign = () => {
    return (
       <div  className="campaigndiv p-10">
        <h1 style={{'color':"#649445"}} className="text-center font-bold text-5xl py-5">Campaign Creation and Deployment</h1>
         <div className="campSec ">
            <div><CampaignLeftSection /></div>
            <div> <Explanation /></div>
        </div>
       </div>
    )
}
