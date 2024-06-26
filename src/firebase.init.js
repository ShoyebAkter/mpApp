import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  confirmPasswordReset } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: "emapp-558a9",
  storageBucket: "emapp-558a9.appspot.com",
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


export const confirmThePasswordReset = async (oobCode, newPassword) => {
  if (!oobCode && !newPassword) return;
  console.log(oobCode,newPassword)
  return await confirmPasswordReset(auth, oobCode, newPassword);
};
