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
        style={{ background: "#294F41" }}
        className="leftGreenSec px-3 pt-10"
      >
        <div
          style={{ color: "#f8f8f8", cursor: "pointer" }}
          className="flex flex-col justify-center items-center mb-5"
        >
          {" "}
          <SiSimpleanalytics /> Sales
        </div>
        <div
          style={{ color: "#f8f8f8", cursor: "pointer" }}
          className="flex flex-col justify-center items-center"
        >
          <FaDatabase />
          Site data
        </div>
      </div>
      <div className="mx-auto">
        <TopChart />
        
        <div className="topChart">
          <div className="greenDiv"></div>
          <BusinessTable/>
        </div>
        <div className="topChart">
          <div className="greenDiv"></div>
          <ProductServiceChart setSelectedProduct={setSelectedProduct}/>
        </div>
        
        {user.email === "fuad@gmail.com" ? (
          <MiddleChart />
        ) : (
          <div>
            <LinearRegChart />
          </div>
        )}

        <div
          style={{
            height: "500px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            "background":"white"
          }}
          className=" rounded-2xl py-1"
        >
          <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-2xl py-5 cursor-pointer">
            Users in Each Country/State
          </h1>
          {
            selectedCountry==="USA" ?
            <MapChart setSelectedCountry={setSelectedCountry} setStateName={setStateName}/>
            :
            <BottomChart setSelectedCountry={setSelectedCountry}/>
          }
          
          
        </div>
        <div className="tableArea">
          <div className="greenDiv"></div>
          <DataTable selectedCountry={selectedCountry} selectedProduct={selectedProduct} stateName={stateName}/>
        </div>
      </div>
      
    </div>
  );
};
