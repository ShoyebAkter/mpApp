// import { useState } from "react";
// import findSimilarProperties from "./findSimilarity";

export const CustomerApiCard = () => {
    // const [customerData,setCustomerData]=useState([]);
    // const customerTargetProperties=["birthdate","tier","details","role"];
    // const newCustomerArray=findSimilarProperties(customerTargetProperties,customerData.customer);
  return (
    <div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Enter your Customer Api.</p>
                <div className="my-5">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Api</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example.api/customers" required/>
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Analyse</button>
            </div>

        </div>
  )
}
