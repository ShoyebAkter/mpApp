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
            <section className="flex justify-center rounded-2xl">
                <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className="flex rounded-2xl">
                    <div style={{ "width": "30px", "background": "#439541" }} className="rounded-s-2xl"></div>
                    <div className='rounded-xl my-5' ><h1 className="text-center">Total Sales</h1> <LineChart firstxLinedata={firstxLinedata} /></div>
                    <div className='rounded-xl my-5' ><h1 className="text-center">Orders</h1> <LineChart secondxLinedata={secondxLinedata} /></div>
                    <div className='rounded-xl my-5' ><h1 className="text-center">Customer Quantty</h1> <LineChart thirdxLinedata={thirdxLinedata} /></div>
                </div>
                <section className="custom-hr"></section>
                <div className="writingSection rounded-xl p-2">
                    <span className="font-bold">Instant Visibility:</span> Our KPI dashboards
                    update in real-time, giving you
                    immediate insights into your
                    campaign performance. No more
                    waiting for periodic reports to make
                    crucial decisions.
                </div>
            </section>



            <section className="flex justify-center">
                <div className="writingSection my-auto rounded-xl p-2">
                   <span className="font-bold"> Customizable Metrics:</span> Tailor your
                    dashboard to focus on the KPIs that
                    matter most to your business. From
                    click-through rates to customer
                    engagement, see what drives your
                    growth.
                </div>
                <section className="custom-hr"></section>
                <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)', "height": "200px", "width": "700px" }} className=" flex  rounded-2xl mt-5">
                    <div style={{ "width": "30px", "background": "#439541" }} className="rounded-s-2xl"></div>

                    <div className="mx-auto">
                        <h1 className="text-center my-3">Monthly Revenue</h1>
                        <RevenueChart />
                    </div>
                </div>
            </section>
            <section className="flex justify-center mt-5">
                <section><img src="/map.png" alt="" /></section>
                <section className="custom-hr"></section>
                <div className="writingSection my-auto rounded-xl p-2">
                   <span className="font-bold" >User-Friendly Design:</span>  Navigate your
                    KPIs effortlessly with our intuitive
                    dashboard layout. Easily toggle
                    between different metrics to get a
                    comprehensive view of your business
                    landscape.
                </div>
            </section>
        </div>
    )
}
