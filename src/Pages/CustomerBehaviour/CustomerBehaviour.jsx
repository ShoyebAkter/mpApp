import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { Cohorts } from "./Cohorts";
import { Customers } from "./Customers";
// import { FBEngagement } from "./FBEngagement"
import { Sales } from "./Sales";
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import "./CustomerBehaviour.css";
import ScatterChart from "./ScatterChart";
import EngageLineChart from "./EngageLineChart";
import CustomerTable from "./CustomerTable";
import WarehouseproCategory from "./WarehouseproCategory";
import DataTable from "../BusinessOverview/DataTable";
import ActiveCohort from "./ActiveCohort";
import ClientData from "./ClientData";
import WarehouseproCat from "./WarehouseproCat";
import CustomerSegment from "./CustomerSegment";
import Engagement from "./Engagement";
import ShopifyCustomerTable from "./ShopifyCustomerTable";
export const CustomerBehaviour = () => {
  const [data, setData] = useState([]);
  const [barName,setBarName]=useState("")
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cohortYear, setCohortYear] = useState(0);
  const [activeYear, setActiveYear] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [totalSales, setTotalSales] = useState(0);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  if (!user) {
    navigate("/login");
  }
  // console.log(selectedCategory,selectedItem.category)
  return (
    <div className="customerBehaviourMain">
      <div className="leftSection">
        <div
          style={{  width: "150px", cursor: "pointer" }}
          className="flex font-bold gap-3 center items-center mb-5"
        >
         <img src="./sales.png" alt=""/></div>
        <div
          style={{  width: "150px", cursor: "pointer" }}
          className="flex font-bold gap-3 items-center"
        >
         <img src="./sitedata.png" alt=""/></div>
      </div>
      <div className="mx-auto mt-3 ">
        <div className="firstChartSection ">
          {user.email === "warehousepro@gmail.com" ? (
            <div className="flex insideFirstSec">
              <EngageLineChart />
              <ScatterChart />
            </div>
          ) : (
            <div className="flex gap-16 insideFirstSec">
              <Customers setData={setData} setBarName={setBarName} />
              <CustomerSegment />
            </div>
          )}
        </div>
        <div className="firstChartSection ">
          {
            data && <div className="flex gap-16 insideFirstSec">
              <ShopifyCustomerTable data={data} barName={barName}/>
            </div>
          }
        </div>
        {user.email === "warehousepro@gmail.com" ? (
          <div className="firstChartSection">
            <WarehouseproCat
              setSelectedCategory={setSelectedCategory}
              setTotalSales={setTotalSales}
            />
            <WarehouseproCategory totalSales={totalSales} />
          </div>
        ) : (
          <div className="cohortChartSection ">
            <Sales />
            <Engagement />
            {/* <FBEngagement setWeeksData={setWeeksData} /> */}
          </div>
        )}
        {selectedItem?.category === selectedCategory &&
        user.email === "warehousepro@gmail.com" ? (
          <div className="firstChartSection">
            <ClientData selectedItem={selectedItem} />
          </div>
        ) : null}
        {user.email === "warehousepro@gmail.com" && (
          <div>
            <div className="firstChartSection">
              <CustomerTable
                setSelectedItem={setSelectedItem}
                selectedCategory={selectedCategory}
                customerTable={"categoryTable"}
              />
            </div>
            <div className="clientSection">
              <ActiveCohort
                setCohortYear={setCohortYear}
                setActiveYear={setActiveYear}
              />
            </div>
            <div className="firstChartSection">
              <DataTable cohortYear={cohortYear} activeYear={activeYear} />
            </div>
            <div className="clientSection">
              <Cohorts />
            </div>
          </div>
        )}

        {/* <div className="firstChartSection">
            <Heatmap/>
        </div> */}
      </div>
    </div>
  );
};
