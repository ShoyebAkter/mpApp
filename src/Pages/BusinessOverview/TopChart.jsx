
import { CustomerQuantity } from "./Topchart/CustomerQuantity";
import { TotalSales } from "./Topchart/TotalSales";
import { Orders } from "./Topchart/Orders";
import { OrderAvg } from "./Topchart/OrderAvg";

export const TopChart = () => {
    
    return (
        <div className="flex justify-between shadow-xl ">
            <TotalSales/>
            <Orders/>
            <CustomerQuantity/>
            <OrderAvg/>
            
        </div>
    )
}
