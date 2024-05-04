import PropTypes from "prop-types"
const AccountPreference = ({setActiveSetting}) => {
  return (
    <div className="settingRightSide">
        <div className="profileDiv">
        <div >
            <div className="pb-5 headerName">Profile</div>
            <hr className="customHr"></hr>
            <div onClick={()=>setActiveSetting("Profile")} className="flex justify-between items-center py-3">Personal Information,thumbnail,address & verification <div className="arrow ms-2"></div></div>
            </div>
        </div>
        <div className="businessInfoDiv">
          <div >
            <div className="pb-5 headerName">Business Info</div>
            <div onClick={()=>console.log("clicked")} className="flex justify-between items-center py-3">Company name, location & industry info <div className="arrow ms-2"></div></div>
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
  )
}

export default AccountPreference
AccountPreference.propTypes = 
    {
        setActiveSetting:PropTypes.func.isRequired,

    }