import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import CustomerBehaviourMain from "./CustomerBehaviourMain"
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
        <div  className="eulermailMain">
            <div className="flex text-black justify-around ">
                <div style={{"color": "#439541"}} className="text-xl font-bold">Warehousing Pro</div>
                <div className=" border-solid border-2 border-lime-500 rounded-xl px-2 text-lime-600">General Report</div>
            </div>
            <div   className=" firstChartSec">
                <div style={{"gap":"30px"}} className="flex flex-col py-5 ">
                    <OverviewChart />
                    <CustomerBehaviourMain />
                </div>
                <div onClick={()=>navigate('/campaignerdesign')} className="centerImage">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div style={{"gap":"30px"}} className="flex flex-col py-5">
                <CampaignResult /><SocialMediaChart />
                    {/* {
                        user.email ==="fuad@gmail.com"?
                        :
                        <div className="flex flex-col  gap-8"><SmallCLient/><WarehouseproCustomer/></div>
                    } */}
                </div>
            </div>

        </div>
    )
}

export default BusinessChart