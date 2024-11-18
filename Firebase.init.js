// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaftfXF1To2rufAwlwAadXay0PnI9Oydk",
  authDomain: "dragon-news-c73df.firebaseapp.com",
  projectId: "dragon-news-c73df",
  storageBucket: "dragon-news-c73df.firebasestorage.app",
  messagingSenderId: "79428155952",
  appId: "1:79428155952:web:762d890c690bec72588bf5",
  measurementId: "G-5F4Y9VPH13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app