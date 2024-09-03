// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-da06b.firebaseapp.com",
  projectId: "blog-da06b",
  storageBucket: "blog-da06b.appspot.com",
  messagingSenderId: "600213090869",
  appId: "1:600213090869:web:2cb8e9acc3b6b78bdd777c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
