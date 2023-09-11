
import { signOut } from 'firebase/auth';
import './Header.css'
// import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
	const [user] = useAuthState(auth);
	console.log(user);
	const logout = () => {
		signOut(auth);
		// localStorage.removeItem('accessToken');
	};
	return (
		<header className="header-fixed">

			<nav>
				<a href="#">Logo</a>
				<Link to="/home">EulerMail</Link>
				<Link to="/businessoverview">Business Overview</Link>
				<Link to="/customerBehaviour">Customer Behaviour</Link>
				<Link to="/campaignresult">Campaign Result</Link>
				<Link to="/socialmedia">Social Media</Link>
				<Link to="/campaignerdesign" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
					Campaign Designer
				</Link>
				<div>{user ?
					<button onClick={logout} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						Log Out
					</button>
					: <Link to="/login">Login</Link>}</div>
			</nav>

		</header>
	)
}

export default Header