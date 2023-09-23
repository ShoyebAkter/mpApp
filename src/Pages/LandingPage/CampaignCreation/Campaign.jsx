import { CampaignLeftSection } from "./CampaignLeftSection"
import { Explanation } from "./Explanation"
import './Campaign.css'
export const Campaign = () => {
    return (
        <div className="h-screen flex items-center">
            <CampaignLeftSection />
            <div className="logo">
                <img src="/logo.png" alt="Image" className="logoImage"/>
            </div>
            <Explanation />

        </div>
    )
}
