import { useEffect, useState } from "react"
import { callApi } from "../EulerMail/getSalesData";

const CategoryTable = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        callApi('https://emapp-backend.vercel.app/warehousepro/longevity',setData)
    },[])
  return (
    <div className="overflow-x-auto">
            <table className="table table-sm table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th></th>
                        <td>Name</td>
                        <td>Line Item Amount</td>
                        <td>Client Create Date</td>
                        <td>Last Order Date</td>
                        <td>Client Longevity Months</td>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.Line_Item_Amount}</td>
                            <td>{item.Client_Create_Date}</td>
                            <td>{item.Last_Order_Date}</td>
                            <td>{item.Client_Longevity_Months}</td>
                            <th>{index + 1}</th>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <td>Name</td>
                        <td>Line Item Amount</td>
                        <td>Client Create Date</td>
                        <td>Client Longevity Months</td>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
  )
}

export default CategoryTable
