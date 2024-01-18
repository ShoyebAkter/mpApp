import { useState } from "react";
import "./Header.css";
// import { signOut } from 'firebase/auth';
import { Link } from "react-router-dom";

function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.getElementById("menusidebar").style.width = "200px";
  };
  const closeSideBar = () => {
    document.getElementById("menusidebar").style.width = "0px";
  };
  return (
    <header className="header-fixed">
      <nav className={`navbarSec `}>
        <div className="headerlogo">
          <img src="Logo_Iso_Green.png" />
        </div>
        <div className="links">
          <a href="#introduction">HOME</a>
          <a href="#businessInsight">EULERMAIL</a>
          <a href="#integration">HOW IT WORKS</a>
          <a href="#allies">OUR ALLIES</a>
          <a href="#contactUs">CONTACT</a>
          <Link
            className="bg-emerald-800 text-white py-2 px-5 rounded-xl"
            to="/login"
          >
            LOGIN
          </Link>
        </div>
        <div>
          <a
            className="hamburger-menu"
            href="javascript:void(0)"
            onClick={toggleMenu}
          >
            ☰{" "}
          </a>

          {/* You can use an icon or any other content for the hamburger menu */}
        </div>
      </nav>
      <div className="sidebar" id="menusidebar">
        <a
          href="javascript:void(0)"
          className="close-btn"
          onClick={closeSideBar}
        >
          &times;
        </a>
        <div className="links">
          <a href="#introduction">HOME</a>
          <a href="#businessInsight">EULERMAIL</a>
          <a href="#integration">HOW IT WORKS</a>
          <a href="#allies">OUR ALLIES</a>
          <a href="#contactUs">CONTACT</a>
          <Link
            className="bg-emerald-800 text-white py-2 px-5 mx-8 rounded-xl"
            to="/login"
          >
            LOGIN
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
