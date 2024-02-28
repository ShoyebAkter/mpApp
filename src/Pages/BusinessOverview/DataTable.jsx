import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";

const DataTable = () => {
    const [orderData,setOrderData]=useState([]);

    useEffect(()=>{
        callApi("https://emapp-backend.vercel.app/warehousepro/mainData",setOrderData)
    },[])
    // console.log(orderData)
  return (
    <div className="overflow-x-auto">
    <h1 className="heading">Data Table</h1>
    <table className="table table-sm table-pin-rows table-pin-cols">
  <thead className="thead">
    <tr>
      <th>Name</th>
      <th>Total Sales</th>
      <th>Client Create Date</th>
      <th>Country</th>
      <th>State</th>
      <th>Product/Service</th>
      <th>Item Amount</th>
    </tr>
  </thead>
  <tbody>
    {orderData.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.total}$</td>
        <td>{item.date}</td>
        <td>{item.country}</td>
        <td>{item.state}</td>
        <td>{item.Product}</td>
        <td>{item.Line_Item_Amount}$</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
  )
}

export default DataTable
