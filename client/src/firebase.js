// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-84892.firebaseapp.com",
  projectId: "mern-estate-84892",
  storageBucket: "mern-estate-84892.appspot.com",
  messagingSenderId: "215897525261",
  appId: "1:215897525261:web:c0d904648f2dfa96cb5944"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);