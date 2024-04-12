// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAozsEn5j1hrhcdJOtrscFZ_OClw3A5Ak8",
  authDomain: "clone-25268.firebaseapp.com",
  projectId: "clone-25268",
  storageBucket: "clone-25268.appspot.com",
  messagingSenderId: "329111791602",
  appId: "1:329111791602:web:516ee7e4328153eee22d6b",
  measurementId: "G-VTBHCKYYT4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;