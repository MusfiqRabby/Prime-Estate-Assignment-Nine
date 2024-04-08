// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFUVIP4Zr_8wJrjzJxCN5ythZqhBh3Rw4",
  authDomain: "assignment9-firebase-auth.firebaseapp.com",
  projectId: "assignment9-firebase-auth",
  storageBucket: "assignment9-firebase-auth.appspot.com",
  messagingSenderId: "752296506636",
  appId: "1:752296506636:web:52ecb6a0013bc9e0f04529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;