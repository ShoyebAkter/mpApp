import { ButtonGroup } from "./ButtonGroup"
import { CampaignDetails } from "./CampaignDetails/CampaignDetails"
import { ClickRatio } from "./ClickRatio/ClickRatio"

export const CampaignResult = () => {
  return (
    <div className="text-black mt-10">
        <ButtonGroup/>
        <ClickRatio/>
        <CampaignDetails/>
    </div>
  )
}
