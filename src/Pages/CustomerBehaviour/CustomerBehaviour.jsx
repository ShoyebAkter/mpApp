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
import DataTable from "../BusinessOverview/DataTable"
import ActiveCohort from "./ActiveCohort"
import ClientData from "./ClientData"
import WarehouseCategory from "./WarehouseCategory"
export const CustomerBehaviour = () => {
  const [weeksData, setWeeksData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cohortYear,setCohortYear]=useState(0)
    const [activeYear,setActiveYear]=useState(0)
    const[selectedItem,setSelectedItem]=useState(null)
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()
  if (loading) return <Loading></Loading>
  if (!user) {
    navigate('/login')
  }
  // console.log(selectedCategory,selectedItem.category)
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
            <div className="flex insideFirstSec">
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
        <div  className="firstChartSection">
          <WarehouseproCategory setSelectedCategory={setSelectedCategory}/>
          {/* <WarehouseCategory/> */}
        </div>
        }
        {selectedItem?.category===selectedCategory ?
  <div className="firstChartSection">
    <ClientData selectedItem={selectedItem} />
  </div>
  :
  null
}
        <div className="firstChartSection">
          <CustomerTable setSelectedItem={setSelectedItem} selectedCategory={selectedCategory} customerTable={"categoryTable"}/>
        </div>
        {/* <div className="firstChartSection">
        <SmallCLient/>
        </div>
        <div className="clientSection">
        
        <WarehouseproCustomer/>
        </div> */}
        <div className="clientSection">
        <ActiveCohort setCohortYear={setCohortYear} setActiveYear={setActiveYear} />
        
        </div>
        <div className="firstChartSection">
            <DataTable cohortYear={cohortYear} activeYear={activeYear} />
        </div>
        <div className="clientSection">
        <Cohorts/>
        
        </div>

        {/* <div className="firstChartSection">
            <Heatmap/>
        </div> */}
        
      </div>
    </div>
  )
}
