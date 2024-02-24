import { useEffect, useState } from "react"
import { callApi } from "../EulerMail/getSalesData";
import './Table.css'
import PropTypes from 'prop-types';
const CustomerTable = ({selectedCategory,customerTable}) => {
    const [data,setData]=useState([]);
    const [newData,setNewData]=useState([])
    useEffect(()=>{
        customerTable ==="longevityTable"?
        callApi('https://emapp-backend.vercel.app/warehousepro/longevity',setNewData)
        :
        callApi('https://emapp-backend.vercel.app/warehousepro/clientCategory',setData);
        
        const filteredArray = data.filter(obj => obj.category === selectedCategory);
        setNewData(filteredArray)
    },[selectedCategory])

    
    
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
                    {(newData && newData.length > 0 ? newData : data).map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.Line_Item_Amount}</td>
                            <td>{item.Client_Create_Date}</td>
                            <td>{customerTable ==="longevityTable" ?item.Client_Longevity_Months: item.category}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default CustomerTable
CustomerTable.propTypes =
{
    customerTable: PropTypes.string.isRequired,
    selectedCategory:PropTypes.string.isRequired,
}