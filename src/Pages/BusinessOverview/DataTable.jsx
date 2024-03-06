import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
import PropTypes from "prop-types"
const DataTable = ({selectedCountry,stateName,selectedProduct,cohortYear,activeYear}) => {
    const [orderData,setOrderData]=useState([]);
    const [filteredData, setFilteredData] = useState([]);
    // console.log(selectedProduct)
    useEffect(()=>{
        callApi("https://emapp-backend.vercel.app/warehousepro/mainData",setOrderData)
        
    },[])
    useEffect(() => {
      if (stateName) {
          const data = orderData.filter(obj => obj.state === stateName);
          setFilteredData(data);
      } else if(selectedProduct) {
        const data = orderData.filter(obj => obj.Product === selectedProduct);
          setFilteredData(data);
          // If no stateName is provided, set filteredData to the original orderData
      }else if(activeYear && cohortYear){
        const data2 = orderData.filter(obj => obj.Cohort_Year===parseInt(cohortYear, 10));
        const objectsWithyear= data2.filter(obj => obj.Activity_Year.includes(parseInt(activeYear, 10)));
        
        setFilteredData(objectsWithyear);
      }else if(selectedCountry){
        const data = orderData.filter(obj => obj.country === selectedCountry);
          setFilteredData(data);
      }
      else{
        setFilteredData(orderData); 
      }
  }, [stateName,selectedProduct, orderData,cohortYear,activeYear,selectedCountry]);
// console.log(cohortYear,activeYear)

  return (
    <div className="overflow-x-auto">
    <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl py-5 cursor-pointer">Business Overview Table</h1>
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
    {  filteredData.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.total.toLocaleString()}$</td>
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
DataTable.propTypes = 
    {
      selectedCountry:PropTypes.string.isRequired,
      stateName:PropTypes.string.isRequired,
      selectedProduct:PropTypes.string.isRequired,
      cohortYear:PropTypes.string.isRequired,
      activeYear:PropTypes.string.isRequired

    }