
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkcy02H0mi2yIEYoS8F5euT8brMziN7GE",
  authDomain: "chat-app-6eaf7.firebaseapp.com",
  projectId: "chat-app-6eaf7",
  storageBucket: "chat-app-6eaf7.appspot.com",
  messagingSenderId: "1089471324445",
  appId: "1:1089471324445:web:e1c06fc858b85e640bc1f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();