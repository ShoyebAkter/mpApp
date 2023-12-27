import { LineChart } from "./LineChart"

export const RealTImeUpdates = () => {
  return (
    <div>
        <div style={{"boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)',"height":"300px"}} className="flex justify-between rounded-2xl p-10 mt-5 mx-5">
        <div className='rounded-xl my-5' ><h1 className="text-center">Total Sales</h1> <LineChart/></div>
        <div className='rounded-xl my-5' ><h1 className="text-center">Orders</h1> <LineChart/></div>
        <div className='rounded-xl my-5' ><h1 className="text-center">Customer Quantty</h1> <LineChart/></div>
        <div className='rounded-xl my-5' ><h1 className="text-center">Avg Order</h1> <LineChart/></div>
            
        </div>
    </div>
  )
}
