import { useEffect, useState } from "react";
import { LineChart } from "./LineChart"

export const OrderAvg = () => {
    const [orders, setOrders] = useState([]);
    const orderData = [];
    useEffect(() => {
        fetch('../../../../orders.json')
            .then(res => res.json())
            .then(result => setOrders(result.orders))
            .catch(error => console.error(error))
    }, [])
    // console.log(orders);
    const getOrdersInfo = () => {
        orders.map((order) => {
            const date = new Date(order.order_date);
            const year = date.getFullYear();
            const obj = {
                year: year,
                totalPrice: order.total_price
            }
            orderData.push(obj)
        })
    }
    getOrdersInfo();


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
    
    const averageOrder=getAvgOrder();


    return (
        <div>
            <LineChart averageOrder={averageOrder}/>
        </div>
    )
}
