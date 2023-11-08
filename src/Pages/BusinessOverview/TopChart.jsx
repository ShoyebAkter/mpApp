
import { CustomerQuantity } from "./Topchart/CustomerQuantity";
import { TotalSales } from "./Topchart/TotalSales";
import { Orders } from "./Topchart/Orders";
import { OrderAvg } from "./Topchart/OrderAvg";

export const TopChart = () => {
    
    return (
        <div style={{"boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)'}} className="flex justify-between rounded-2xl p-10 mt-5">
            
            <TotalSales/>
            <Orders/>
            <CustomerQuantity/>
            <OrderAvg/>
            
        </div>
    )
}
