import CustomerBehaviour from "./CustomerBehaviour"
import OverviewChart from "./OverviewChart"
// import SocialMediaChart from "./SocialMediaChart"

function BusinessChart() {


    return (
        <div className="mt-10">
            <div className="flex text-black justify-around ">
                <div className="text-xl font-bold">Company Name</div>
                <div className=" border-solid border-2 border-lime-500 rounded-xl px-2 text-lime-600">General Report</div>
            </div>
            <div className="flex justify-around my-5">
                <OverviewChart />
                <CustomerBehaviour />
            </div>
            {/* <div className="flex justify-around">
            <SocialMediaChart />
            </div> */}
        </div>
    )
}

export default BusinessChart