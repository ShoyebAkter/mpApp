
import './Header.css'
// import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Header() {
	
	return (
		<header className="header-fixed">

			<nav className='items-center'>
				<div style={{"width":"50px"}} ><img  src='logo2.png'/></div>
				<Link to="/">Home</Link>
				<Link to="/eulermail">EulerMail</Link>
				<Link to="/howitworks">How it Works</Link>
				<Link to="/ourallies">Our Allies</Link>
				<Link to="/contact">Contact</Link>
				<Link className='bg-emerald-800 text-white py-2 px-5 rounded-xl' to="/login">Login</Link>
			</nav>

		</header>
	)
}

export default Header