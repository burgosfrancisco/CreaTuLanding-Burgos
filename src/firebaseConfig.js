// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRbtdkR1nNc--NwLSRdEhB4LhRmmsvvNE",
  authDomain: "creatualanding.firebaseapp.com",
  projectId: "creatualanding",
  storageBucket: "creatualanding.firebasestorage.app",
  messagingSenderId: "697328176662",
  appId: "1:697328176662:web:72b9efbe082fcf1faf37",
  measurementId: "G-B248S8R73X"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos
export const db = getFirestore(app);
