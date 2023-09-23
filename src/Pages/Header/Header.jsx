
import './Header.css'
// import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Header() {
	
	return (
		<header className="header-fixed">

			<nav className='items-center'>
				<div style={{"width":"50px"}} ><img  src='logo2.png'/></div>
				<a href='/'>Home</a>
				<a href='#businessInsight'>EulerMail</a>
				<a href='#integration'>How it Works</a>
				<a href='#allies'>Our Allies</a>
				<a href='#contactUs'>Contact</a>
				<Link className='bg-emerald-800 text-white py-2 px-5 rounded-xl' to="/login">Login</Link>
			</nav>

		</header>
	)
}

export default Header