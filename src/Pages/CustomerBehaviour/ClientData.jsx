import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
import CustomerSalesChart from "./CustomerSalesChart";
const ClientData = ({ selectedItem }) => {
  const [productData, setProductData] = useState([]);
  const [product,setProduct]=useState([])
  useEffect(() => {
    callApi(
      "https://emapp-backend.vercel.app/warehousepro/jsonData",
      setProductData
    );
  }, []); // Empty dependency array ensures this effect runs only once
  
  useEffect(() => {
    if (selectedItem && productData.length > 0) {
      const foundObject = productData.find(obj => obj.Client_Name_Clean === selectedItem.name);
      if (foundObject) {
        setProduct(foundObject.product);
      } else {
        setProduct([]); // Handle case when no matching object is found
      }
    }
  }, [selectedItem, productData]);
  // console.log(selectedItem)
  
  return (
    <div >
      <div className="flex justify-between">
      
        <div className="relative w-24 h-24 mx-auto">
        <h1 style={{ background: "#FFFFFF", color: "#294F41" }}
        className="font-bold text-center  cursor-pointer">Frequency</h1>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              style={{ color: "#294F41" }}
              className=" progress-ring__circle stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDashoffset="calc(400 - (400 * 45) / 100)"
            ></circle>

            <text
              x="50"
              y="50"
              fontFamily="Verdana"
              fontSize="16"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {selectedItem.Frequency}
            </text>
          </svg>
        </div>
        <div className="relative w-24 h-24 mx-auto">
        <h1 style={{ background: "#FFFFFF", color: "#294F41" }}
        className="font-bold text-center  cursor-pointer">Monetary</h1>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              style={{ color: "#294F41" }}
              className=" progress-ring__circle stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDashoffset="calc(400 - (400 * 45) / 100)"
            ></circle>

            <text
              x="50"
              y="50"
              fontFamily="Verdana"
              fontSize="16"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {selectedItem.Line_Item_Amount.toLocaleString()}
            </text>
          </svg>
        </div>
        <div className="relative w-24 h-24 mx-auto">
        <h1 style={{ background: "#FFFFFF", color: "#294F41" }}
        className="font-bold text-center  cursor-pointer">Recency</h1>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              style={{ color: "#294F41" }}
              className=" progress-ring__circle stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDashoffset="calc(400 - (400 * 45) / 100)"
            ></circle>

            <text
              x="50"
              y="50"
              fontFamily="Verdana"
              fontSize="16"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {selectedItem.Recency}
            </text>
          </svg>
        </div>
      </div>
      <h1 style={{ background: "#FFFFFF", color: "#294F41" }}
        className="font-bold text-center text-xl py-5 cursor-pointer">Customer Details</h1>
      <div  className="overflow-x-auto">
      <table className="table table-sm table-pin-rows table-pin-cols">
        <thead className="thead">
          <tr>
            <td>Name</td>
            <td>Highest Order</td>
            <td>Top Sales Product</td>
            <td>Client Create Date</td>
            <td>Last Order Date</td>
            <td>Last Ordered Product</td>
            <td>Lowest Order</td>
            <td>Lowest Sales Product</td>
            <td>Category</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr key="1">
            <td>{selectedItem.name}</td>
            <td>{selectedItem.Highest_Amount}</td>
            <td>{selectedItem.Highest_Product}</td>
            <td>{selectedItem.Client_Create_Date}</td>
            <td>{selectedItem.Last_Order_Date}</td>
            <td>{selectedItem.Last_Product}</td>
            <td>{selectedItem.Lowest_Amount}</td>
            <td>{selectedItem.Lowest_Product}</td>
            <td>{selectedItem.category}</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="overflow-auto max-h-44">
      <h1 style={{ background: "#FFFFFF", color: "#294F41" }}
        className="font-bold text-center text-xl py-5 cursor-pointer">Customer Sales Details</h1>
        <table className="table table-sm table-pin-rows table-pin-cols">
          <thead className="thead">
            <tr>
              <td>Product Name</td>
              <td>Order Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {product?.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Date_Billed}</td>
                <td>{item.Line_Item_Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        <h1 style={{ background: "#FFFFFF", color: "#294F41" }}
        className="font-bold text-center text-xl py-5 cursor-pointer">Customer Sales By year</h1>
        <CustomerSalesChart product={product} />
      </div>
    </div>
  );
};

export default ClientData;
ClientData.propTypes = {
  selectedItem: PropTypes.object.isRequired,
};
