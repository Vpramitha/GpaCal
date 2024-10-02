import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVVAdRpZU62bRxMa5vxcEMcFF3yDILJiY",
  authDomain: "gpacalculator-31d33.firebaseapp.com",
  projectId: "gpacalculator-31d33",
  storageBucket: "gpacalculator-31d33.appspot.com",
  messagingSenderId: "532455956816",
  appId: "1:532455956816:web:5870d298ee8878a3850c55",
  measurementId: "G-WPMTPRSE89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Export the Firestore instance
