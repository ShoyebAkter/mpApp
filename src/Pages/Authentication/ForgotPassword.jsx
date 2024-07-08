import { useState } from "react";
import { auth } from "../../firebase.init";
import axios from 'axios';
import { useAuthState } from "react-firebase-hooks/auth";
import { updatePassword,reauthenticateWithCredential,EmailAuthProvider } from "firebase/auth";
const ForgotPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user] = useAuthState(auth);

  const handleSubmit = async(e) => {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      oldPassword
   );
   if(newPassword===confirmPassword){
    // console.log(auth.currentUser)
    await reauthenticateWithCredential(auth.currentUser, credential);
    await updatePassword(auth.currentUser, newPassword);
    const response = await axios.put(`https://emapp-backend.vercel.app/eulermailUser/${user.uid}`, {
      password: newPassword,
      date: new Date().toISOString(),
    });
   }
  };

  return (
    <div className="mx-auto my-auto ">
      <div className="bg-slate-50 shadow-xl px-12 py-5 rounded-3xl flex justify-center">
          <div className="flex justify-center">
            <form>
              <div>
                <div className="emailSec">
                  <label
                    htmlFor="oldpassword"
                    className="box-decoration-slice text-gray-600 mr-5"
                  >
                    Old Password:
                  </label>
                  <input
                    id="oldpassword"
                    name="pass"
                    type="password"
                    className="bg-slate-200 mb-2"
                    required
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <div className="emailSec">
                  <label
                    htmlFor="newpassword"
                    className="box-decoration-slice text-gray-600 mr-5"
                  >
                    New Password:
                  </label>
                  <input
                    id="newpassword"
                    name="pass"
                    type="pass"
                    className="bg-slate-200 mb-2"
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="emailSec">
                  <label
                    htmlFor="password"
                    className="box-decoration-slice text-gray-600 mr-5"
                  >
                    Enter The New Password:
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="bg-slate-200 mb-2"
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
        </div>
    </div>
  );
};

export default ForgotPassword;
