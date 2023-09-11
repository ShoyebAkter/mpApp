import { BounceRate } from "./BounceRate"
import { CampaignTypes } from "./CampaignTypes"
import { Unsubscription } from "./Unsubscription"

export const CampaignDetails = () => {
  return (
    <div className="flex justify-around shadow-2xl rounded-lg m-5">
        <CampaignTypes/>
        <BounceRate/>
        <Unsubscription/>
    </div>
  )
}
