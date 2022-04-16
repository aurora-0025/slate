import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlXQ6UqmRitOiq2unDS9nVQpPrFZ6VQY8",
    authDomain: "auth-development-4cbcc.firebaseapp.com",
    projectId: "auth-development-4cbcc",
    storageBucket: "auth-development-4cbcc.appspot.com",
    messagingSenderId: "15416203173",
    appId: "1:15416203173:web:7843863798ff94370bfa4c"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore()

export const auth = getAuth();