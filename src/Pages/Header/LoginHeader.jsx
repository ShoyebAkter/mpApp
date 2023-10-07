
import { signOut } from 'firebase/auth';
import './Header.css'
// import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from './Header';

export const LoginHeader = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(user);
    const logout = () => {
        signOut(auth);
       navigate("/")
        // localStorage.removeItem('accessToken');
    };
    return (
        <div>
            {
                user ?
                    <header className="header-fixed">

                        <nav className='items-center'>
                            <div style={{ "width": "50px" }} ><img src='logo2.png' /></div>
                            <Link to="/eulermail">EulerMail</Link>
                            <Link to="/businessoverview">Business Overview</Link>
                            <Link to="/customerBehaviour">Customer Behaviour</Link>
                            <Link to="/campaignresult">Campaign Result</Link>
                            <Link to="/socialmedia">Social Media</Link>
                            <Link to="/campaignerdesign" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                                Campaign Designer
                            </Link>
    
                            <button onClick={logout} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Log Out
                            </button>
                        </nav>

                    </header>
                    :
                    <Header />
            }
        </div>
    )
}
