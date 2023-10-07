import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { ButtonGroup } from "./ButtonGroup"
import { CampaignDetails } from "./CampaignDetails/CampaignDetails"
import { ClickRatio } from "./ClickRatio/ClickRatio"
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";

export const CampaignResult = () => {
  const [user,loading] = useAuthState(auth);
    const navigate=useNavigate()
    if(loading) return <Loading></Loading>
    if(!user){
        navigate('/login')
    }
  return (
    <div className="text-black mt-10">
        <ButtonGroup/>
        <ClickRatio/>
        <CampaignDetails/>
    </div>
  )
}
