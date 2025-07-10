
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr8ADFhFNq9FMpVaRFPSNcllF3TmtIaRA",
  authDomain: "ecommerce-p1-ba8b8.firebaseapp.com",
  projectId: "ecommerce-p1-ba8b8",
  storageBucket: "ecommerce-p1-ba8b8.firebasestorage.app",
  messagingSenderId: "1093300227594",
  appId: "1:1093300227594:web:9b340bf8e2026d0339d9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();