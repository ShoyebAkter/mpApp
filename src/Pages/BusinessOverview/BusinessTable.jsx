import { useEffect, useState } from "react"
import { callApi } from "../EulerMail/getSalesData";

const BusinessTable = () => {
    const [orderData,setOrderData]=useState([]);

    useEffect(()=>{
        callApi("https://emapp-backend.vercel.app/warehousepro/orders",setOrderData)
    },[])
    const sortedOrderData = orderData.slice().sort((a, b) => a.year - b.year);

  return (
    <div className="overflow-x-auto ">
  <h1 className="text-center text-3xl text-green-600">Business Table</h1>
  <table className="table table-sm table-pin-rows table-pin-cols">
    <thead className="thead">
      <tr>
        <th>Year</th>
        {sortedOrderData.map((item, index) => (
          <th key={index}>{item.year}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Sales</td>
        {sortedOrderData.map((item, index) => (
          <td key={index}>{item.total}</td>
        ))}
      </tr>
      <tr>
        <td>Total Order</td>
        {orderData.map((item, index) => (
          <td key={index}>{item.order}</td>
        ))}
      </tr>
      <tr>
        <td>Avg Order</td>
        {orderData.map((item, index) => (
          <td key={index}>{(item.total / item.order).toFixed(1)}$</td>
        ))}
      </tr>
    </tbody>
  </table>
</div>

  )
}

export default BusinessTable
