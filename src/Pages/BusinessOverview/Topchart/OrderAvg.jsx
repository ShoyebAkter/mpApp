import { useState } from "react";
import { LineChart } from "./LineChart"
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../../firebase.init";
import { callApi } from "../../EulerMail/getSalesData";
import { getAvg } from "./topchart";
export const OrderAvg = () => {
    const [orders, setOrders] = useState([]);
    const orderData = [];
    const [user] = useAuthState(auth);
    // console.log(orders);
    const getOrdersInfo = () => {
        orders.map((order) => {
            const date = new Date(order.order_date);
            const year = date.getFullYear();
            const obj = {
                year: year,
                totalPrice: parseFloat(order.total_price)
            }
            orderData.push(obj)
        })
    }
    
// console.log(totalSales)
let totalSales,totalOrder;
    const getAvgOrder = () => {
        const yearData = {};

        orderData.forEach((obj) => {
            const { year, totalPrice } = obj;
            if (!yearData[year]) {
                yearData[year] = { total: 0, count: 0 };
            }
            yearData[year].total += totalPrice;
            yearData[year].count++;
        });

        // Calculate the average totalPrice for each year
        const averagePrices = Object.keys(yearData).map((year) => ({
            year: parseInt(year),
            averageTotalPrice: yearData[year].total / yearData[year].count,
        }));
        return averagePrices;
    }
    
    let averageOrder;

    const switchFunction = () => {
        switch (user.email) {
          case "fuad@gmail.com":
            callApi("https://emapp-backend.vercel.app/api/data", setOrders);
            getOrdersInfo();
            // console.log(orderData);
            averageOrder=getAvgOrder();
            
            break;
          case "warehousepro@gmail.com":
            callApi(
              "https://emapp-backend.vercel.app/warehousepro/orders",
              setOrders
            );
            orders.sort((a, b) => a.year - b.year);
             totalSales = orders.map(item => item.total).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
             totalOrder = orders.map(item => item.order).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                // console.log(totalSales)
            averageOrder=getAvg(orders)
            break;
          default:
            // Handle other cases if needed
            break;
        }
      };
      switchFunction();
      
    //   console.log(totalOrder)
    return (
        <div>
            <LineChart orders={orders} totalSales={totalSales} totalOrder={totalOrder} />
        </div>
    )
}
