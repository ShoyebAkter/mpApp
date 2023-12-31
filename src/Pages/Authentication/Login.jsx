import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/eulermail")
                console.log(user);
            })
            .catch((error) => {
                // console.log(errorCode, errorMessage)
                toast.error(error.message);
            });

    }

    return (
        <div className="bodySection ">

            <main className='loginsection  h-screen' >
                <section>
                    <img className='mx-auto h-72' src='logo.png' />
                    <div className="flex justify-center">
                        <form>
                            <div className='bg-slate-50 shadow-xl px-12 py-5 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <label htmlFor="email-address" className='box-decoration-slice text-gray-600 ' >
                                        Email:
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        className='bg-slate-200 mb-2'
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                

                                <div>
                                    <label htmlFor="password" className='box-decoration-clone text-gray-600 pe-2'>
                                        Password:
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className='bg-slate-200'
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='flex items-center justify-center py-7'>
                                <button type="button"
                                    onClick={onLogin}
                                    className="shadow-xl text-white bg-sky-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 ">
                                    Sign In</button>


                            </div>
                            <p className="text-sm text-white text-center">
                                Want Subscription? {' '}
                                <NavLink to="/Subscription" className="text-blue-700">
                                    Subscription
                                </NavLink>
                            </p>
                            <ToastContainer />
                        </form>

                    </div>

                </section>
            </main>
        </div>
    )
}

export default Login