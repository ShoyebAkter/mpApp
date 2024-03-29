import { useEffect, useState } from "react"
import { callApi } from "../EulerMail/getSalesData";
import './Table.css'
import PropTypes from 'prop-types';
const CustomerTable = ({setSelectedItem,selectedCategory,customerTable}) => {
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
    <div style={{"maxHeight":"400px"}} className="overflow-x-auto ">
    <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl mb-3 cursor-pointer">Customer Table</h1>
            <table className="table table-sm table-pin-rows table-pin-cols">
                <thead className="thead">
                    <tr>
                        <td>Name</td>
                        <td>Line Item Amount</td>
                        <td>Client Create Date</td>
                        <td>Last Order Date</td>
                        <td>Total Order</td>
                        <td>{customerTable ==="longevityTable" ?'Client Longevity Months ': "Category"}</td>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {(newData && newData.length > 0 ? newData : data).map((item, index) => (
                        <tr className="cursor-pointer" key={index} onClick={()=>setSelectedItem(item)}>
                            <td>{item.name}</td>
                            <td>${item.Line_Item_Amount.toLocaleString()}</td>
                            <td>{item.Client_Create_Date}</td>
                            <td>{item.Last_Order_Date}</td>
                            <td>{item.Frequency}</td>
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

    setSelectedItem: PropTypes.func.isRequired,
    customerTable: PropTypes.string.isRequired,
    selectedCategory:PropTypes.string.isRequired,
}