import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3y0cxz-1OUt9THo1bql8O5R1eQ5gTAY",
  authDomain: "modified-talon-381413.firebaseapp.com",
  projectId: "modified-talon-381413",
  storageBucket: "modified-talon-381413.appspot.com",
  messagingSenderId: "825296107634",
  appId: "1:825296107634:web:934f3f3c9eb44b4d6caaeb",
  measurementId: "G-CB4NEYTS3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider;
export{auth,provider};