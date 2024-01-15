import { signOut } from "firebase/auth";
import "./Header.css";
// import { signOut } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

export const LoginHeader = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(menuOpen)
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  // console.log(user);
  const logout = () => {
    signOut(auth);
    navigate("/");
    // localStorage.removeItem('accessToken');
  };
  return (
    <div>
      {user ? (
        <header className={`header-fixed ${menuOpen ? "open" : ""}`}>
          <nav className='items-center'>
            <div style={{ width: "50px" }}>
              <img src="Logo_Iso_Green.png" />
            </div>
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
              className={activeLink === "/businessoverview" ? "font-bold" : ""}
            >
              Business Overview
            </Link>
            <Link
              to="/customerBehaviour"
              onClick={() => handleLinkClick("/customerBehaviour")}
              className={activeLink === "/customerBehaviour" ? "font-bold" : ""}
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

            <button
              onClick={logout}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Log Out
            </button>
            <div className="hamburger-menu" onClick={toggleMenu}>
              ☰{" "}
              {/* You can use an icon or any other content for the hamburger menu */}
            </div>
          </nav>
        </header>
      ) : null}
    </div>
  );
};
