import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { confirmThePasswordReset } from '../../firebase.init'

const ForgotPassword = () => {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [successMessage, setSuccessMessage] = useState(false)
    const [password,setPassword]=useState('');
    const [link,setLink]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const email=localStorage.getItem("email")
    const getLink=()=>{
        
        const obj={
            email:email
          }
          fetch('https://emapp-backend.vercel.app/passwordReset', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj ),
          })
          .then(response => response.json())
          .then(data=>setLink(data.link))
          .catch(error => {
            console.error('Error generating password reset link:', error);
          });
    }
    
    

// Now you can use the oobCode as needed
// console.log(oobCode);
    const handleSubmit = async (e) => {
      e.preventDefault()
      getLink();
      if (password !== confirmPassword) {
        alert("Passwords did not match.")
        return;
      }
console.log(link)
      const queryString = link.split('?')[1];

// Parse the query string into an object
const queryParams = new URLSearchParams(queryString);

// Get the value of the 'oobCode' parameter
const oobCode = queryParams.get('oobCode');
console.log(oobCode)
      console.log(oobCode)
      try {
        if (oobCode) {
          await confirmThePasswordReset(oobCode, confirmPassword)
          
          setSuccessMessage(true)
        } else {
          alert('Something is wrong; try again later!')
          console.log('missing oobCode')
        }
      } catch (error) {
        if (error.code === 'auth/invalid-action-code') {
          alert('Something is wrong; try again later.')
        }
        console.log(error.message)        
      }
    }

    const handleChange = (e) => {
      const { name, value } = e.target
    }

  return (
    <div>
        {
          successMessage ?
          <div>
            <h3>Success! Your Password change successfully</h3>
            <button 
              onClick={() => navigate('/')}
            >
              Go to the Login page
            </button>
          </div> :
          <div className="bodySection ">
      <main className="loginsection  h-screen">
        <section>
          <img className="mx-auto h-72" src="logo.png" />
          <div className="flex justify-center">
            <form>
              <div className="bg-slate-50 shadow-xl px-12 py-5 rounded-3xl">
                <div className="emailSec">
                  <label
                    htmlFor="email-address"
                    className="box-decoration-slice text-gray-600 "
                  >
                    Password:
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    className="bg-slate-200 mb-2"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="emailSec">
                  <label
                    htmlFor="password"
                    className="box-decoration-clone text-gray-600 pe-2"
                  >
                    Confirm Password:
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="bg-slate-200"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center py-7">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="shadow-xl text-white bg-sky-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
        }
      </div>
  )
}

export default ForgotPassword
