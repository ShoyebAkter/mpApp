import { CampaignLeftSection } from "./CampaignLeftSection"
import { Explanation } from "./Explanation"
import './Campaign.css'
export const Campaign = () => {
    return (
       <div className="px-5">
        <h1 className="text-center text-5xl text-green-700 font-medium">Campaign Creation and Deployment</h1>
         <div className="h-screen flex items-center justify-between">
            <div><CampaignLeftSection /></div>
            <div> <Explanation /></div>
        </div>
       </div>
    )
}
