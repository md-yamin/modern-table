// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"import.meta.env.apiKey",
  authDomain:"import.meta.env.APP_authDomain",
  projectId:"import.meta.env.APP_projectId",
  storageBucket:"import.meta.env.APP_storageBucket",
  messagingSenderId:"import.meta.env.APP_messagingSenderId",
  appId:"import.meta.env.APP_appId",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app