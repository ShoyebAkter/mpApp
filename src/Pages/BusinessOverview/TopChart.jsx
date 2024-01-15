
import { CustomerQuantity } from "./Topchart/CustomerQuantity";
import { TotalSales } from "./Topchart/TotalSales";
import { Orders } from "./Topchart/Orders";
import { OrderAvg } from "./Topchart/OrderAvg";
import './TopChart.css'
export const TopChart = () => {
    
    return (
        <div className="topChart">
            <div  className="greenDiv"></div>
            <TotalSales/>
            <Orders/>
            <CustomerQuantity/>
            <OrderAvg/>
            
        </div>
    )
}
