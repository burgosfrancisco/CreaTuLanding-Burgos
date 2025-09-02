// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRBdktR1NnC--NWLsRRdEH84LnRmvsvNE",
  authDomain: "creatulanding.firebaseapp.com",
  projectId: "creatulanding",
  storageBucket: "creatulanding.firebasestorage.app",
  messagingSenderId: "697328176662",
  appId: "1:697328176662:web:72b9efb0e82fecf1afaf37",
  measurementId: "G-B24858R73X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);