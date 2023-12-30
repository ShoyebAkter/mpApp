import { LineChart } from "./LineChart"
import { RevenueChart } from "./RevenueChart"
import './Realtime.css'
export const RealTImeUpdates = () => {
    const firstxLinedata=[10,20,30,40,5,60,70];
    const secondxLinedata=[40,20,30,10,5,20,70];
    const thirdxLinedata=[80,50,90,40,5,10,30];
    const fourthxLinedata=[30,20,80,40,5,60,70];
    const firstyLinedata=[10,50,40,30,5,20,10];
    const secondyLinedata=[10,20,30,40,5,60,70];
    const thirdyLinedata=[10,20,30,40,5,60,70];
    const fourthyLinedata=[10,20,30,40,5,65,7];
    return (

        <div className="realTimeDiv p-10">
            <h1 className="header1">Real Time Updates</h1>
            <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className="flex justify-between rounded-2xl  mt-5">
                <div style={{ "width": "30px", "background": "#649445" }} className="rounded-s-2xl"></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Total Sales</h1> <LineChart firstxLinedata={firstxLinedata} firstyLinedata={firstyLinedata} /></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Orders</h1> <LineChart secondxLinedata={secondxLinedata} secondyLinedata={secondyLinedata}/></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Customer Quantty</h1> <LineChart thirdxLinedata={thirdxLinedata} thirdyLinedata={thirdyLinedata} /></div>
                <div className='rounded-xl my-5' ><h1 className="text-center">Avg Order</h1> <LineChart fourthxLinedata={fourthxLinedata} fourthyLinedata={fourthyLinedata} /></div>

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
