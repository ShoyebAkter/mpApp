// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase.init";
import { TotalSales } from "./Topchart/TotalSales";
import { Orders } from "./Topchart/Orders";
import { OrderAvg } from "./Topchart/OrderAvg";
import './TopChart.css'
import MeanChart from "./MeanChart";
import { useEffect, useState } from "react";
import { fetchData, getShopifyOrders, getShopifyYearData } from "../CustomerBehaviour/shopifyLogic";
export const TopChart = () => {
    const [customersData,setCustomersData]=useState([])
    const [totalSalesData,settotalSalesData]=useState([])
    const [totalOrdersData,settotalOrdersData]=useState([])
    // const [user] = useAuthState(auth);
    const shopify=localStorage.getItem("shopify");
    useEffect(()=>{
        if(shopify){
          fetchData(`https://emapp-backend.vercel.app/customersData`,setCustomersData);
        }
      },[])
    //   console.log(customersData)
      useEffect(()=>{
        if(customersData.length!==0){
          settotalSalesData(getShopifyYearData(customersData[0]?.customers))
          settotalOrdersData(getShopifyOrders(customersData[0]?.customers))
        }
      },[customersData])
      // console.log(totalOrdersData,totalSalesData)
    return (
        <div className="topChart">
            <div  className="greenDiv"></div>
            <TotalSales totalSalesData={totalSalesData}/>
            <Orders  totalOrdersData={totalOrdersData}/>
            
            <OrderAvg totalSalesData={totalSalesData} totalOrdersData={totalOrdersData}/>
            {!shopify && <MeanChart chartType={"median"}/>}
        </div>
    )
}
