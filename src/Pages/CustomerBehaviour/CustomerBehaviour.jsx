import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase.init"
import { Cohorts } from "./Cohorts"
import { Customers } from "./Customers"
import { Engagement } from "./Engagement"
import { Sales } from "./Sales"
import { useNavigate } from "react-router-dom"
import Loading from "../Authentication/Loading"
import { useState } from "react"
import { CiUser } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import './CustomerBehaviour.css'
import ScatterChart from "./ScatterChart"
import EngageLineChart from "./EngageLineChart"
import CustomerTable from "./CustomerTable"
import WarehouseproCategory from "./WarehouseproCategory"
import WarehouseproCustomer from "../BusinessOverview/WarehouseproCustomer"
import SmallCLient from "../EulerMail/SmallCLient";
import Heatmap from "./HeatMap"
import DataTable from "../BusinessOverview/DataTable"
export const CustomerBehaviour = () => {
  const [weeksData, setWeeksData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()
  if (loading) return <Loading></Loading>
  if (!user) {
    navigate('/login')
  }
  // console.log(selectedCategory)
  return (
    <div className="customerBehaviourMain">
      <div className="leftSection">
        <div style={{ "color": "#f8f8f8", "cursor": "pointer" }} className="flex flex-col justify-center items-center mb-5"> <CiUser /> Sales</div>
        <div style={{ "color": "#f8f8f8", "cursor": "pointer" }} className="flex flex-col justify-center items-center"><LuUsers/> Site data</div>
      </div>
      <div  className="mx-auto mt-3 ">
        <div className="firstChartSection ">
          
          {
            user.email ==="fuad@gmail.com" ?
            <div className="flex">
            <Customers />
            <Sales />
            </div>
            
            :
            <div className="flex">
            <EngageLineChart/>
            <ScatterChart/>
            </div>
          }
          
          
        </div>
        {
          user.email==="fuad@gmail.com" ?
          <div className="cohortChartSection">
          <Engagement setWeeksData={setWeeksData} />
          <Cohorts weeksData={weeksData} />
        </div>
        :
        <div className="firstChartSection">
          <WarehouseproCategory setSelectedCategory={setSelectedCategory}/>
          <CustomerTable selectedCategory={selectedCategory} customerTable={"categoryTable"}/>
        </div>
        }
        <div className="firstChartSection">
        <SmallCLient/>
        </div>
        <div className="clientSection">
        
        <WarehouseproCustomer/>
        </div>
        <div className="clientSection">
        <Cohorts/>
        
        </div>

        <div className="firstChartSection">
            <Heatmap/>
        </div>
        <div className="firstChartSection">
            <DataTable/>
        </div>
      </div>
    </div>
  )
}
