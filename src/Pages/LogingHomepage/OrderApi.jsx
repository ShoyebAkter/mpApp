import { useEffect, useState } from "react";
// import findSimilarProperties from "./findSimilarity";

export const OrderApi = () => {
    const [orderApi,setOrderApi]=useState("")
    // useEffect(()=>{
    //    
    // },[])
    const getOrderData=()=>{
      // fetch(orderApi)
      //     .then(res=>res.json())
      //     .then(result=>console.log(result))
    }
    // const [orderData,setOrderData]=useState([]);
    // const ordertargetProperties = ['order', 'total','date','price','name','product','item'];
    // const newOrderArray=findSimilarProperties((ordertargetProperties,orderData.orders));
    // const postData=()=>{
    //   fetch(api,{
    //     method: "POST",
    //     headers:{
    //       "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(newOrderArray)
    //   })
    // }
  return (
    <div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Enter your Order Api.</p>
                <div className="my-5">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order Api</label>
                    <input
                    onChange={(e)=>setOrderApi(e.target.value)}
                    type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example.api/orders" required/>
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Analyse</button>
            </div>

        </div>
  )
}
