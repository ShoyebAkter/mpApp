import { signOut } from "firebase/auth";
import "./Header.css";
// import { signOut } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { callApi } from "../EulerMail/getSalesData";

export const LoginHeader = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [data,setData]=useState([]);
    const shopify=localStorage.getItem("shopify");
    useEffect(()=>{
      if(shopify){
        callApi("https://emapp-backend.vercel.app/subscription/database",setData)
      }
    },[])
    // console.log(data)
    const foundObject = user && data.find(obj => obj?.email === user.email);
    // console.log(foundObject)
    foundObject && localStorage.setItem("companyName",foundObject.companyName)
  const toggleMenu = () => {
    document.getElementById("menusidebar").style.width = "300px";
  };
  const closeSideBar = () => {
    document.getElementById("menusidebar").style.width = "0px";
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  // console.log(user);
  const logout = () => {
    signOut(auth);
    navigate("/");
    localStorage.removeItem('companyName');
    localStorage.removeItem('shopify');
    localStorage.removeItem('shopifyEmail');
    localStorage.removeItem('accessToken');
  };
  return (
    <div>
      {user ? (
        <div className="mobileHeader">
          <header className={`header-fix`}>
            <nav className={`navbarSec`}>
            
              <img onClick={()=>navigate('/')} className="headerlogo" src="Logo_Iso_Green.jpg" />
            
              <Link
                to="/eulermail"
                onClick={() => handleLinkClick("/eulermail")}
                className={activeLink === "/eulermail" ? "font-bold" : ""}
              >
                EulerMail
              </Link>
              <Link
                to="/businessoverview"
                onClick={() => handleLinkClick("/businessoverview")}
                className={
                  activeLink === "/businessoverview" ? "font-bold" : ""
                }
              >
                Business Overview
              </Link>
              <Link
                to="/customerBehaviour"
                onClick={() => handleLinkClick("/customerBehaviour")}
                className={
                  activeLink === "/customerBehaviour" ? "font-bold" : ""
                }
              >
                Customer Behaviour
              </Link>
              <Link
                to="/campaignresult"
                onClick={() => handleLinkClick("/campaignresult")}
                className={activeLink === "/campaignresult" ? "font-bold" : ""}
              >
                Campaign Result
              </Link>
              <Link
                to="/socialmedia"
                onClick={() => handleLinkClick("/socialmedia")}
                className={activeLink === "/socialmedia" ? "font-bold" : ""}
              >
                Social Media
              </Link>
              <Link
                to="/campaignerdesign"
                onClick={() => handleLinkClick("/campaignerdesign")}
                className={
                  activeLink === "/campaignerdesign"
                    ? "font-bold text-white hover:text-white  py-1 px-4 rounded-full shadow-lg"
                    : "text-white hover:text-white  py-1 px-4 rounded-full shadow-lg"
                }
                style={{
                  background: "#294F41",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                Campaign Designer
              </Link>

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className={foundObject.photoUrl ? "" : "newLink rounded-3xl m-1"}>
                {
                  foundObject.photoUrl ? <img style={{"width":"30px","height":"30px"}} src={foundObject.photoUrl} alt=""/>
                  :
                  <CiUser />
                }
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2  shadow  rounded-box w-52"
                >
                  <li>
                  <Link
                to="/settings"
              >
                Settings
              </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="mt-3 logoutBtn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div>
            <a
              className="hamburger-menu"
              href="javascript:void(0)"
              onClick={toggleMenu}
            >
              <img src="/hamburger.png" alt="" />
            </a>

            {/* You can use an icon or any other content for the hamburger menu */}
          </div>
          <div className="sidebar" id="menusidebar">
            <a
              href="javascript:void(0)"
              className="close-btn"
              onClick={closeSideBar}
            >
              &times;
            </a>
            <div className="links">
              <Link
                to="/eulermail"
                onClick={() => handleLinkClick("/eulermail")}
                className={activeLink === "/eulermail" ? "font-bold" : ""}
              >
                EulerMail
              </Link>
              <Link
                to="/businessoverview"
                onClick={() => handleLinkClick("/businessoverview")}
                className={
                  activeLink === "/businessoverview" ? "font-bold" : ""
                }
              >
                Business Overview
              </Link>
              <Link
                to="/customerBehaviour"
                onClick={() => handleLinkClick("/customerBehaviour")}
                className={
                  activeLink === "/customerBehaviour" ? "font-bold" : ""
                }
              >
                Customer Behaviour
              </Link>
              <Link
                to="/campaignresult"
                onClick={() => handleLinkClick("/campaignresult")}
                className={activeLink === "/campaignresult" ? "font-bold" : ""}
              >
                Campaign Result
              </Link>
              <Link
                to="/socialmedia"
                onClick={() => handleLinkClick("/socialmedia")}
                className={activeLink === "/socialmedia" ? "font-bold" : ""}
              >
                Social Media
              </Link>
              <Link
                to="/campaignerdesign"
                onClick={() => handleLinkClick("/campaignerdesign")}
                className={
                  activeLink === "/campaignerdesign"
                    ? "font-bold text-white hover:text-white  py-1 px-4 rounded-full shadow-lg"
                    : "text-white hover:text-white  py-1 px-4 rounded-full shadow-lg"
                }
                style={{
                  background: "#439541",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                Campaign Designer
              </Link>
              <Link
                to="/settings"
              >
                Settings
              </Link>
              <button
                onClick={logout}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
