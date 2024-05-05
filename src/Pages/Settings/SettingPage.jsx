import { FaLock, FaUser } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { MdDashboard,MdOutlineCampaign  } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import "./SettingPage.css";
import AccountPreference from "./AccountPreference";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import ForgotPassword from "../Authentication/ForgotPassword";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { callApi } from "../EulerMail/getSalesData";
const SettingPage = () => {
  const [activeSetting,setActiveSetting]=useState("");
  const [data,setData]=useState([]);
  const [user]=useAuthState(auth)
    useEffect(()=>{
        callApi("https://emapp-backend.vercel.app/subscription/database",setData)
    },[])
    // console.log(data)
    const foundObject = user && data.find(obj => obj?.email === user.email);
  // console.log(activeSetting)
  return (
    <div style={{"paddingTop":"110px"}} className="mainSetting">
      <div className="settingLeftSide">
        <div className="headerName flex gap-10"> <img style={{"width":"50px","height":"50px"}} src={foundObject?.photoUrl} alt=""/> Settings</div>
        <div onClick={()=>setActiveSetting("AccountPreference")} className="flex items-center gap-4"> <FaUser /> Account Preference</div>
        <div onClick={()=>setActiveSetting("password")} className="flex items-center gap-4"> <TbPassword />Change Password</div>
        <div onClick={()=>setActiveSetting("Security")} className="flex items-center gap-4"><FaLock />Security</div>
        <div onClick={()=>setActiveSetting("Data")} className="flex items-center gap-4"> <IoShareSocial />Data & Connection</div>
        <div onClick={()=>setActiveSetting("Dashboard")} className="flex items-center gap-4"> <MdDashboard />Dashboard Option</div>
        <div onClick={()=>setActiveSetting("Campaign")} className="flex items-center gap-4"> <MdOutlineCampaign />Campaign Designer</div>
      </div>
      {
        activeSetting ==="AccountPreference" && <AccountPreference setActiveSetting={setActiveSetting}  />
      }
      {
        activeSetting ==="Profile" && <Profile/>
      }
      {
        activeSetting ==="password" && <ForgotPassword/>
      }
      
    </div>
  );
};

export default SettingPage;
