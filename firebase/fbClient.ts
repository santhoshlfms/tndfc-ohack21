// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAQo5vjggG29DeWVB3M8PpxiIpevtKyls",
  authDomain: "tndfc-app.firebaseapp.com",
  projectId: "tndfc-app",
  storageBucket: "tndfc-app.appspot.com",
  messagingSenderId: "461564452227",
  appId: "1:461564452227:web:92adb403e007de51de6ab6",
  measurementId: "G-EEJVZK173R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);