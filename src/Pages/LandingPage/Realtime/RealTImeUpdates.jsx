import { LineChart } from "./LineChart"
import { RevenueChart } from "./RevenueChart"
import './Realtime.css'
export const RealTImeUpdates = () => {
    return (
        <div className="realTimeDiv p-10">
            <h1 className="header1">Real Time Updates</h1>
            <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className="flex justify-between rounded-2xl  mt-5">
                <div style={{ "width": "30px", "background": "#649445" }} className="rounded-s-2xl"></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Total Sales</h1> <LineChart /></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Orders</h1> <LineChart /></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Customer Quantty</h1> <LineChart /></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Avg Order</h1> <LineChart /></div>

            </div>
            <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)', "height": "350px", "width": "100%" }} className=" flex justify-between rounded-2xl mt-5">
                <div style={{ "width": "30px", "background": "#649445" }} className="rounded-s-2xl"></div>
                <div>
                    <h1 className="text-center my-3">Monthly Revenue</h1>
                    <RevenueChart />
                </div>
            </div>
        </div>
    )
}
