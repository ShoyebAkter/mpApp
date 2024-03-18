import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { CustomerQuantity } from "./Topchart/CustomerQuantity";
import { TotalSales } from "./Topchart/TotalSales";
import { Orders } from "./Topchart/Orders";
import { OrderAvg } from "./Topchart/OrderAvg";
import './TopChart.css'
import MeanChart from "./MeanChart";
export const TopChart = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="topChart">
            <div  className="greenDiv"></div>
            <TotalSales/>
            <Orders/>
            
            <OrderAvg/>
            <MeanChart chartType={"median"}/>
        </div>
    )
}
