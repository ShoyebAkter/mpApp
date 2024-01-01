
import { signOut } from 'firebase/auth';
import './Header.css'
// import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

export const LoginHeader = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);
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
                            <div style={{ "width": "50px" }} ><img src='Logo_Iso_Green.png' /></div>
                            <Link to="/eulermail">EulerMail</Link>
                            <Link to="/businessoverview">Business Overview</Link>
                            <Link to="/customerBehaviour">Customer Behaviour</Link>
                            <Link to="/campaignresult">Campaign Result</Link>
                            <Link to="/socialmedia">Social Media</Link>
                            <Link to="/campaignerdesign" style={{"background":"#439541","boxShadow": '2px 2px 5px rgba(0, 0, 0, 0.5)'}} className=" text-white hover:text-white  py-1 px-4 rounded-full shadow-lg">
                                Campaign Designer
                            </Link>
    
                            <button onClick={logout} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Log Out
                            </button>
                        </nav>

                    </header>
                    :
                    null
            }
        </div>
    )
}
