
import { CustomerQuantity } from "./Topchart/CustomerQuantity";
import { TotalSales } from "./Topchart/TotalSales";
import { Orders } from "./Topchart/Orders";
import { OrderAvg } from "./Topchart/OrderAvg";

export const TopChart = () => {
    
    return (
        <div style={{"boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)',"gap":"70px","width":"1200px"}} className="flex rounded-2xl mt-5">
            <div style={{ "width": "30px", "background": "#439541" }} className="rounded-s-2xl"></div>
            <TotalSales/>
            <Orders/>
            <CustomerQuantity/>
            <OrderAvg/>
            
        </div>
    )
}
