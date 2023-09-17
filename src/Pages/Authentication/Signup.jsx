import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom"
import { auth } from "../../firebase";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }
  return (
    <>
      <main className='loginsection ' >
        <section>
        <img className='mx-auto h-72' src='logo.png' />
          <div className="flex h-screen justify-center ">

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
                  onClick={onSubmit}
                  className="shadow-xl text-white bg-sky-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                  Sign Up</button>


              </div>
              <p className="text-sm text-white text-center">
                Already have an account?{' '}
                <NavLink to="/login" className="text-blue-700">
                  Sign in
                </NavLink>
              </p>

            </form>

          </div>

        </section>
      </main>
    </>
  )
}

export default Signup