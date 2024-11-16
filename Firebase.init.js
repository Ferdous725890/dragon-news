// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGCnoh390eS7QitBvSC9OhFIxVv-4rJ4s",
  authDomain: "conceptual-section-e4db7.firebaseapp.com",
  projectId: "conceptual-section-e4db7",
  storageBucket: "conceptual-section-e4db7.firebasestorage.app",
  messagingSenderId: "267371640847",
  appId: "1:267371640847:web:076f720d40a18e56d2cb7a",
  measurementId: "G-JYTRE5BJ0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth