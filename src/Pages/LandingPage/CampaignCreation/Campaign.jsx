import { CampaignLeftSection } from "./CampaignLeftSection"
import { Explanation } from "./Explanation"
import './Campaign.css'
export const Campaign = () => {
    return (
       <div className="p-10">
        <h1 className="text-center text-5xl text-green-700 font-medium py-5">Campaign Creation and Deployment</h1>
         <div className=" flex items-center justify-between">
            <div><CampaignLeftSection /></div>
            <div> <Explanation /></div>
        </div>
       </div>
    )
}
