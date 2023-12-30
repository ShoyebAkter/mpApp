import { LineChart } from "./LineChart"
import { RevenueChart } from "./RevenueChart"
import './Realtime.css'
export const RealTImeUpdates = () => {
    const firstxLinedata = [10, 20, 15, 40, 35, 60, 50];
    const secondxLinedata = [30, 20, 30, 20, 35, 20, 70];
    const thirdxLinedata = [80, 50, 90, 40, 5, 10, 30];
    return (

        <div className="realTimeDiv p-10">
            <h1 className="header1">Real Time Updates</h1>
            <section className="flex justify-between rounded-2xl">
                <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className="flex rounded-2xl">
                    <div style={{ "width": "30px", "background": "#649445" }} className="rounded-s-2xl"></div>
                    <div className='rounded-xl my-5' ><h1 className="text-center">Total Sales</h1> <LineChart firstxLinedata={firstxLinedata} /></div>
                    <div className='rounded-xl my-5' ><h1 className="text-center">Orders</h1> <LineChart secondxLinedata={secondxLinedata} /></div>
                    <div className='rounded-xl my-5' ><h1 className="text-center">Customer Quantty</h1> <LineChart thirdxLinedata={thirdxLinedata} /></div>
                </div>
                <div>
                    Writing
                </div>
            </section>


            
            <section className="flex justify-between">
                <div>Writing</div>
                <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)', "height": "350px", "width": "100%" }} className=" flex justify-between rounded-2xl mt-5">
                    <div style={{ "width": "30px", "background": "#649445" }} className="rounded-s-2xl"></div>
                    
                    <div>
                        <h1 className="text-center my-3">Monthly Revenue</h1>
                        <RevenueChart />
                    </div>
                </div>
            </section>
        </div>
    )
}
