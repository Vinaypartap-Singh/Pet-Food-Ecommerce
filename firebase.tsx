import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUWB2Ad-M0WtvM0b7TdphwKoMHOJplpJ8",
  authDomain: "petfood-ecommerce.firebaseapp.com",
  projectId: "petfood-ecommerce",
  storageBucket: "petfood-ecommerce.appspot.com",
  messagingSenderId: "15707312026",
  appId: "1:15707312026:web:8e550d26d65ec774d5f423",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
