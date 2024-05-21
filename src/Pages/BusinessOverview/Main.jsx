import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { BottomChart } from "./BottomChart";
import { MiddleChart } from "./MiddleChart";
import { TopChart } from "./TopChart";
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";
import { SiSimpleanalytics } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import "./TopChart.css";
import LinearRegChart from "../EulerMail/LinearRegChart";
import { BsCartCheck } from "react-icons/bs";
import ProductServiceChart from "../CustomerBehaviour/ProductServiceChart";
import BusinessTable from "./BusinessTable";
import MapChart from "./MapChart";
import DataTable from "./DataTable";
import { useState } from "react";
export const Main = () => {
  const [user, loading] = useAuthState(auth);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProduct,setSelectedProduct]=useState(null)
  const [stateName,setStateName]=useState()
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  if (!user) {
    navigate("/login");
  }
  // console.log(selectedCountry)
  return (
    <div className="overviewMain flex justify-between">
      <div
        style={{ backgroundColor: "white",}}
        className="leftGreenSec px-3 pt-10"
      >
        <div
          style={{ color: "#294F41", cursor: "pointer" }}
          className="flex gap-3 items-center mb-5 font-bold"
        >
          {" "}
          <SiSimpleanalytics /> <span style={{"color":"#3D3D3D","fontWeight":"600"}}>Sales</span>
        </div>
        <div
          style={{ color: "#294F41", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold"
        >
          <FaDatabase />
          <span style={{"color":"#3D3D3D","fontWeight":"600"}}>Site data</span>
        </div>
        <div
          style={{ color: "#294F41", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold"
        >
          <BsCartCheck />
          <span style={{"color":"#3D3D3D","fontWeight":"600"}}>Cart Analysis</span>
        </div>
      </div>
      <div className="mx-auto mt-20">
        <TopChart />
        {
          user.email === "warehousepro@gmail.com" &&
           <>
           <div className="topChart">
          <div className="greenDiv"></div>
          <BusinessTable/>
        </div>
        <div className="topChart">
          <div className="greenDiv"></div>
          <ProductServiceChart setSelectedProduct={setSelectedProduct}/>
        </div>
           </>
        }
        
        
        {user.email === "warehousepro@gmail.com" ? (
          <div>
            <LinearRegChart />
          </div>
        ) : (
          <MiddleChart />
        )}

        <div
          style={{
            height: "500px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            "background":"white"
          }}
          className=" rounded-2xl py-1 mb-10"
        >
          <h1 style={{"background":"#F5F5F5","color":"#294F41"}} className="font-bold text-center text-2xl py-5 cursor-pointer">
            Users in Each Country/State
          </h1>
          {
            selectedCountry==="United States" && user.email==="warehousepro@gmail.com" ?
            <MapChart setSelectedCountry={setSelectedCountry} setStateName={setStateName}/>
            :
            <BottomChart setSelectedCountry={setSelectedCountry}/>
          }
          
          
        </div>
        {
          user.email === "warehousepro@gmail.com" &&
          <div className="tableArea">
          <div className="greenDiv"></div>
          <DataTable selectedCountry={selectedCountry} selectedProduct={selectedProduct} stateName={stateName}/>
        </div>
        }
        
      </div>
      
    </div>
  );
};
