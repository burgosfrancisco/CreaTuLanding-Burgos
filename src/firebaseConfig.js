// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRBdktR1NnC--NWLsRRdEH84LnRmvsvNE",
  authDomain: "creatulanding.firebaseapp.com",
  projectId: "creatulanding",
  storageBucket: "creatulanding.appspot.com",   // 👈 CORREGIDO
  messagingSenderId: "697328176662",
  appId: "1:697328176662:web:72b9efb0e82fecf1afaf37",
  measurementId: "G-B24858R73X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore (esto lo usa tu app)
export const db = getFirestore(app);
