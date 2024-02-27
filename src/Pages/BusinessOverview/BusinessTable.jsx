import { useEffect, useState } from "react"
import { callApi } from "../EulerMail/getSalesData";

const BusinessTable = () => {
    const [orderData,setOrderData]=useState([]);

    useEffect(()=>{
        callApi("https://emapp-backend.vercel.app/warehousepro/orders",setOrderData)
    },[])
  return (
    <div className="overflow-x-auto">
    <h1 className="heading">Business Table</h1>
            <table className="table table-sm table-pin-rows table-pin-cols">
                <thead className="thead">
                    <tr>
                        <td>Year</td>
                        <td>Total Sales</td>
                        <td>Total Order</td>
                        <td>Avg Order</td>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.total}</td>
                            <td>{item.order}</td>
                            <td>{(item.total/item.order).toFixed(1)}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default BusinessTable
