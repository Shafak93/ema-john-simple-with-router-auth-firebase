// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEOTXb8QcrIoGK3Lr_VxGE-z9vnty-JBU",
  authDomain: "ema-john-simple-ccce1.firebaseapp.com",
  projectId: "ema-john-simple-ccce1",
  storageBucket: "ema-john-simple-ccce1.appspot.com",
  messagingSenderId: "853451548296",
  appId: "1:853451548296:web:2d6c4655353a20d969213d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;