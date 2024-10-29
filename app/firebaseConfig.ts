// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUKPemowRmz06CI2JmS_iFMD2vqAHBFyc",
  authDomain: "allbirds-ecommerce.firebaseapp.com",
  projectId: "allbirds-ecommerce",
  storageBucket: "allbirds-ecommerce.appspot.com",
  messagingSenderId: "129343310982",
  appId: "1:129343310982:web:119dce32a62ba41830d507",
  measurementId: "G-M3H08TZJT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;