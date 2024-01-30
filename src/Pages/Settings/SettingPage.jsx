import { FaLock, FaUser } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { MdDashboard,MdOutlineCampaign  } from "react-icons/md";
import "./SettingPage.css";
const SettingPage = () => {
  return (
    <div className="mainSetting">
      <div className="settingLeftSide">
        <div className="headerName">Settings</div>
        <div className="flex items-center gap-4"> <FaUser /> Account Preference</div>
        <div  className="flex items-center gap-4"><FaLock />Security</div>
        <div className="flex items-center gap-4"> <IoShareSocial />Data & Connection</div>
        <div  className="flex items-center gap-4"> <MdDashboard />Dashboard Option</div>
        <div className="flex items-center gap-4"> <MdOutlineCampaign />Campaign Designer</div>
      </div>
      <div className="settingRightSide">
        <div className="businessInfoDiv">
          <div >
            <div className="pb-5 headerName">Business Info</div>
            <div className="flex justify-between items-center py-3">Company name, location & industry info <div className="arrow ms-2"></div></div>
            <hr className="customHr"></hr>
            <div className="flex justify-between items-center py-3">Address verification <div className="arrow ms-2"></div></div>
          </div>
        </div>
        <div className="generalDiv">
          <div className="py-5 headerName">General preferences</div>
          <div className="flex justify-between items-center py-3">Language <div className="arrow ms-2"></div></div>
          <hr className="customHr"></hr>
          <div className="flex justify-between items-center py-3">Location information <div className="arrow ms-2"></div></div>
          <hr className="customHr"></hr>
          <div className="flex justify-between items-center py-3">Notifications <div className="arrow ms-2"></div></div>
          <hr className="customHr"></hr>
          <div className="flex justify-between items-center py-3">Reports <div className="arrow ms-2"></div></div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
