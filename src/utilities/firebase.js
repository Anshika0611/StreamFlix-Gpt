// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnuI3T0HQN1PyJ-V7Sj568sD08XeeTYBE",
  authDomain: "streamflix-gpt-f5fd8.firebaseapp.com",
  projectId: "streamflix-gpt-f5fd8",
  storageBucket: "streamflix-gpt-f5fd8.firebasestorage.app",
  messagingSenderId: "667306208407",
  appId: "1:667306208407:web:7a8b5e1d8fc3b9b7d40dd2",
  measurementId: "G-Q2EKJC2G9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()