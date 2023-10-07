// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvNAPMWyv8fJEXaT8AK94WoBg7aMhlzYg",
  authDomain: "emapp-558a9.firebaseapp.com",
  projectId: "emapp-558a9",
  storageBucket: "emapp-558a9.appspot.com",
  messagingSenderId: "738777849930",
  appId: "1:738777849930:web:56b60329a9cdf0d482c6b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;