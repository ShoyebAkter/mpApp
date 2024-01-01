import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import CustomerBehaviour from "./CustomerBehaviour"
import './BusinessChart.css'
import OverviewChart from "./OverviewChart"
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";
import SocialMediaChart from "./SocialMediaChart"
import { CampaignResult } from "./CampaignResult";
function BusinessChart() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    if (loading) return <Loading></Loading>
    if (!user) {
        navigate('/login')
    }
    return (
        <div className=" py-8">
            <div className="flex text-black justify-around ">
                <div className="text-xl font-bold">Company Name</div>
                <div className=" border-solid border-2 border-lime-500 rounded-xl px-2 text-lime-600">General Report</div>
            </div>
            <div className="flex justify-around py-5 ">
                <OverviewChart />
                <CustomerBehaviour />
            </div>
            
            <div className="flex justify-around py-5">
                <div><CampaignResult /></div>
                <div><SocialMediaChart /></div>
            </div>
            <div className="centerImage">
                <img src="/logo.png" alt="logo"/>
            </div>
        </div>
    )
}

export default BusinessChart