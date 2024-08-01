// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA99ZqSdXtYZK2OMsZoNnAFPK5-iyjWi6w",
  authDomain: "netflix-clone-57315.firebaseapp.com",
  projectId: "netflix-clone-57315",
  storageBucket: "netflix-clone-57315.appspot.com",
  messagingSenderId: "681712459939",
  appId: "1:681712459939:web:54de5969e9222c14309f16",
  measurementId: "G-9GT8X4TZVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
