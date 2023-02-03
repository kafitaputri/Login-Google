// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWurh8bDe2yCnkXzvD5RJQM4cRHVM3RlU",
  authDomain: "login-kafita.firebaseapp.com",
  projectId: "login-kafita",
  storageBucket: "login-kafita.appspot.com",
  messagingSenderId: "623003019353",
  appId: "1:623003019353:web:dd5cdf864c0650fb882948",
  measurementId: "G-EBJQG96GT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth