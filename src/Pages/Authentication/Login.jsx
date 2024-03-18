import { useEffect, useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth} from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://emapp-backend.vercel.app/eulermailUser")
        .then((res) => res.json())
        .then((result) => setUsers(result))
        .catch((error) => console.error(error));
    },[])

  const onLogin = (e) => {
    e.preventDefault();
    // console.log(users)
    // fetch(`https://emapp-backend.vercel.app/accessToken/${email}`)
    //     .then((res) => res.json())
    //     .then((result) => localStorage.setItem("accessToken",result.token))
    //     .catch((error) => console.error(error));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
       

      const emailExists = users.some(obj => obj.email === user.email);
      const isadmin=users.find(obj => obj.role === 'admin');
      const customerObj=users.find(obj => obj.email === user.email);
        if(customerObj.role==="customer"){
          localStorage.setItem("companyName",customerObj.name)
        }
      // console.log(emailExists)
      if(!emailExists){
        const userInfo={
            uid:user.uid,
            email:user.email
        }
        fetch("https://emapp-backend.vercel.app/eulermailUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
        .then(res=>res.json())
        .then(data=>console.log(data.token))
        ;
      }
      if(isadmin.email===user.email){
        navigate('/dashboard')
      }
      else{
        navigate("/eulermail");
      }

      
        // Signed in
        
        
        
      })
      .catch((error) => {
        // console.log(errorCode, errorMessage)
        toast.error(error.message);
      });
  };
  // const  initiatePasswordReset=async()=> {
  //   try {
  //     if(email){
  //       localStorage.setItem("email",email)
  //       navigate('/resetPassword')
  //     }else{
  //       toast.error("Please Enter your email");
  //     }
      
  // } catch (error) {    
  //   if (error.code === 'auth/user-not-found') {
  //     alert('User not found, try again!')
  //     setEmail('')
  //   }
  // }
    
  // }
  
  
  return (
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
                    Email:
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    className="bg-slate-200 mb-2"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="emailSec">
                  <label
                    htmlFor="password"
                    className="box-decoration-clone text-gray-600 pe-2"
                  >
                    Password:
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="bg-slate-200"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <button className="mt-2" onClick={initiatePasswordReset}>Reset Password</button> */}
              </div>

              <div className="flex items-center justify-center py-7">
                <button
                  type="button"
                  onClick={onLogin}
                  className="shadow-xl text-white bg-sky-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 "
                >
                  Sign In
                </button>
              </div>
              <p className="text-sm text-white text-center">
                Want Subscription?{" "}
                <NavLink to="/Subscription" className="text-blue-700">
                  Subscription
                </NavLink>
              </p>
              <p className="text-sm text-white text-center pt-5">
                Go back to{" "}
                <NavLink to="/" className="text-blue-700">
                  Home
                </NavLink>
              </p>
              <ToastContainer />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
