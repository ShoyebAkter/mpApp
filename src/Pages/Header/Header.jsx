// import { useEffect } from "react";
import "./Header.css";
// import { signOut } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(()=>{
  //   // Tracking Code
  //   (function() {
  //     function trackLinkClick(event) {
  //       var clickedLink = event.target.href; // Get the URL of the clicked link

  //       var trackingData = {
  //         page: window.location.href,
  //         linkClicked: clickedLink,
  //         timestamp: new Date().toISOString(),
  //         // Add more data as needed
  //       };
  //       console.log(trackingData)
  //       // Send the data to your server or analytics service
  //       // Replace the URL with your server endpoint
  //       var trackingEndpoint = 'https://emapp-backend.vercel.app/collect';

  //       // Use XMLHttpRequest or fetch API to send data to the server
  //       var xhr = new XMLHttpRequest();
  //       xhr.open('POST', trackingEndpoint, true);
  //       xhr.setRequestHeader('Content-Type', 'application/json');
  //       xhr.send(JSON.stringify(trackingData));
  //     }

  //     // Add click event listeners to all links in the document
  //     var links = document.querySelectorAll('a');
  //     links.forEach(function(link) {
  //       link.addEventListener('click', trackLinkClick);
  //     });
  //   })();
  // },[])
  const navigate = useNavigate();
  const toggleMenu = () => {
    document.getElementById("menusidebar").style.width = "200px";
  };
  const closeSideBar = () => {
    document.getElementById("menusidebar").style.width = "0px";
  };
  return (
    <div>
      <div className="mobileHeader">
        <div className="mobilestyle">
          <header className="header-fixed">
            <nav className={`navbarSec `}>
              <img
                onClick={() => navigate("/")}
                className="headerlogo"
                src="Logo_Iso_Green.jpg"
              />

              <div>
                <a href="#introduction">HOME</a>
                <a href="#businessInsight">EULERMAIL</a>
                <a href="#integration">HOW IT WORKS</a>
                <a href="#allies">OUR ALLIES</a>
                <a href="#contactUs">CONTACT</a>
                <Link
                  className="bg-emerald-800 mx-7 text-white py-2 px-5 rounded-xl"
                  to="/login"
                >
                  LOGIN
                </Link>
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
      </div>
    </div>
  );
}

export default Header;
