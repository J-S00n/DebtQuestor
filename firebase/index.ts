import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQMDy4Rjoe_zKoLPZErGhNcLsim6C40c8",
  authDomain: "debtquestor.firebaseapp.com",
  projectId: "debtquestor",
  storageBucket: "debtquestor.firebasestorage.app",
  messagingSenderId: "217535842905",
  appId: "1:217535842905:web:31f4c43e90ce4d18d4ff48",
  measurementId: "G-7V1T2E2BSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, analytics, auth, firestore };