import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { BottomChart } from "./BottomChart"
import { MiddleChart } from "./MiddleChart"
import { TopChart } from "./TopChart"
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";
import { SiSimpleanalytics } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import './TopChart.css'
import LinearRegChart from "../EulerMail/LinearRegChart";
import { useState } from "react";
export const Main = () => {
  const [user, loading] = useAuthState(auth);
  const [address, setAddress] = useState('315 Madison Avenue, Suite 3014 New York NY 10017');
  const [country, setCountry] = useState('');
  const navigate = useNavigate()
  if (loading) return <Loading></Loading>
  if (!user) {
    navigate('/login')
  }

  const extractCountryFromAddress = async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();
      // console.log(data)
      if (data && data.length > 0) {
        const country = data[0].display_name.split(',').reverse()[0].trim(); 
        setCountry(country);
      } else {
        setCountry('Country not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  extractCountryFromAddress();
  // console.log(country)
  return (
    <div className="overviewMain flex justify-between">
      <div style={{"background":"#439541"}} className="leftGreenSec px-3 pt-10">
        <div style={{"color":"#f8f8f8","cursor":"pointer"}} className="flex flex-col justify-center items-center mb-5"> <SiSimpleanalytics /> Sales</div>
        <div style={{"color":"#f8f8f8","cursor":"pointer"}} className="flex flex-col justify-center items-center"><FaDatabase/>Site data</div>
      </div>
      <div className="mx-auto">

        <TopChart />
        {
          user.email==="fuad@gmail.com" ?
          <MiddleChart/>
          :
          <LinearRegChart/>
        }
        
        <div style={{ "height": "300px", "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)', "overflow": "hidden" }} className=" rounded-2xl py-1">
          <h1 className="text-center text-3xl text-green-600 ">Users in Each Country</h1>
          <BottomChart />
        </div>
        <div>
        
      </div>
      </div>
      
    </div>
  )
}
