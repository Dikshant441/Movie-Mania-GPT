// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKlQ51YzkAaFOb6XVWpJMFzgio104tlfM",
  authDomain: "movie-mania-bc467.firebaseapp.com",
  projectId: "movie-mania-bc467",
  storageBucket: "movie-mania-bc467.appspot.com",
  messagingSenderId: "242065584145",
  appId: "1:242065584145:web:ac6fbffa70dca2aae601b0",
  measurementId: "G-NSBK42B4M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();