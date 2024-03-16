import { useEffect, useState } from 'react'
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
    
    useEffect(()=>{
      const getLink = async () => {
        const obj = {
          email: email
        };
      
        try {
          const response = await fetch('https://emapp-backend.vercel.app/passwordReset', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          console.log(data)
          setLink(data.link);
        } catch (error) {
          console.error('Error generating password reset link:', error);
        }
      };
       getLink();
    },[])

// Now you can use the oobCode as needed
// console.log(oobCode);
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
     // Wait for getLink to complete and update the link state
    if (!link) {
      console.error('No link received from server');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords did not match.");
      return;
    }

    const queryString = link.split('?')[1];

    // Parse the query string into an object
    const queryParams = new URLSearchParams(queryString);

    // Get the value of the 'oobCode' parameter
    const oobCode = queryParams.get('oobCode');
    // console.log(oobCode)
    if (oobCode) {
      await confirmThePasswordReset(oobCode, confirmPassword);
      localStorage.removeItem("email");
      navigate('/login');
    } else {
      alert('Something is wrong; try again later!');
      console.log('missing oobCode');
    }
  } catch (error) {
    console.error('Error handling password reset:', error);
    alert('Something went wrong; try again later.');
  }
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
