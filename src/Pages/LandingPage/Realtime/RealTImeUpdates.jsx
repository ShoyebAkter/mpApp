import { LineChart } from "./LineChart"
import { RevenueChart } from "./RevenueChart"
import './Realtime.css'
export const RealTImeUpdates = () => {
    const firstxLinedata = [10, 20, 15, 40, 35, 60, 50];
    const secondxLinedata = [30, 20, 30, 20, 35, 20, 70];
    const thirdxLinedata = [80, 50, 90, 40, 5, 10, 30];
    return (

        <div className="realTimeDiv">
            <h1 className="header1">Real Time Updates</h1>
            <section className="firstSec ">
                <div  className="lineChart ">
                    <p className="greenSec"></p>
                    <div className='rounded-xl mt-5' ><h1 className="text-center font-bold mb-5">Total Sales</h1> <LineChart firstxLinedata={firstxLinedata} /></div>
                    <div className='orderChart' ><h1 className=" text-center font-bold mb-5">Orders</h1> <LineChart secondxLinedata={secondxLinedata} /></div>
                    <div className='customerChart ' ><h1 className="text-center font-bold mb-5">Customer Quantity</h1> <LineChart thirdxLinedata={thirdxLinedata} /></div>
                </div>
                <section className="custom-hr"></section>
                <div className="writingSection">
                    <span className="font-bold">Instant Visibility:</span> Our KPI dashboards
                    update in real-time, giving you
                    immediate insights into your
                    campaign performance. No more
                    waiting for periodic reports to make
                    crucial decisions.
                </div>
            </section>



            <section className="secondSec ">
                <div className="writingSection">
                    <span className="font-bold"> Customizable Metrics:</span> Tailor your
                    dashboard to focus on the KPIs that
                    matter most to your business. From
                    click-through rates to customer
                    engagement, see what drives your
                    growth.
                </div>
                <section className="custom-hr"></section>
                <div className="revenueChart">
                    <p className="greenSec"></p>

                    <div className="mx-auto rounded-xl ">
                        <RevenueChart />
                    </div>
                </div>
            </section>
            <section className="thirdSec">
                <section className="mapImgSec"><img src="/map.png" alt="" /></section>
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
