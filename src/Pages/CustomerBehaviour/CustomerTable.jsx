import { useEffect, useState } from "react"
import { callApi } from "../EulerMail/getSalesData";
import PropTypes from 'prop-types';
const CustomerTable = ({customerTable}) => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        customerTable ==="longevityTable"?
        callApi('https://emapp-backend.vercel.app/warehousepro/longevity',setData)
        :
        callApi('https://emapp-backend.vercel.app/warehousepro/clientCategory',setData)
    },[])
    // console.log(data)
  return (
    <div className="overflow-x-auto">
            <table className="table table-sm table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th></th>
                        <td>Name</td>
                        <td>Line Item Amount</td>
                        <td>Client Create Date</td>
                        <td>{customerTable ==="longevityTable" ?'Client Longevity Months ': "Category"}</td>
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
                            <td>{customerTable ==="longevityTable" ?item.Client_Longevity_Months: item.category}</td>
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

export default CustomerTable
CustomerTable.propTypes =
{
    customerTable: PropTypes.string.isRequired
}