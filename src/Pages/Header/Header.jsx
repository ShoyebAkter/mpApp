
import './Header.css'
// import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Header() {
	
	return (
		<header  className="header-fixed">
			<nav className='flex justify-around'>
				<div style={{ "width": "80px" }} ><img src='logo2.png' /></div>
				<div className="flex items-center ">
					<Link to='/'>Home</Link>
					<a href='#businessInsight'>EulerMail</a>
					<a href='#integration'>How it Works</a>
					<a href='#allies'>Our Allies</a>
					<a href='#contactUs'>Contact</a>
					<Link className='bg-emerald-800 text-white py-2 px-5 rounded-xl' to="/login">Login</Link>
				</div>
			</nav>

		</header>
	)
}

export default Header