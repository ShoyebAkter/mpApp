import { useState } from "react";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail } from "firebase/auth";
const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);

  // useEffect(()=>{
  //   const getLink = async () => {
  //     const obj = {
  //       email: user.email,
  //     };

  //     try {
  //       const response = await fetch("https://emapp-backend.vercel.app/passwordReset", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(obj),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();
  //       console.log(data);
  //       // setLink(data.link);
  //     } catch (error) {
  //       console.error("Error generating password reset link:", error);
  //     }
  //   };
  //   getLink();
  // },[user.email])

  // console.log(link)

  // Now you can use the oobCode as needed
  // console.log(oobCode);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === user.email) {
      sendPasswordResetEmail(auth, user.email)
        .then((res) => {
          setSuccessMessage(true);
          console.log(res);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } else {
      console.log("password didn't match");
    }

    // try {
    //   // Wait for getLink to complete and update the link state
    //   if (!link) {
    //     console.error("No link received from server");
    //     return;
    //   }

    //   if (password !== confirmPassword) {
    //     alert("Passwords did not match.");
    //     return;
    //   }

    //   const queryString = link.split("?")[1];

    //   // Parse the query string into an object
    //   const queryParams = new URLSearchParams(queryString);

    //   // Get the value of the 'oobCode' parameter
    //   const oobCode = queryParams.get("oobCode");
    //   // console.log(oobCode)
    //   if (oobCode) {
    //     await confirmThePasswordReset(oobCode, confirmPassword);
    //     localStorage.removeItem("email");
    //     navigate("/login");
    //   } else {
    //     alert("Something is wrong; try again later!");
    //     console.log("missing oobCode");
    //   }
    // } catch (error) {
    //   console.error("Error handling password reset:", error);
    //   alert("Something went wrong; try again later.");
    // }
  };

  return (
    <div className="mx-auto my-auto ">
      {successMessage ? (
        <div className="he">
          <h3>
            An password reset email is sent to your gmail account.Check it to
            change password.
          </h3>
        </div>
      ) : (
        <div className="bg-slate-50 shadow-xl px-12 py-5 rounded-3xl flex justify-center">
          <div className="flex justify-center">
            <form>
              <div>
                <div className="emailSec">
                  <label
                    htmlFor="email-address"
                    className="box-decoration-slice text-gray-600 mr-5"
                  >
                    Enter Your Email:
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
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
