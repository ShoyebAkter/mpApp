
import './Header.css'
// import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Header() {
	
	return (
		<header  className="header-fixed">
			<nav className='navbarSec'>
				<div className='headerlogo' ><img src='Logo_Iso_Green.png' /></div>
				<div className="links">
					<a href='#introduction'>HOME</a>
					<a href='#businessInsight'>EULERMAIL</a>
					<a href='#integration'>HOW IT WORKS</a>
					<a href='#allies'>OUR ALLIES</a>
					<a href='#contactUs'>CONTACT</a>
					<Link className='bg-emerald-800 text-white py-2 px-5 rounded-xl' to="/login">LOGIN</Link>
				</div>
			</nav>

		</header>
	)
}

export default Header